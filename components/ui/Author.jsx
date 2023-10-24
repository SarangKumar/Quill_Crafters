import React from 'react';
import Avatar from './Avatar';
import Badge from './Badge';
import { Star } from 'lucide-react';

const Author = ({ username, email, bio, novels }) => {
	// from-background-secondary to-background-tertiary bg-gradient-to-r
	return (
		<div className="transition-all break-inside-avoid border-2 flex flex-col gap-3 relative border-border px-5 py-3 rounded-md text-xs text-white backdrop-blur-md after:absolute after:bg-gradient-to-br after:rounded-md after:from-background-secondary after:to-transparent after:backdrop-blur-md after:transition-all after:opacity-50 after:from-10% after:to-80% after:inset-0 after:-z-10 hover:after:from-20%">
			<div className="flex gap-2">
				<Avatar name={username} className="sm:h-9 sm:w-9 md:h-10 md:w-10" />
				<div>
					<h2 className="text-sm">{username}</h2>
					<p className="text-foreground-secondary">{email}</p>
				</div>
			</div>
			<div>
				<p className="text-foreground">{bio}</p>
			</div>
			<div className='flex gap-1 flex-wrap'>
				{novels.map((novel, i) => (
					<Badge
						key={i}
						variant="subtle"
						className="flex gap-x-2 h-auto rounded-md text-[10px] md:text-xs"
					>
						<span className="text-foreground">{novel.name}</span>
						<span className=" flex items-center gap-x-0.5">
							<Star
								size={13}
								className="text-primary h-6"
							/>
							<span className="">{novel.likes}</span>
						</span>
					</Badge>
				))}
			</div>
		</div>
	);
};

export default Author;
