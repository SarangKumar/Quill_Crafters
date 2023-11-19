import { NextResponse } from 'next/server';
import prisma from '@/constants/prisma';

export async function POST(req, res) {
	const body = await req.json();
	if (body.type === 'most-liked') {
		try {
			await prisma.$connect();
			const allNovelsWithAuthors = await prisma.novel.findMany({
				orderBy: {
					likes: 'desc',
				},
				include: {
					favourite: true,
					chapter: true,
					author: {
						select: {
							username: true, // Include the 'name' field from the related User model
						},
					},
				},
			});

			

			return NextResponse.json(allNovelsWithAuthors, { status: 200 });
		} catch (error) {
			console.log(error);
		}
	}
}
