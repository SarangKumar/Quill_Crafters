import { LibraryBig, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Badge from './Badge';

const ComicCover = ({
	name="Comic Name",
    author="Author Name",
	coverUrl = '/images/comic-thumbnail/comic-1.jpg',
	likes = 100,
	chapters = 3,
	category = 'Fantacy',
}) => {
	return (
		<div className="shadow-lg border-2 group text-white relative overflow-hidden border-border rounded-xl min-w-[250px] ring-2 transition-colors focus:ring-primary hover:shadow-primary">
			<button className="group-focus:ring-primary group-focus:ring group-focus:ring-offset-2">
				<Image
					src={coverUrl}
					height={450}
					width={300}
					alt={name}
					className="object-cover overflow-hidden rounded-xl"
				/>
			</button>
			<div className="text-sm p-2 flex gap-x-1 bg-background-tertiary/5 left-0 right-0 w-full top-0 absolute">
				<Badge
					variant="subtle"
					className="text-white px-2 space-x-1.5"
				>
					<LibraryBig size={14} className='text-primary'/>
					<p>{chapters}</p>
				</Badge>
				<Badge
					variant="subtle"
					className="text-white px-2 space-x-1.5"
				>
					<Star size={14} className='text-primary'/>
					<p>{likes}</p>
				</Badge>
				<Badge
					variant="subtle"
					className="text-white"
				>
					{category}
				</Badge>
			</div>
			<div className="p-4 text-sm bg-foreground/5 backdrop-blur-sm left-0 right-0 w-full bottom-0 absolute">
				<div className="">
					<h2 className='drop-shadow-md'>{name}</h2>
					<h3 className="text-xs text-foreground-secondary">{author}</h3>
				</div>
			</div>
		</div>
	);
};

export default ComicCover;
