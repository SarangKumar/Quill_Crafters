import ClientWrapper from '@/components/ClientWrapper';
import ComicCover from '@/components/ui/ComicCover';
import { bookMark } from '@/constants';
import { AuthOptions } from '@/lib/utils';

const { getServerSession } = require('next-auth');

async function ProfilePage({ params }) {
	console.log('Recieved : ', params.name);
	const session = await getServerSession(AuthOptions);
	const trueUsername = session
		? session.user.username.split(' ').join('_').toLowerCase()
		: 'not signed in';

	const authorized = trueUsername == params.name;

	// console.log(authorized);
	return (
		<>
			<div>
				<h2 className="my-2 text-base mt-2">main main</h2>
				<div className="p-2 md:p-4 rounded border border-primary/40">
					content
				</div>
			</div>
			<div>
				<h2 className="my-2 text-base mt-2 pb-1">main main</h2>
				<div className="p-2 md:p-4 rounded border border-primary/40">
					content
				</div>
			</div>
			<div>
				<h2 className="my-2 text-base mt-2 pb-1">main main</h2>
				<div className="p-2 md:p-4 rounded border border-primary/40">
					content
					{JSON.stringify(session)}
				</div>
			</div>
			<div>
				<h2 className="my-2 text-base mt-2 pb-1">Bookmark</h2>
				<div className="p-2 md:p-4 rounded border border-primary/40 grid grid-cols-cards-mobile lg:grid-cols-cards sm:gap-4 md:gap-5 gap-3">
					{bookMark.map((novel) => (
						<ComicCover
							key={novel.id}
							{...novel}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ProfilePage;
