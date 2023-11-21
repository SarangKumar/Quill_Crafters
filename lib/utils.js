import prisma from '@/constants/prisma';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import GoogleProvider from 'next-auth/providers/google';
import moment from 'moment';



export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const timeElasped = (startTime) => {
	const currentTime = moment();
	const elapsedTime = moment.duration(currentTime.diff(startTime));
	return elapsedTime.humanize() + ' ago';
};

export const paraConverter = (chapter) => {
	let splitList = chapter.split(/\n|advertisement/g);
	splitList = splitList.filter((item) => item.trim() !== '');

	return splitList;
}

export const AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.JWT_SECRET,
	callbacks: {
		async signIn({ account, profile }) {
			if (account.provider === 'google') {
				try {
					await prisma.$connect();
					const userExists = await prisma.user.findUnique({
						where: { email: profile.email },
					});
					if (!userExists) {
						await prisma.user.create({
							data: {
								email: profile.email,
								username: profile.name,
								avatar: profile.picture,
							},
						});
					}
					return true;
				} catch (error) {
					console.log(error);

					return false;
				} finally {
					await prisma.$disconnect();
				}
			}
		},
		async session({ session }) {
			try {
				if (!session) {
					return false;
				}
				await prisma.$connect();
				const user = await prisma.user.findUnique({
					where: { email: session.user.email },
				});
				// console.log({ user });
				session.user = user;
				// console.log(session)
				return session;
			} catch (error) {
				console.log(error);
				return false;
			} finally {
				await prisma.$disconnect();
			}
		},
	},
};