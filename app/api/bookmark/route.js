import { NextResponse } from 'next/server';
import prisma from '@/constants/prisma';

export async function POST(req, res) {
	const { novel_id, user_id } = await req.json();

	if (!novel_id || !user_id) {
		return NextResponse.json(
			{ error: 'novel_id and user_id are required' },
			{ status: 500 }
		);
	}
	try {
		prisma.$connect();
		const bookmark = await prisma.favourite.create({
			data: {
				novel_id,
				user_id,
			},
		});
		console.log(bookmark)
        return NextResponse.json(bookmark, {status: 200})
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	} finally {
		prisma.$disconnect();
	}
}
