import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	try {
		const body = await req.json();
		const { novel_id, chapter_number, chapter_title, content } = body;

		await prisma.$connect();

		const newChapter = await prisma.chapter.create({
			data: {
				novel_id,
				chapter_number,
				chapter_title,
				content,
			},
		});

		return NextResponse.json(newChapter, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
