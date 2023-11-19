'use client';
import ChapterSection from '@/components/ChapterSection';
import { useSession } from 'next-auth/react';
import React, { use, useEffect, useState } from 'react';

const ChapterPage = ({ params }) => {
	const { data: session } = useSession();
	const [novel, setNovel] = useState([]);

	const getChaptersAuthor = async () => {
		try {
			const data = await fetch('/api/chapters', {
				method: 'POST',
				body: JSON.stringify({
					// user_id: session.user.user_id,
					// email: session.user.email,
					novel_id: parseInt(params.novel_id),
				}),
			});
			const res = await data.json();
			console.log(res);
			setNovel(res.novel);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// console.log('params', params);
		getChaptersAuthor();
	}, []);

	const handleChapterSubmit = () => {
		console.log('submitted');
	};
	return (
		<div>
			{params.novel_id}
			{JSON.stringify(novel.chapter)}
			{/* <ChapterSection /> */}

			{novel.chapter?.map((ch) => {
				<div key={ch.chapter_id} className='text-white'>
					<p>{ch.chapter_number}</p>
					<h1>{ch.chapter_title}</h1>
					<p>{ch.content}</p>
				</div>;
			})}
			<form onSubmit={handleChapterSubmit}></form>
		</div>
	);
};

export default ChapterPage;
