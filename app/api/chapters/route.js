import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const body = await req.json();
	const { novel_id } = body;
	// console.log('body', body);

	const novel = await prisma.novel.findUnique({
		where: {
			novel_id: novel_id,
		},
		include: {
			chapter: {
				orderBy: {
					chapter_id: 'asc',
				},
			},
		},
	});

	// console.log(chapters, 'from the api');

	return NextResponse.json({ novel: novel }, { status: 200 });
}
