import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({ children, className }) => {
	return (
		<section
			className={cn(
				'mx-5 space-y-10 sm:mx-10 md:mx-12 lg:mx-auto md:max-w-4xl lg:max-w-5xl',
				className
			)}
		>
			{children}
		</section>
	);
};

export default Container;
