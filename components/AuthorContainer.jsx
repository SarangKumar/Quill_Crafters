'use client';
import React, { useEffect, useState } from 'react';
import Author from './ui/Author';

const authorDetails = [
	{
		username: 'Sarang Kumar',
		email: 'sarangkumar@example.com',
		plan: 'PREMIUM',
		bio: 'laboris',
		isAuthor: 1,
		novels: [
			{
				name: 'Novel 1',
				likes: 300,
			},
			{
				name: 'Novel 2',
				likes: 50,
			},
			{
				name: 'Novel 3',
				likes: 850,
			},
			{
				name: 'Novel 4',
				likes: 508,
			},
		],
	},
	{
		username: 'Aryan',
		email: 'aryan@example.com',
		plan: 'PRO',
		isAuthor: 1,
		bio: 'laborat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		novels: [
			{
				name: 'Novel 1',
				likes: 300,
			},
		],
	},
	{
		username: 'Karthik Kavish',
		plan: 'PRO',
		email: 'kavishkarthik44@example.com',
		bio: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend.',
		isAuthor: 1,
		novels: [
			{
				name: 'Novel 1',
				likes: 300,
			},
		],
	},
	{
		username: 'Seemakurthi Vasanth',
		email: 'sarangkumar@example.com',
		plan: 'BASIC',
		bio: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		isAuthor: 1,
		novels: [
			{
				name: 'Novel 1',
				likes: 300,
			},
		],
	},
	{
		username: 'Sujan',
		plan: 'FREE',
		email: 'sujan@example.com',
		bio: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
		isAuthor: 1,
		novels: [
			{
				name: 'Novel 1',
				likes: 300,
			},
			{
				name: 'Novel 3',
				likes: 5800,
			},
			{
				name: 'Novel 1',
				likes: 30,
			},
		],
	},
];

const AuthorContainer = () => {
	const [popularAuthors, setPopularAuthors] = useState([]);
	useEffect(() => {
		try {
			(async () => {
				const res = await fetch('/api/retrieve-user');
				const allUsers = await res.json();
				setPopularAuthors(allUsers);
			})();
		} catch (error) {
			console.log(error);
		}
	}, []);
	// const res = await fetch('http://localhost:3000/api/retrieve-user');
	// const allUsers = await res.json();
	// console.log(allUsers);

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
