import prisma from '@/constants/prisma';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextResponse } from 'next/server';

const handler = NextAuth({
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
				// console.log({ profile, account });
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
});

export { handler as GET, handler as POST };
