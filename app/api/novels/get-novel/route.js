import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const { novel_id } = await req.json();

	if (!novel_id) {
		return NextResponse.json(
			{ error: 'novel_id is required' },
			{ status: 500 }
		);
	}
	try {
		prisma.$connect();
		const novel = await prisma.novel.findUnique({
			where: {
				novel_id: parseInt(novel_id),
			},
			include: {
				comment: {
					include: {
						user: true, // Include the user details associated with each comment
					},
				},
				chapter: true,
				rating: true,
				favourite: true,
			},
		});
		console.log(novel);
		return NextResponse.json(novel, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	} finally {
		prisma.$disconnect();
	}
}
