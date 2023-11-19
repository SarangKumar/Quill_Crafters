import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
// import { join } from 'path';
import path from 'path';
import multer from 'multer';
import prisma from '@/constants/prisma';

// export async function POST(req, res) {
// 	try {
// 		const formData = await req.formData();
// 		// const body = await req.json();
// 		// console.log(body)
// 		const file = formData.get('file');
//         console.log(file)

// 		if (!file) {
// 			return NextResponse.json(
// 				{ error: 'No file uploaded' },
// 				{ status: 400 }
// 			);
// 		}
// 		const bytes = await file.arrayBuffer();
// 		const buffer = Buffer.from(bytes);

// 		const path = join('/', 'temp', file.name);
// 		await writeFile(path, buffer);

// 		return NextResponse.json({ message: 'message' }, { status: 200 });
// 	} catch (error) {
// 		console.log(error);
// 	} finally {
// 		console.log('finally');
// 	}
// }

export async function POST(req, res) {
	//    upload(req, res, async (err) => {
	// 		if (err) {
	// 			console.error(err);
	// 			return res.status(400).send('Error uploading file.');
	// 		}

	const { newNovel, author } = await req.json();

	try {
		prisma.$connect();
		console.log({ newNovel, author });
		const nNovel = {
			title: newNovel.title,
			summary: newNovel.summary,
			cover: newNovel.cover,
			genre: newNovel.genre,
			author_id: author.user.user_id,
		};
		console.log(nNovel);
		const novel = await prisma.novel.create({
			data: {
				title: newNovel.title,
				summary: newNovel.summary,
				cover: newNovel.cover,
				genre: newNovel.genre,
				author_id: author.user.user_id,
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
