import React from 'react';
import Author from './ui/Author';

const authorDetails = [
	{
		username: 'Sarang Kumar',
		email: 'sarangkumar@example.com',
		bio: 'laboris',
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
		email: 'kavishkarthik44@example.com',
		bio: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend.',
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
		bio: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		novels: [
			{
				name: 'Novel 1',
				likes: 300,
			},
		],
	},
	{
		username: 'Sujan',
		email: 'sujan@example.com',
		bio: 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
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
	return (
		<section className="xl:columns-4 lg:columns-3 columns-1 sm:columns-2 gap-4 mx-auto space-y-4 pb-28">
			{authorDetails.map((author) => (
				<Author
					key={author.email}
					{...author}
				/>
			))}
		</section>
	);
};

export default AuthorContainer;
