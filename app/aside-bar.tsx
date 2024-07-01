'use client';

import { FaLaptopCode, FaUser, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{ name: 'Home', href: '/', icon: FaHome },
	{ name: 'About', href: '/about', icon: FaUser },
	{ name: 'Projects', href: '/projects', icon: FaLaptopCode },
];

export default function AsideBar() {
	const pathname = usePathname();

	return (
		<aside className="from-background-900 to-background-500 m-0 flex h-screen w-24 flex-col bg-gradient-to-b p-0 shadow-2xl">
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'm-2 flex flex-col items-center justify-center p-4 shadow-md transition-all duration-300 hover:rounded-3xl active:scale-75 max-md:h-16 max-md:w-16 lg:h-20 lg:w-20',
							{
								'bg-primary-400 shadow-primary-400 rounded-3xl': pathname === link.href,
								'bg-secondary-100 rounded-md': pathname !== link.href,
							}
						)}>
						<LinkIcon
							className={clsx(
								'text-primary-400 h-24 w-24 bg-transparent transition-colors ease-linear md:h-12',
								{
									'text-secondary-50': pathname === link.href,
									'hover:text-secondary-600': pathname !== link.href,
								}
							)}
						/>
					</Link>
				);
			})}
		</aside>
	);
}
