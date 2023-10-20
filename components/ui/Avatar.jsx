import { cn } from '@/lib/utils';
import React from 'react';

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

const Avatar = ({ name, className }) => {
	// name=name||'Avatar';
	name = extractInitials(name);

	return (
		<span
			className={cn(
				'w-7 h-7 relative rounded-full flex-shrink-0 inline-flex items-center justify-center bg-gradient-to-tr from-black from-50% to-white',
				className
			)}
		>
			<span className="text-foreground absolute inset-[1px] bg-black rounded-full font-medium text-xs inline-flex justify-center items-center">
				{name}
			</span>
		</span>
	);
};

export default Avatar;
