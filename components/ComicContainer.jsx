'use client';
import React, { useState, useEffect } from 'react';
import ComicCover from './ui/ComicCover';
import { ComicCardSkeleton } from './Skeleton';

const ComicContainer = ({ type = 'most-liked' }) => {
	const [novels, setNovels] = useState([]);
	const [loading, setLoading] = useState(true);

	const getNovels = async () => {
		if (type === 'most-liked') {
			console.log({ type });
			try {
				const res = await fetch('/api/novels/get', {
					method: 'POST',
					body: JSON.stringify({ type }),
				});
				const data = await res.json();
				console.log(data);
				setNovels(data);
				setLoading(false);
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
				{loading
					? new Array(6)
							.fill(0)
							.map((_, i) => <ComicCardSkeleton key={i} />)
					: novels?.map((novel) => (
							<ComicCover
								key={novel.novel_id}
								novel_id={novel.novel_id}
								name={novel.title}
								likes={novel.favourite.length}
								chapters={novel.chapter.length}
								author={novel.author.username}
								coverUrl={novel.cover}
								category={novel.genre}
							/>
					  ))}

					{new Array(6).fill(0).map((_, i) => <ComicCardSkeleton key={i} />)}
			</div>
			{process.env.NODE_ENV === 'evelopment' && (
				<p className="text-white text-xs">{JSON.stringify(novels)}</p>
			)}
		</>
	);
};

export default ComicContainer;
