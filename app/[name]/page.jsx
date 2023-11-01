import ClientWrapper from '@/components/ClientWrapper';
import { AuthOptions } from '@/lib/utils';

const { getServerSession } = require('next-auth');

async function ProfilePage({ params }) {
	console.log('Recieved : ', params.name);
	const session = await getServerSession(AuthOptions);
	const trueUsername = session
		? session.user.username.split(' ').join('_').toLowerCase()
		: 'not signed in';

	const authorized = trueUsername == params.name;

	console.log(authorized);
	return (
		<>
			<div className="p-4 border border-primary/40 rounded ">main main</div>
			<div className="p-4 border border-primary/40 rounded ">
				sub main
			</div>
			<div className="p-4 border border-primary/40 rounded ">
				sub main
			</div>
			<div className="p-4 border border-primary/40 rounded ">
				Bookmarks
			</div>
		</>
	);
}

export default ProfilePage;
