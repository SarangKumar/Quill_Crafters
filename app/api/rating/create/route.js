import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const { user_id, novel_id, rating } = await req.json();

	try {
		prisma.$connect();
		const newRating = await prisma.rating.create({
			data: {
				user_id,
				novel_id,
				rating: parseInt(rating),
			},
		});
		console.log(newRating);
		return NextResponse.json(newRating, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.error(error);
	} finally {
		await prisma.$disconnect();
	}
}
