'use client';
import React from 'react';
import Avatar from './ui/Avatar';
import  { buttonVariants } from './ui/Button';
import { signOut, signIn, useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import Badge from './ui/Badge';

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<nav className="text-white bg-white/5 z-50 w-full backdrop-blur-[1px] sticky top-0 h-14 flex justify-center items-center ">
			<main className="flex items-center justify-between mx-4 md:max-w-6xl sm:mx-10 md:mx-auto w-full">
				<h1 className="text-lg font-medium">Quill Crafters</h1>
				<ul className="flex items-center justify-center gap-x-3 text-xs font-medium">
					<li>
						<Badge
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
							href="/"
						>
							Home
						</Badge>
					</li>
					<li>
						<Badge
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
							href="/"
						>
							About
						</Badge>
					</li>
					<li>
						<Badge
							href="/"
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
						>
							All Novels
						</Badge>
					</li>

					{session ? (
						<li className='flex items-center gap-x-3'>
							<Avatar name={session?.user.name} />
							<button
								className={cn(
									buttonVariants('default', 'default', '')
								)}
								onClick={() => signOut()}
							>
								Sign Out
							</button>
						</li>
					) : (
						<li className='flex items-center gap-x-3'>
							<button
								className={cn(
									buttonVariants('default', 'default', '')
								)}
								onClick={() => signIn()}
							>
								Sign In
							</button>
						</li>
					)}
				</ul>
			</main>
		</nav>
	);
};

export default Navbar;
