'use client';

import { Link, usePathname } from '@/i18n/navigation';

const NavLink = ({ href, children }) => {
	const pathname = usePathname();
	const defaultActiveClass = 'navLinkActive';

	return (
		<Link
			href={href}
			className={`relative p-1 ${pathname === href ? defaultActiveClass : 'navLink'}`}
		>
			{children}
		</Link>
	);
};
export default NavLink;
