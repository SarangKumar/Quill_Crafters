import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const { user_id, novel_id, comment } = await req.json();

	try {
		prisma.$connect();
		const newComment = await prisma.comment.create({
			data: {
				user_id,
				novel_id,
				comment,
			},
		});
        console.log(newComment);
		return NextResponse.json(newComment, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.error(error);
	} finally {
		await prisma.$disconnect();
	}
}
