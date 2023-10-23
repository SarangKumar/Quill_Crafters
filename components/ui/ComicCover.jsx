import { Bookmark, LibraryBig, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Badge from './Badge';

const ComicCover = ({
	name = 'Comic Name',
	author = 'Author Name',
	coverUrl = '/images/comic-thumbnail/comic-3.jpg',
	likes = 100,
	chapters = 3,
	category = 'Fantacy',
	bookmarked = false,
	status = 'ongoing',
	createdAt = new Date(),
	updatedAt = new Date(),
}) => {
	bookmarked = true;
	return (
		<div className="shadow-md group border group text-white relative overflow-hidden border-border rounded-lg bg-background-secondary ring-offset-0 transition-colors focus:ring-primary hover:shadow-primary hover:ring-2 hover:ring-primary ">
			<button className="group-focus:ring-primary group-focus:ring group-focus:ring-offset-2 h-full w-full">
				<Image
					src={coverUrl}
					height={450}
					width={300}
					alt={name}
					className="object-cover overflow-hidded w-full h-full"
				/>
			</button>
			<div className=" transition-all flex items-cente flex-col text-xs p-2 -gap-1 left-0 right-0 w-full top-0 absolute">
				<div className="flex items-center -gap-1 justify-between">
					<div className="space-x-1">
						<Badge
							variant="subtle"
							className="h-6 text-white px-2 space-x-1.5 -py-1"
						>
							<LibraryBig
								size={14}
								className="text-primary h-6"
							/>
							<span className="text-[10px]">{chapters}</span>
						</Badge>
						<Badge
							variant="subtle"
							className="h-6 text-white px-2 space-x-1.5"
						>
							<Star
								size={14}
								className="text-primary h-6"
							/>
							<span className="text-[10px]">{likes}</span>
						</Badge>
					</div>
					<Badge
						size="icon"
						variant="subtle"
					>
						<Bookmark
							className={`${
								bookmarked ? 'text-transparent' : 'text-white'
							} h-6`}
							fill={bookmarked && `#D4AF37`}
							size={16}
						/>
					</Badge>
				</div>
				<div className="flex items-center">
					<Badge
						variant="subtle"
						className="text-white h-6"
					>
						<span className="text-[10px]  whitespace-nowrap">
							{category}
						</span>
					</Badge>
				</div>
			</div>
			<div className="p-3 bg-foreground/10 backdrop-blur-[1px] left-0 right-0 w-full bottom-0 absolute">
				<div className="">
					<h2 className="text-white font-medium drop-shadow-md text-xs line-clamp-2">
						{name} 
					</h2>
					<h3 className="drop-shadow-md line-clamp-1 text-[10px] text-foreground">
						{author}
					</h3>
				</div>
				{/* <div className="flex items-center justify-between">
					<Badge
						className="text-white text-[10px] h-6"
						variant="subtle"
					>
						{status}
					</Badge>
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
				</div> */}
			</div>
		</div>
	);
};

export default ComicCover;
