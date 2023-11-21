import { cn, timeElasped } from '@/lib/utils';
import React from 'react';
import { buttonVariants } from './Button';

const ChapterCard = ({
	title,
	chapter_number,
	chapter_title,
	created_at,
	updated_at,
}) => {
	return (
		<div className="rounded border-2 border-border bg-gradient-to-t from-background-secondary/40 from-10% to-transparent text-sm space-y-2 h-full p-2">
			<small>{title}</small>
			<div className="flex flex-col gap-x-2">
				<div className="flex gap-x-2">
					<h1 className="text-sm flex">
						<span className="text-primary font-bold">
							#{' '}{chapter_number}
						</span>
					</h1>
					<h2>{chapter_title}</h2>
				</div>
				{/* <div className="text-[10px] flex flex-col items-end justify-end w-full"> */}
				<div className="text-[10px] divide-x w-full ">
					<span className='pr-1.5'>Created: {timeElasped(created_at)}</span>
					<span className='pl-1.5'>Updated: {timeElasped(updated_at)}</span>
				</div>
				<div className='flex justify-end gap-x-2 pt-1'>
					<button className={cn(buttonVariants({className: 'text-[10px] px-3'}))}>View</button>
					<button className={cn(buttonVariants({className: 'text-[10px] px-3'}))}>Update</button>
				</div>
			</div>
		</div>
	);
};

export default ChapterCard;
