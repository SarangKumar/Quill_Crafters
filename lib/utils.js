import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// export function validateFileType(file) {
// 	return ALLOWED_FILE_TYPES.includes(file.type);
// }
