'use client';

import { useEffect, useState } from 'react';
import Avatar from './Avatar';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Input = ({ placeholder = 'Search', children, className }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleQueryChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const allNovels = [
		{ id: 1, name: 'To Kill a Mockingbird' },
		{ id: 2, name: '1984' },
		{ id: 3, name: 'Pride and Prejudice' },
		{ id: 4, name: 'The Great Gatsby' },
		{ id: 5, name: 'The Catcher in the Rye' },
		{ id: 6, name: 'Moby-Dick' },
		{ id: 7, name: 'War and Peace' },
		{ id: 8, name: 'The Lord of the Rings' },
		{ id: 9, name: 'To the Lighthouse' },
		{ id: 10, name: 'The Odyssey' },
		{ id: 11, name: 'Don Quixote' },
		{ id: 12, name: 'The Brothers Karamazov' },
		{ id: 13, name: 'Frankenstein' },
		{ id: 14, name: 'The Grapes of Wrath' },
		{ id: 15, name: 'One Hundred Years of Solitude' },
		{ id: 16, name: 'Brave New World' },
		{ id: 17, name: 'The Hobbit' },
		{ id: 18, name: 'The Alchemist' },
		{ id: 19, name: 'The Shining' },
		{ id: 20, name: "Alice's Adventures in Wonderland" },
		{ id: 21, name: 'The Old Man and the Sea' },
		{ id: 22, name: 'The Divine Comedy' },
		{ id: 23, name: 'Les Misérables' },
		{ id: 24, name: 'Crime and Punishment' },
		{ id: 25, name: 'Gone with the Wind' },
		{ id: 26, name: 'Lord of the Flies' },
		{ id: 27, name: 'The Picture of Dorian Gray' },
		{ id: 28, name: 'A Tale of Two Cities' },
		{ id: 29, name: 'Dracula' },
		{ id: 30, name: 'The Scarlet Letter' },
		{ id: 31, name: 'The Road' },
		{ id: 32, name: 'The Sun Also Rises' },
		{ id: 33, name: 'The Jungle' },
		{ id: 34, name: 'Fahrenheit 451' },
		{ id: 35, name: "The Hitchhiker's Guide to the Galaxy" },
		{ id: 36, name: 'The Princess Bride' },
		{ id: 37, name: 'The Secret Garden' },
		{ id: 38, name: 'Wuthering Heights' },
		{ id: 39, name: "The Handmaid's Tale" },
		{ id: 40, name: 'The Little Prince' },
		{ id: 41, name: 'The Road Not Taken' },
		{ id: 42, name: 'The Martian' },
		{ id: 43, name: 'The Hunger Games' },
		{ id: 44, name: 'The Giver' },
		{ id: 45, name: 'The Outsiders' },
		{ id: 46, name: 'The Chronicles of Narnia' },
		{ id: 47, name: 'The Name of the Wind' },
		{ id: 48, name: 'The Girl with the Dragon Tattoo' },
		{ id: 49, name: 'The Stand' },
		{ id: 50, name: 'The Wind in the Willows' },
	];
	const [novels, setNovels] = useState(allNovels);
	const allNovelNames = allNovels.map((novel) =>
		novel.name.toLocaleLowerCase()
	);

	useEffect(() => {
		if (allNovelNames.includes(searchQuery.toLocaleLowerCase())) {
			setNovels(null);
		} else {
			const filteredNovels = allNovels.filter((novel, _) =>
				novel.name.toLowerCase().includes(searchQuery.toLowerCase())
			);

			const slicedNovels =
				filteredNovels.length > 5
					? filteredNovels.slice(0, 5)
					: filteredNovels;

			setNovels(slicedNovels);
			console.log(slicedNovels);
		}
	}, [searchQuery]);
	return (
		<div
			className={cn(
				'text-white relative flex flex-col gap-y-0.5',
				className
			)}
		>
			<form className="flex rounded-lg border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-sm gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:inset-0 caret-primary">
				<label
					className="flex items-center gap-x-2 w-full"
					htmlFor="search"
				>
					<Avatar className="w-6 h-6 text-[10px]" />
					<input
						type="text"
						id="search"
						name="search"
						onChange={handleQueryChange}
						value={searchQuery}
						autoFocus
						className="bg-transparent placeholder:text-foreground-secondary focus:outline-none text-foreground flex-1 w-full py-1 flex-grow"
						placeholder={placeholder}
					/>
					{searchQuery !== '' && (
						<button
							onClick={() => setSearchQuery('')}
							className="text-foreground-secondary w-6 h-6 p-1 rounded-full hover:bg-foreground-secondary/20 inline-flex justify-center items-center focus:outline-none"
						>
							<PlusIcon className="rotate-45 " />
						</button>
					)}
				</label>
			</form>
			{searchQuery === '' || searchQuery === undefined ? (
				<></>
			) : (
				<div className="border-2 text-xs absolute h-auto left-0 right-0 top-[110%] box-border rounded-lg z-40  border-background-tertiary/90 backdrop-blur flex flex-col gap-y-0.5">
					{novels?.map((novel, _) => {
						return (
							<div
								key={_}
								onClick={() => setSearchQuery(novel.name)}
								className="cursor-pointer p-2 hover:bg-background-tertiary m-1 rounded"
							>
								{novel.name}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Input;
