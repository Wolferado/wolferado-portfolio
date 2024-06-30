'use client';

import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname = usePathname();

	const header_map = new Map();
	header_map.set('/', 'Home');
	header_map.set('/about', 'About');
	header_map.set('/projects', 'Projects');

	return (
		<nav className="mb-2 flex shadow-primary-200 justify-start shadow-2xl bg-gradient-to-r from-background-800 via-background-900 to-background-950 drop-shadow-2xl">
			<p className="pl-10 max-md:text-3xl text-6xl font-bold text-primary-200">
				{header_map.get(pathname)}
			</p>
		</nav>
	);
}
