'use client';
import React, { useState, useEffect } from 'react';
import ComicCover from './ui/ComicCover';

const ComicContainer = ({ type = 'most-liked' }) => {
	const [novels, setNovels] = useState([]);

	const getNovels = async () => {
		if (type === 'most-liked') {
			console.log({ type });
			try {
				const res = await fetch('/api/novels/get', {
					method: 'POST',
					body: JSON.stringify({ type }),
				});
				const data = await res.json();
				// console.log(res);
				setNovels(data);
			} catch (error) {
				console.log(error);
			}
		}
	};
	useEffect(() => {
		getNovels();
	}, []);

	return (
		<>
			{/* <p className="text-white text-xs">{JSON.stringify(novels)}</p> */}
			<div className="grid grid-cols-cards sm:gap-4 md:gap-5 gap-3">
				{novels?.map((novel) => (
					<ComicCover
						key={novel.novel_id}
						name={novel.title}
						author={novel.author.username}
						coverUrl={novel.cover}
						category={novel.genre}
					/>
				))}
			</div>
		</>
	);
};

export default ComicContainer;
