'use client';

import { useEffect, useState } from 'react';
import Avatar from './Avatar';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { allNovels } from '@/constants';
import { useSession } from 'next-auth/react';

const Input = ({ placeholder = 'Search', children, className }) => {
	const { data: session } = useSession();
	const [searchQuery, setSearchQuery] = useState('');


	const handleQueryChange = (e) => {
		setSearchQuery(e.target.value);
	};

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
		}
	}, [searchQuery]);
	return (
		<div
			className={cn(
				'text-white relative flex flex-col gap-y-0.5',
				className
			)}
		>
			<form className="flex rounded-lg border-border border-2 p-1.5 focus-within:ring focus-within:ring-primary items-center text-sm gap-x-1 bg-gradient-to-t from-background-secondary/40 from-10% to-transparent space-y-2 before:absolute before:bg-gradient-to-r backdrop-blur-[2px] before:from-transparent before:to-background-secondary/40 before:from-10% before:-z-10 before:inset-0 caret-primary">
				<label
					className="flex items-center gap-x-2 w-full"
					htmlFor="search"
				>
					{session && <Avatar name={session?.user.username} className="w-7 h-7 text-[8px]" />}
					<input
						type="text"
						id="search"
						name="search"
						onChange={handleQueryChange}
						value={searchQuery}
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
