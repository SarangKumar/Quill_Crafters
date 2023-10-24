import { cn } from '@/lib/utils';
import { Check, CheckCircle2Icon, ZapIcon } from 'lucide-react';
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
	return (
		<span className="text-foreground absolute inset-[1px] bg-black rounded-full font-medium text-xs inline-flex justify-center items-center">
			{name}
		</span>
	);
};

const Avatar = ({ name, className, src = '', plan }) => {
	name = name || 'Guest User';
	name = extractInitials(name);
	return (
		<span
			className={cn(
				'w-8 h-8 relative rounded-full inline-flex items-center justify-center bg-gradient-to-tr from-black from-50% to-white',
				className
			)}
		>
			<span
				className={`text-foreground absolute inset-[1px] ${
					plan === 'PREMIUM'
						? 'bg-black'
						: plan === 'PRO'
						? 'bg-black'
						: 'bg-black'
				}  rounded-full font-medium text-xs inline-flex justify-center items-center`}
			>
				{name}
			</span>
			<span className="absolute text-white right-0 bottom-0">
				{plan !== 'BASIC' && (
					<ZapIcon
						// size={10}
						className="bg-primary rounded-full p-0.5 w-2.5 h-2.5"
						fill="hsl(259 71% 64%)"
					/>
				)}
			</span>
		</span>
	);
};

export default Avatar;
