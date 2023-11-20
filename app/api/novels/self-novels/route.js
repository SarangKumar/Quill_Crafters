import prisma from '@/constants/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
	const { user_id, email, type } = await req.json();
	console.log(user_id, email, type);

	try {
		await prisma.$connect();
		if (type === 'manage-novels') {
			// const user = await prisma.user.findUnique({
			// 	where: {
			// 		user_id: user_id,
			// 		// email: email,
			// 	},
			// 	include: {
			// 		novel: true,
			// 		// favourite: true,
			// 		// chapter: true,
			// 	},
			// });
			const user = await prisma.novel.findMany({
				where: {
					author_id: user_id,
				},
				include: {
					chapter: true,
					author: true,
					favourite: true,
				}
			});

			console.log(user);
			return NextResponse.json(user, { status: 200 });
		} else if (type === 'favourite') {
			const user = await prisma.user.findUnique({
				where: {
					user_id: user_id,
					// email: email,
				},
				include: {
					favourite: true,
				},
			});
			// console.log(user);
			return NextResponse.json(user, { status: 200 });
		}
	} catch (error) {
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
