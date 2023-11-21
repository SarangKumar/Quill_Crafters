'use client';
import React, { useState } from 'react';
import Avatar from './ui/Avatar';
import Button, { buttonVariants, planVariant } from './ui/Button';
import { signOut, signIn, useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import Badge from './ui/Badge';
import { AlignJustify, BirdIcon, Bot, PlusIcon, Webhook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './ui/Container';

const Navbar = () => {
	const { data: session, status } = useSession();
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	// if (session) {
	// }

	const userProfileLink =
		status === 'authenticated'
			? session.user.username.split(' ').join('_').toLowerCase()
			: 'Loading!';

	// console.log(session, status, username);
	return (
		<nav className="md:py-5 mb-10 border-b border-primary/40 text-white bg-background/40 z-50 w-full backdrop-blur-[1px] sticky top-0 h-16 flex justify-center items-center ">
			<Container className="flex items-center justify-between w-full">
				<h1 className="hidden sm:flex">
					<Link
						href="/"
						className="text-lg font-medium"
					>
						Quill Crafters
					</Link>
					<span className="text-primary border-primary text-xs my-auto border rounded px-1 bg-primary/10 font-semibold ml-3">
						Beta
					</span>
				</h1>
				<h1 className="sm:hidden flex ">
					<Link
						href="/"
						className="items-center"
					>
						<Image
							src="/quillcrafters.png"
							width={30}
							height={30}
							alt="Quill Crafters"
						/>
					</Link>
					<span className="text-primary border-primary text-xs my-auto border rounded px-1 bg-primary/10 font-semibold ml-3">
						Beta
					</span>
				</h1>

				{/* Desktop View */}
				<ul className="hidden md:flex items-center justify-center gap-x-3 text-xs font-medium">
					<li className="">
						<Badge
							href="/"
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
						>
							All Novels
						</Badge>
					</li>
					<li className="">
						<Badge
							href="/pricing"
							variant="ghost"
							className="text-foreground-secondary hover:text-foreground"
						>
							Pricing
						</Badge>
					</li>
					{session ? (
						<>
							{/* {session?.user.plan !== 'FREE' && ( */}
							<li className="items-center gap-x-3 hidden md:flex">
								<Link href={`/${userProfileLink}`}>
									<Avatar
										name={session?.user.username}
										plan={session?.user.plan}
									/>
								</Link>
								<span
									className={cn(
										planVariant({
											variant:
												session?.user.plan.toLowerCase(),
										})
									)}
								>
									{session?.user.plan}
								</span>
							</li>
							{/* )} */}
							<li>
								<button
									className={cn(
										buttonVariants({ variant: 'outline' })
									)}
									onClick={() => signOut('google')}
								>
									Sign Out
								</button>
							</li>
						</>
					) : (
						<li>
							<button
								className={cn(
									buttonVariants({ variant: 'outline' })
								)}
								onClick={() => signIn('google')}
							>
								Sign In
							</button>
						</li>
					)}
				</ul>

				<div className="flex gap-x-5 items-center md:hidden ">
					{session && (
						<div className="flex gap-x-2 items-center">
							<Link href={`/${userProfileLink}`}>
								<Avatar
									name={session?.user.username}
									plan={session?.user.plan}
								/>
							</Link>
							{session?.user.plan === 'PREMIUM' ? (
								<span
									className={cn(
										planVariant({
											variant:
												session?.user.plan.toLowerCase(),
											size: 'icon',
										})
									)}
								>
									<Bot size={16} />
								</span>
							) : session?.user.plan === 'PRO' ? (
								<span
									className={cn(
										planVariant({
											variant:
												session?.user.plan.toLowerCase(),
											size: 'icon',
										})
									)}
								>
									<BirdIcon size={16} />
								</span>
							) : session?.user.plan === 'BASIC' ? (
								<span
									className={cn(
										planVariant({
											variant:
												session?.user.plan.toLowerCase(),
											size: 'icon',
										})
									)}
								>
									<Webhook size={16} />
								</span>
							) : (
								<></>
							)}
						</div>
					)}

					<button
						onClick={() => setMenuIsOpen((prev) => !prev)}
						className="z-50 rounded flex gap-x-3 items-center"
					>
						{!menuIsOpen && <AlignJustify size={24} />}
					</button>
				</div>

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
			</Container>
		</nav>
	);
};

export default Navbar;
