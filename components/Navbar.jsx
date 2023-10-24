'use client';
import React, { useState } from 'react';
import Avatar from './ui/Avatar';
import Button, { buttonVariants } from './ui/Button';
import { signOut, signIn, useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import Badge from './ui/Badge';
import { AlignJustify, PlusIcon } from 'lucide-react';

const Navbar = () => {
	const { data: session } = useSession();
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	if (session) {

	}

	return (
		<nav className="text-white bg-white/5 z-50 w-full backdrop-blur-[1px] sticky top-0 h-14 flex justify-center items-center ">
			<main className="flex items-center justify-between mx-5 md:max-w-6xl sm:mx-10 md:mx-auto w-full">
				<h1 className="text-lg font-medium">Quill Crafters</h1>

				{/* Desktop View */}
				<ul className="hidden md:flex items-center justify-center gap-x-3 text-xs font-medium">
					<li className="">
						<Badge
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
							href="/"
						>
							Home
						</Badge>
					</li>
					<li className="">
						<Badge
							href="/"
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
						>
							All Novels
						</Badge>
					</li>
					<li className="items-center gap-x-3 hidden md:flex">
						{session ? (
							<>

							<Avatar name={session?.user.username} />
							<span className="">{session?.user.plan !== 'BASIC' && session?.user.plan}</span>
							</>
						) : (
							<button
								className={cn(
									buttonVariants({ variant: 'outline'})
								)}
								onClick={() => signIn()}
							>
								Sign In
							</button>
						)}
					</li>
				</ul>

				<button
					onClick={() => setMenuIsOpen((prev) => !prev)}
					className="z-50 h-8 w-8 rounded md:hidden"
				>
					{!menuIsOpen && <AlignJustify size={24} />}
				</button>

				<aside
					className={`absolute top-0 bottom-0 right-0 bg-background-secondary h-[100svh] p-6 ${
						menuIsOpen ? 'w-80 ' : 'hidden w-0 translate-x-0'
					}`}
				>
					<div className="h-full w-full flex flex-col items-end gap-2">
						<button
							onClick={() => setMenuIsOpen((prev) => !prev)}
							className="z-50 flex justify-center items-center rounded hover:bg-background-tertiary/20 hover:ring hover:shadow-primary focus:ring-primary hover:shadow"
						>
							<PlusIcon
								size={24}
								className="rotate-45"
							/>
						</button>

						<ul>
							<li>
								{session ? (
									<>
										{/* <Avatar name={session?.user.name} /> */}
										<button
											className="rounded text-foreground hover:text-foreground-secondary border-2 border-border bg-background-tertiary hover:ring hover:shadow-primary focus:ring-primary hover:shadow h-9 px-4"
											onClick={() => signOut('google')}
										>
											Sign Out
										</button>
									</>
								) : (
									<button
										className="text-foreground-secondary hover:text-foreground"
										onClick={() => signIn('google')}
									>
										Sign In
									</button>
								)}
							</li>
						</ul>
					</div>
				</aside>
			</main>
		</nav>
	);
};

export default Navbar;
