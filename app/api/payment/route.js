import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/constants/prisma';

export async function POST(request) {
	// console.log("payment time")
	let isTransactionDone = false;
	try {
		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
		let data = await request.json();
		let priceId = data.priceId;
		let user = data.user;
		console.log(priceId);

		let updatePlan;
		if (priceId === 'price_1O59q7SGdVUlhVDJwM0MMVVb') updatePlan = 'basic';
		else if (priceId === 'price_1O4mTZSGdVUlhVDJIv43Rxgy')
			updatePlan = 'premium';
		else if (priceId === 'price_1O4mROSGdVUlhVDJUn6f1MLL')
			updatePlan = 'pro';

		console.log({message: 'it is from payment route', updatePlan})

		if (!updatePlan)
			return NextResponse.json({ message: 'Invalid priceId' });

		await prisma.$connect();
		let currentUser = await prisma.user.findUnique({
			where: {
				email: user.email,
			},
		});

		if (!currentUser) return NextResponse.json({ message: 'Invalid user' });

		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			mode: 'subscription',
			success_url: process.env.NEXTAUTH_URL,
			cancel_url: process.env.NEXTAUTH_URL,
		});

		isTransactionDone = true;

		if (currentUser) {
			const updatedPlan = await prisma.user.update({
				where: {
					email: user.email,
				},
				data: {
					plan: updatePlan.toUpperCase(),
				},
			});
			isTransactionDone = isTransactionDone && true;
			console.log({updatedPlan,  message: 'payment route', isTransactionDone })
		}


		if (isTransactionDone) {
			return NextResponse.json(session.url);
		}
	} catch (error) {
		console.log(error);
		return NextResponse.error(error);
	} finally {
		console.log('payment time');
		await prisma.$disconnect();
	}
}
