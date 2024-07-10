import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AsideBar from './aside-bar';
import './globals.css';
import 'clsx';
import NavBar from './nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Aleksey Karelin - Portfolio',
	description: 'Portfolio of the one that likes to make people laugh.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en">
				<body className={inter.className}>
					<div className="flex flex-row">
						<AsideBar></AsideBar>
						<div className="h-screen bg-gradient-to-b from-background-200 to-background-100">
							<NavBar></NavBar>
							{children}
						</div>
					</div>
				</body>
			</html>
		</>
	);
}
