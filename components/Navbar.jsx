import React from 'react';
import Link from 'next/link';
import Avatar from './ui/Avatar';

const Navbar = () => {
	return (
		<nav className="text-white bg-white/5 z-50 w-full backdrop-blur-[1px] sticky top-0 h-14 flex justify-center items-center ">
			<main className="flex items-center justify-between mx-4 md:max-w-6xl sm:mx-10 md:mx-auto w-full">
				<h1 className="text-lg font-medium">Quill Crafters</h1>
				<ul className="flex items-center justify-center gap-x-5 text-xs font-medium">
					<li>
						<Link
							className="text-foreground-secondary hover:text-foreground"
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="text-foreground-secondary hover:text-foreground"
							href="/"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="text-foreground-secondary hover:text-foreground"
							href="/"
						>
							All Novels
						</Link>
					</li>
					<li>
						<Avatar name="Sarang Kumar" />
					</li>
				</ul>
			</main>
		</nav>
	);
};

export default Navbar;
