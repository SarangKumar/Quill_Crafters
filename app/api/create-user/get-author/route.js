import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	// console.log('GET')
	try {
		await prisma.$connect();
		const allUsers = await prisma.user.findMany({
			where: {
				isAuthor: true,
			},
		});

		return NextResponse.json(allUsers, { status: 200 });
		// return NextResponse.json({message: 'message'}, {status: 200})
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
