import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { Suspense } from 'react';

function extractInitials(input) {
	// Split the input into words
	const words = input.split(' ');

	if (words.length === 1) {
		// If there's only one word, return the first letter
		return words[0][0].toUpperCase();
	} else if (words.length >= 2) {
		// If there are two words, return the first letter of each word
		return words[0][0].toUpperCase() + words[1][0].toUpperCase();
	} else {
		// Handle cases with more than two words as needed
		return 'Avatar'; // or some other error handling
	}
}

const LoadingAvatar = ({ name, children }) => {
	name = name || 'Guest User';
	name = extractInitials(name);
	return (
		<span className="text-foreground absolute inset-[1px] bg-black rounded-full font-medium text-xs inline-flex justify-center items-center">
			{name}
		</span>
	);
};

const Avatar = ({ name, className, src = '' }) => {
	return (
		<span
			className={cn(
				'w-8 h-8 relative rounded-full inline-flex items-center justify-center bg-gradient-to-tr from-black from-50% to-white',
				className
			)}
		>
			{/* <Suspense fallback={<LoadingAvatar name={name} />}>
				<Image
					src={src}
					alt={`${name}-avatar`}
					width="100"
					height="100"
					className="rounded-full bg-cover"
				/>
			</Suspense> */}
			<LoadingAvatar name={name} />
		</span>
	);
};

export default Avatar;
