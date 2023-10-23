import React from 'react';
import ComicCover from './ui/ComicCover';

const ComicContainer = () => {
	return (
		<div className="grid grid-cols-cards md:gap-5 gap-4">
			{[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
				<ComicCover key={i} />
			))}
		</div>
	);
};

export default ComicContainer;
