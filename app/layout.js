import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Provider from '@/components/ui/Provider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} bg-background selection:text-primary selection:bg-primary/10 selection:backdrop-blur-sm`}
			>
				<Provider>
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
	);
}
