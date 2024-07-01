'use client';

import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname = usePathname();

	const header_map = new Map();
	header_map.set('/', 'Home');
	header_map.set('/about', 'About');
	header_map.set('/projects', 'Projects');

	return (
		<nav className="shadow-primary-200 from-background-300 via-background-500 to-background-600 text-custom_text-950 border-primary-800 mb-2 flex justify-start border-b-2 bg-gradient-to-r drop-shadow-xl max-lg:justify-center">
			<p className="p-2 pl-10 text-4xl font-bold text-text max-md:pl-0 max-md:text-2xl">
				{header_map.get(pathname)}
			</p>
		</nav>
	);
}
