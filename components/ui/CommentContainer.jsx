import { timeElasped } from '@/lib/utils';
import React from 'react';
import Avatar from './Avatar';

const CommentContainer = ({
	comment = '',
	username = '',
	created_at,
	user,
}) => {
	return (
		<div className="transition-all break-inside-avoid border-2 flex flex-col gap-3 relative border-border p-3 rounded-md text-xs text-white backdrop-blur-md after:absolute after:bg-gradient-to-br after:rounded-md after:from-background-secondary after:to-transparent after:backdrop-blur-md after:transition-all after:opacity-50 after:from-10% after:to-80% after:inset-0 after:-z-10 hover:after:from-20%">

			<div className="flex gap-2">
				<Avatar
					name={user.username}
					plan={user.plan}
					isAuthor={user.isAuthor}
					className="sm:h-9 sm:w-9 md:h-10 md:w-10"
				/>
				<div>
					<h2 className="text-sm font-medium">{user.username}</h2>
					<p className="text-foreground-secondary font-medium">
						{user.email}
					</p>
				</div>
			</div>
			<div>{comment}</div>
			<div className="flex justify-end">
				<p className='text-[10px] text-foreground-secondary'>{timeElasped(created_at)}</p>
			</div>
		</div>
	);
};

export default CommentContainer;
