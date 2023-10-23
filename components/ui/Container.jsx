import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({ children, className }) => {
	return (
		<main
			className={cn(
				'mx-4 space-y-10 sm:mx-10 md:mx-auto md:max-w-6xl',
				className
			)}
		>
			{children}
		</main>
	);
};

export default Container;
