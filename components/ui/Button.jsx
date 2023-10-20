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
				outline:
					'border-2 border-background-secondary backdrop-blur text-white bg-transparent rounded-full',
				ghost: 'text-foreground bg-transparent rounded-full hover:bg-background-secondary/80 backdrop-blur-md',
			},
			size: {
				default: 'h-7 w-auto px-2 py-px ',
				icon: 'h-7 w-7 p-1 rounded',
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
// Button.displayName = 'Button';

export default Button;

	// const buttonVariants = cva(
	// 	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
	// 	{
	// 		variants: {
	// 			variant: {
	// 				default:
	// 					'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
	// 				destructive:
	// 					'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
	// 				outline:
	// 					'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
	// 				subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
	// 				ghost: 'bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
	// 				link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
	// 			},
	// 			size: {
	// 				default: 'h-10 py-2 px-4',
	// 				sm: 'h-9 px-2 rounded-md',
	// 				lg: 'h-11 px-8 rounded-md',
	// 			},
	// 		},
	// 		defaultVariants: {
	// 			variant: 'default',
	// 			size: 'default',
	// 		},
	// 	}
	// );
