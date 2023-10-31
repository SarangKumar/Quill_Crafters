import ClientWrapper from '@/components/ClientWrapper';
import Container from '@/components/ui/Container';
import { AuthOptions } from '@/lib/utils';
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
				<div className="p-4 border border-primary/40 rounded  md:col-span-2 lg:col-span-3">
					{children}
				</div>
			</Container>
		</>
	);
}

export default ProfilePageLayout;

const ProfileMainCard = ({ session, trueUsername }) => {
	return (
		<aside className="p-4 rounded space-y-3">
			{/* {JSON.stringify(session)} */}
			<Image
				src={session?.user.avatar}
				quality={100}
				width={100}
				height={100}
				alt="Profile Picture"
				className="rounded-md"
			/>
			<h2 className="text-base font-semibold">{session?.user.username}</h2>
			<div>
				<Link
					href={`/${trueUsername}`}
					className="text-sm font-medium text-primary hover:underline"
				>
					{trueUsername}
				</Link>
				<p>{session?.user.email}</p>
			</div>
            <p>
                {session?.user?.bio || 'No bio yet.'}
            </p>
		</aside>
	);
};
