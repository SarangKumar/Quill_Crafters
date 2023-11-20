import React from 'react';

const ChapterCard = ({ title, chapter_number, chapter_title }) => {
	return (
		<div className="rounded border-2 border-border bg-gradient-to-t from-background-secondary/40 from-10% to-transparent text-sm space-y-2 h-full p-2">
			<small>{title}</small>
			<div className="flex gap-x-2">
				<h1 className="text-sm">
					<span className="text-primary font-bold">#</span> {chapter_number}
				</h1>
				<p>{chapter_title}</p>
			</div>
		</div>
	);
};

export default ChapterCard;
