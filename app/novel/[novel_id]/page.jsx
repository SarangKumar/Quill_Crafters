'use client';
import Container from '@/components/ui/Container';
import React, { use, useEffect, useState } from 'react';

const Novel = ({ params }) => {
	const [novel, setNovel] = useState({});

	const fetchNovel = async () => {
		const res = await fetch('/api/novels/get-novel', {
			method: 'POST',
			body: JSON.stringify({
				novel_id: params.novel_id,
			}),
		});
		const data = await res.json();
		setNovel(data);
	};
	useEffect(() => {
		fetchNovel();
	}, []);
	return (
		<Container>
			{params.novel_id}
			{process.env.NODE_ENV === 'development' && (
				<p className='text-white'>{JSON.stringify(novel)}</p>
			)}
		</Container>
	);
};

export default Novel;
