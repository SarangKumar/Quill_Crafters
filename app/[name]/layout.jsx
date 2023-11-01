import ClientWrapper from '@/components/ClientWrapper';
import { planVariant } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { AuthOptions, cn } from '@/lib/utils';
import { BirdIcon, Bot, Webhook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const { getServerSession } = require('next-auth');

async function ProfilePageLayout({ params, children }) {
	console.log('Recieved : ', params.name);
	const session = await getServerSession(AuthOptions);
	const trueUsername = session
		? session.user.username.split(' ').join('_').toLowerCase()
		: 'not signed in';

	const authorized = trueUsername == params.name;

	console.log(authorized);
	return (
		<>
			{/* <ClientWrapper
			authorized={authorized}
			username={params.name}
			session={session}
			trueUsername={trueUsername}
		/>
        {children} */}
			<Container className="text-foreground relative grid md:gap-5 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 overflow-hidden text-sm">
				{/* Welcome to the page of {username}. <br />
			{JSON.stringify(session)}
			{authorized
				? 'You are authorized to edit this page.'
				: `You are unauthorized to edit this page as you are ${trueUsername}`} */}
				<div className="">
					<ProfileMainCard
						session={session}
						trueUsername={trueUsername}
					/>
				</div>
				<div className="space-y-5 md:col-span-2 lg:col-span-3">
					<ProfileNav trueUsername={trueUsername} />
					{children}
				</div>
			</Container>
		</>
	);
}

export default ProfilePageLayout;

const ProfileMainCard = ({ session, trueUsername }) => {
	// console.log(session);
	return (
		<aside className="p-4 rounded space-y-5">
			<Image
				src={session?.user.avatar}
				quality={100}
				width={125}
				height={125}
				alt="Profile Picture"
				className="rounded-md"
			/>
			<h2 className="text-base font-semibold">
				{session?.user.username}
			</h2>
			<div>
				<Link
					href={`/${trueUsername}`}
					className="text-sm font-medium text-primary hover:underline"
				>
					{trueUsername}
				</Link>
				<p>{session?.user.email}</p>
			</div>

			<div className="flex items-center gap-x-2">
				{session?.user.plan === 'PREMIUM' ? (
					<span
						className={cn(
							planVariant({
								variant: session?.user.plan.toLowerCase(),
								size: 'icon',
							})
						)}
					>
						<Bot size={16} />
					</span>
				) : session?.user.plan === 'PRO' ? (
					<span
						className={cn(
							planVariant({
								variant: session?.user.plan.toLowerCase(),
								size: 'icon',
							})
						)}
					>
						<BirdIcon size={16} />
					</span>
				) : session?.user.plan === 'BASIC' ? (
					<span
						className={cn(
							planVariant({
								variant: session?.user.plan.toLowerCase(),
								size: 'icon',
							})
						)}
					>
						<Webhook size={16} />
					</span>
				) : (
					<></>
				)}

				<span
					className={cn(
						planVariant({
							variant: session?.user.plan.toLowerCase(),
							className: 'w-full flex-1 rounded h-7',
						})
					)}
				>
					{session?.user.plan}
				</span>
			</div>

			<p>{session?.user?.bio || 'No bio yet.'}</p>
		</aside>
	);
};

const ProfileNav = ({ trueUsername }) => {
	return (
		<nav className="py-4 flex items-center gap-x-4">
			<Link
				className="hover:text-primary"
				href={`/${trueUsername}`}
			>
				Overview
			</Link>
			<Link
				className="hover:text-primary"
				href={`/${trueUsername}/plan`}
			>
				Manage Plan
			</Link>
			<Link
				className="hover:text-primary"
				href={`/${trueUsername}/bookmark`}
			>
				Bookmark
			</Link>
		</nav>
	);
};
