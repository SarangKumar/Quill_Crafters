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
	return <>main</>;
}

export default ProfilePage;
