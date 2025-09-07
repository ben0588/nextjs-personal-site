'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { AiOutlineLoading } from 'react-icons/ai';
import { MdWbSunny } from 'react-icons/md';

export default function ThemeToggle() {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!resolvedTheme) return;
		const maxAgeSeconds = 60 * 60 * 24 * 365;
		document.cookie = `theme=${resolvedTheme}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
	}, [resolvedTheme]);

	if (!mounted)
		return (
			<button className='navButton animate-pulse' type='button'>
				<AiOutlineLoading className='navIcon animate-spin' />
			</button>
		);

	return (
		<button
			className='navButton'
			type='button'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? <MdWbSunny className='navIcon' /> : <FaMoon className='navIcon' />}
		</button>
	);
}
