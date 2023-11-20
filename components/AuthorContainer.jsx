'use client';
import React, { useEffect, useState } from 'react';
import Author from './ui/Author';

const AuthorContainer = () => {
	const [popularAuthors, setPopularAuthors] = useState([]);
	useEffect(() => {
		try {
			(async () => {
				const res = await fetch('/api/create-user/get-author');
				const allUsers = await res.json();
				setPopularAuthors(allUsers);
			})();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<section className="xl:columns-3 columns-1 lg:columns-2 gap-4 mx-auto space-y-4 pb-28">
			{popularAuthors?.length > 0 &&
				popularAuthors?.map((author) => (
					<Author
						key={author.email}
						{...author}
					/>
				))}
		</section>
	);
};

export default AuthorContainer;
