import React from 'react';
import ComicCover from './ui/ComicCover';

const ComicContainer = ({novels=[]}) => {
	return (
		<div className="grid grid-cols-cards md:gap-5 gap-4">
			{novels.map((novel) => (
				<ComicCover key={novel.id} {...novel}/>
			))}
		</div>
	);
};

export default ComicContainer;
