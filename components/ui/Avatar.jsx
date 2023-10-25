import { cn } from '@/lib/utils';
import { Check, CheckCircle2Icon, ZapIcon } from 'lucide-react';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { planVariant } from './Button';

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
	return (
		<span className="text-foreground absolute inset-[1px] bg-black rounded-full font-medium text-xs inline-flex justify-center items-center">
			{name}
		</span>
	);
};

const Avatar = ({ name, className, src = '', plan = 'free' }) => {
	name = name || 'Guest User';
	name = extractInitials(name);
	plan = plan.toLowerCase();
	return (
		<span
			className={cn(
				'w-8 h-8 relative rounded-full inline-flex items-center justify-center bg-gradient-to-tr from-black from-50% to-white',
				className
			)}
		>
			<span
				// className={cn(
				// 	planVariant({
				// 		variant: plan,
				// 		className:
				// 			'absolute border-0 inset-[1px] rounded-full font-medium text-xs inline-flex justify-center items-center',
				// 	})
				// )}
				className='absolute bg-black border-0 inset-[1px] rounded-full font-medium text-xs inline-flex justify-center items-center'
			>
				{name}
			</span>
			{plan.toLowerCase() !== 'free' && (
				<span
					className={cn(
						planVariant({
							variant: plan,
							// size: 'icon',
							className: 'absolute rounded-full p-1 right-0 bottom-0'
						})
					)}
				></span>
			)}
		</span>
	);
};

export default Avatar;
