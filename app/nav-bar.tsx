'use client';

import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname = usePathname();

	const header_map = new Map();
	header_map.set('/', 'Home');
	header_map.set('/about', 'About');
	header_map.set('/projects', 'Projects');

	return (
		<nav className="shadow-primary-200 from-background-800 via-background-900 to-background-950 mb-2 flex justify-start bg-gradient-to-r shadow-2xl drop-shadow-2xl">
			<p className="text-primary-200 pl-10 text-6xl font-bold max-md:text-3xl">{header_map.get(pathname)}</p>
		</nav>
	);
}
