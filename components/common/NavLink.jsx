'use client';

import { Link, usePathname } from '@/i18n/navigation';
import PropTypes from 'prop-types';

const NavLink = ({ href, children, onClick }) => {
	const pathname = usePathname();
	const defaultActiveClass = 'navLinkActive';

	const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

	return (
		<Link
			href={href}
			className={`relative p-1 ${isActive ? defaultActiveClass : 'navLink'}`}
			onClick={onClick}
		>
			{children}
		</Link>
	);
};

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default NavLink;
