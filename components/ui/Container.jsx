import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({ children, className }) => {
	return (
		<section
			className={cn(
				'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
				className
			)}
		>
			{children}
		</section>
	);
};

export default Container;
