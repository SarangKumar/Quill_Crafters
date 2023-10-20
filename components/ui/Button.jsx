import * as React from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
	'inline-flex items-center justify-center rounded text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
	{
		variants: {
			variant: {
				default:
					'border-2 relative border-border rounded-full text-white from-background-secondary to-background-tertiary bg-gradient-to-r backdrop-blur-md after:absolute after:-z-10 after:bg-gradient-to-r after:inset-1 after:rounded-full after:from-background-secondary after:to-transparent after:backdrop-blur-md after:opacity-50 after:from-10% after:to-100% after:inset-0 after:-z-10',
				subtle: 'bg-background-tertiary text-foreground-secondary rounded-full hover:bg-background-secondary/80',
				animate:
					'text-foreground-secondary rounded-full relative p-2 after:absolute after:rounded-full after:border-l after:border-primary after:from-white/5  after:duration-500 after:content-[""] after:p-5 after:animate-spin after:to-white/30 after:bg-gradient-to-l before:absolute before:-inset-1 before:bg-gradient-to-r before:from-white/20 before:-z-10 before:rounded-full before:content-[""] before:animate-spin before:p-4 before:duration-1000',
				outline:
					'border-2 border-background-secondary backdrop-blur text-white bg-transparent rounded-full',
				ghost: 'text-foreground bg-transparent rounded-full hover:bg-background-secondary backdrop-blur-md',
			},
			size: {
				default: 'h-7 w-auto px-2 py-px ',
				icon: 'h-7 w-7 p-1 rounded',
				'icon-rounded': 'h-8 w-8 p-1.5 rounded-full',
				'icon-rounded-large': 'h-12 w-12 p-3 rounded-full',
				sm: 'h-9 px-4',
				lg: 'h-11 px-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);


const Button = (
	{ className, children, href, variant, size, ...props },
	ref
) => {
	if (href) {
		return (
			<Link
				href={href}
				className={cn(buttonVariants({ variant, size, className }))}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
