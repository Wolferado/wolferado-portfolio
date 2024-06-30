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
		<aside className="h-screen m-0 p-0 flex flex-col w-24 shadow-2xl bg-gradient-to-b from-background-900 to-background-500">
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex flex-col lg:w-20 lg:h-20 max-md:w-16 max-md:h-16 p-4 m-2 shadow-md hover:rounded-3xl transition-all duration-300 justify-center items-center active:scale-75',
							{
								'rounded-3xl bg-primary-400 shadow-primary-400':
									pathname === link.href,
								'rounded-md bg-secondary-100':
									pathname !== link.href,
							}
						)}>
						<LinkIcon
							className={clsx(
								'bg-transparent w-24 h-24 text-primary-400 transition-colors ease-linear',
								{
									'text-secondary-50': pathname === link.href,
									'hover:text-secondary-600':
										pathname !== link.href,
								}
							)}
						/>
					</Link>
				);
			})}
		</aside>
	);
}
