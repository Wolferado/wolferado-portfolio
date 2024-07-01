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
		<aside className="from-background-300 via-background-200 to-background-100 border-primary-800 h-screen w-24 flex-col border-r-2 bg-gradient-to-b p-0 shadow-2xl">
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'group m-2 flex flex-col items-center justify-center bg-gradient-to-b p-4 shadow-md transition-all duration-300 hover:rounded-3xl active:scale-75 max-md:h-16 max-md:w-16 lg:h-20 lg:w-20',
							{
								'from-background-950 to-background-700 rounded-3xl shadow-2xl': pathname === link.href,
								'from-background-700 to-background-500 rounded-md': pathname !== link.href,
							}
						)}>
						<LinkIcon
							className={clsx(
								'text-primary-900 h-24 w-24 bg-transparent transition-colors ease-linear md:h-12',
								{
									'text-primary-300': pathname === link.href,
									'group-hover:text-primary-950': pathname !== link.href,
								}
							)}
						/>
					</Link>
				);
			})}
		</aside>
	);
}
