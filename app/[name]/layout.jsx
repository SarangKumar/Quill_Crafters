import ProfileMainCard from '@/components/ProfileMainCard';
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


	// console.log(authorized);
	return (
		<>
			{/* <ClientWrapper
			authorized={authorized}
			username={params.name}
			session={session}
			trueUsername={trueUsername}
		/>
        {children} */}
			<Container className="text-foreground relative grid md:gap-5 gap-4 grid-cols-1 lg:grid-cols-4 overflow-hidden text-sm mb-20">
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
const ProfileNav = ({ trueUsername }) => {
	return (
		<nav className="border-b border-primary/40 py-1 flex items-center gap-x-4">
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
