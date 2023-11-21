'use client';
import { ComicCardSkeleton } from '@/components/Skeleton';
import ComicCover from '@/components/ui/ComicCover';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BookmarkPage = () => {
	const { data: session, status } = useSession();
	const [loading, setLoading] = useState(true);
	const [likedNovels, setLikedNovels] = useState([]);

	const fetchLikedNovels = async () => {
		try {
			const res = await fetch('/api/novels/like', {
				method: 'POST',
				body: JSON.stringify({
					user_id: session.user.user_id,
				}),
			});

			const data = await res.json();
			setLikedNovels(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
		}
	};
	useEffect(() => {
		fetchLikedNovels();
	}, []);
	return (
		<>
			{process.env.NODE_ENV === 'development' && (
				<div className="p-4 border border-primary/40 rounded ">
					liked
					{JSON.stringify(likedNovels)}
				</div>
			)}
			<div>
				<h2 className="my-2 text-base mt-2 pb-1">Liked Novels</h2>
				<div className="p-4 rounded border border-primary/40 grid grid-cols-cards-mobile lg:grid-cols-cards sm:gap-4 md:gap-5 gap-3">
					{status === 'loading' || loading ? (
						new Array(10)
							.fill(0)
							.map((_, i) => <ComicCardSkeleton key={i} />)
					) : likedNovels.length === 0 ? (
						<div className="w-full col-span-4">
							No novel marked favourite
						</div>
					) : (
						<>
							{likedNovels.map((lNovel, i) => (
								<Link
									key={lNovel.favorite_id}
									href={`/novel/${lNovel.novel.novel_id}`}
								>

								<ComicCover
									// novel_id={novel.novel_id}
									name={lNovel.novel.title}
									// likes={novel.favourite.length}
									// chapters={novel.chapter.length}
									// author={novel.author.username}
									bookmarked={true}
									coverUrl={lNovel.novel.cover}
									category={lNovel.novel.genre}
								/>
								</Link>
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default BookmarkPage;
