import { NextResponse } from 'next/server';
import prisma from '@/constants/prisma';

export async function POST(req, res) {
	const { newNovel, user_id } = await req.json();
	console.log('api is running')

	try {
		prisma.$connect();
		// console.log({ newNovel, author });
		// const nNovel = {
		// 	title: newNovel.title,
		// 	summary: newNovel.summary,
		// 	cover: newNovel.cover,
		// 	genre: newNovel.genre,
		// 	author_id: author.user.user_id,
		// };
		// console.log(nNovel);
		const novel = await prisma.novel.create({
			data: {
				title: newNovel.title,
				summary: newNovel.summary,
				cover: newNovel.cover,
				genre: newNovel.genre,
				author_id: user_id,
			},
		});
		console.log(novel);
		return NextResponse.json({ body: novel }, { status: 200 });
	} catch (error) {
		console.log(error);
	} finally {
		prisma.$disconnect();
	}
}
