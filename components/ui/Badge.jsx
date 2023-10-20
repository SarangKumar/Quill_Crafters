import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './Button'

const Badge = (
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

export default Badge;
