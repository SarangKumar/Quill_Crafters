import { ComicCardSkeleton } from '@/components/Skeleton';
import React from 'react';

const BookmarkPage = () => {
	return (
		<>
			<div className="p-4 border border-primary/40 rounded ">
				bookmark
			</div>
			<div>
				<h2 className="my-2 text-base mt-2 pb-1">Liked Novels</h2>
				<div className="p-2 md:p-4 rounded border border-primary/40 grid grid-cols-cards-mobile lg:grid-cols-cards sm:gap-4 md:gap-5 gap-3">
					{new Array(10).fill(0).map((_, i) => (
						<ComicCardSkeleton key={i} />
					))}
				</div>
			</div>
		</>
	);
};

export default BookmarkPage;
