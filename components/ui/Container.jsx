import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({ children, className }) => {
	return (
		<section
			className={cn(
				'mx-5 space-y-10 sm:mx-10 md:px-10 lg:p-0  md:mx-auto md:max-w-6xl',
				className
			)}
		>
			{children}
		</section>
	);
};

export default Container;
