import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	try {
		const body = await req.json();
		const { email, username, avatar } = body;

		if (!email || !username || !avatar) {
			return NextResponse.json(
				{
					message: 'Missing values',
					description:
						'Email, Username and Avatar are compulsary it seems you have missing one or more of them',
					type: 'error',
				},
				{ status: 422 }
			);
		}

		await prisma.$connect();
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				avatar,
			},
		});

		return NextResponse.json(newUser, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	} finally {
		// await prisma.$disconnect();
	}
}
