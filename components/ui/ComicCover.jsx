import { Bookmark, LibraryBig, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Badge from './Badge';

const ComicCover = ({
	name = 'Comic Name',
	author = 'Author Name',
	coverUrl = '/images/comic-thumbnail/comic-1.jpg',
	likes = 100,
	chapters = 3,
	category = 'Fantacy',
	bookmarked = false,
}) => {
	bookmarked = true;
	return (
		<div className="shadow-md border group text-white relative overflow-hidden border-border rounded-xl bg-red-500 ring-2 transition-colors focus:ring-primary hover:shadow-primary">
			<button className="group-focus:ring-primary group-focus:ring group-focus:ring-offset-2 h-full w-full">
				<Image
					src={coverUrl}
					height={450}
					width={300}
					alt={name}
					className="object-cover overflow-hidded w-full h-full"
				/>
			</button>
			<div className="flex items-cente flex-col text-xs p-2 gap-1 left-0 right-0 w-full top-0 absolute">
				<div className="flex items-center gap-1 justify-between">
					<div className="space-x-1">
						<Badge
							variant="subtle"
							className="text-white px-2 space-x-1.5 -py-1"
						>
							<LibraryBig
								size={14}
								className="text-primary"
							/>
							<span className="text-[10px]">{chapters}</span>
						</Badge>
						<Badge
							variant="subtle"
							className="text-white px-2 space-x-1.5"
						>
							<Star
								size={14}
								className="text-primary"
							/>
							<span className="text-[10px]">{likes}</span>
						</Badge>
					</div>
					<Badge
						size="icon"
						variant="subtle"
					>
						<Bookmark
							className={
								bookmarked ? 'text-transparent' : `text-white`
							}
							fill={bookmarked && `#D4AF37`}
							size={16}
						/>
					</Badge>
				</div>
				<div className="flex items-center">
					<Badge
						variant="subtle"
						className="text-white"
					>
						<span className="text-[10px] whitespace-nowrap">
							{category}
						</span>
					</Badge>
				</div>
			</div>
			<div className="p-3 bg-foreground/5 backdrop-blur-[1px] left-0 right-0 w-full bottom-0 absolute">
				<div className="">
					<h2 className="drop-shadow-md text-xs sm:text-sm">
						{name}
					</h2>
					<h3 className="drop-shadow-md text-[10px] sm:text-xs text-foreground-secondary">
						{author}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default ComicCover;
