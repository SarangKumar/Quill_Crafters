import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const { user_id } = await req.json();


	try {
		prisma.$connect();
		const favourite_novels = await prisma.favourite.findMany({
			where: {
				user_id: user_id,
			},
			include: {
				novel: true,
			},
		});
        console.log(favourite_novels)
		return NextResponse.json(favourite_novels, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
