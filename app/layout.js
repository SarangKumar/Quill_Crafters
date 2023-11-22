import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Provider from '@/components/ui/Provider';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = [
	{
		metadataBase: new URL('https://quillcrafters.vercel.app/'),
		title: {
			default: 'Quill Crafters - Creative Writing and More',
			template: '%s | Quill Crafters',
		},
		description:
			'Explore a world of creative writing, novels, poetry, and more at Quill Crafters. Join our community of writers and readers today.',
		verification: {
			google: 'google',
		},
		creator: 'Sarang',
		authors: {
			name: 'Sarang Kumar',
			url: 'https://github.com/SarangKumar',
		},
		category: 'education',
		keywords: [
			'Next.js',
			'Education',
			'Quill Crafters',
			'Fantacy',
			'Comics',
			'Novels',
			'Action',
			'Adventure',
			'Stripe',
			'Modern UI',
		],
	},
	{
		name: 'google-adsense-account',
		content: 'ca-pub-9615068362549302',
	},
];

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="scroll-smooth"
		>
			<head>
				{process.env.NODE_ENV === 'production' && (
					<script
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9615068362549302"
						crossorigin="anonymous"
					></script>
				)}
				<link
					rel="manifest"
					href="/manifest.json"
				/>
			</head>
			<body
				className={`${poppins.className} bg-background selection:text-primary selection:bg-primary/10 selection:backdrop-blur-sm`}
			>
				<Provider>
					<Navbar />
					{children}
				</Provider>
				<Analytics />
			</body>
		</html>
	);
}
