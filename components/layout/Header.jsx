'use client';

import { useEffect, useRef, useState } from 'react';
import NavLink from '../common/NavLink';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiMenuFold4Line } from 'react-icons/ri';
import { FaChevronCircleRight } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

import ThemeToggle from '../common/ThemeToggle';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const firstRender = useRef(true);

	// mounted 後關閉首渲染保護
	useEffect(() => {
		firstRender.current = false;
	}, []);

	function toggleOpenMenu() {
		setOpenMenu(!openMenu);
	}

	// 支持 ESC 關閉選單
	useEffect(() => {
		if (!openMenu) return;
		const onKey = (e) => e.key === 'Escape' && toggleOpenMenu();
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [openMenu, toggleOpenMenu]);

	const navList = [
		{ name: '首頁', path: '/' },
		// { name: '關於我', path: '/about' },
		{ name: '技術', path: '/skills' },
		{ name: '作品集', path: '/projects' },
		{ name: '個人筆記', path: '/notes' },
	];

	// 只有在「不是首渲染」時才放動畫 class；首渲染用靜態 translate
	function getDrawerAnimClass(firstRender, openMenu) {
		if (firstRender && openMenu) return '';
		if (firstRender && !openMenu) return 'translate-x-full';
		if (!firstRender && openMenu) return 'animate-slideInFromRight';
		return 'animate-slideOutToRight';
	}
	const drawerAnimClass = getDrawerAnimClass(firstRender.current, openMenu);

	return (
		<header className='dark:bg-dark sticky top-0 z-50 bg-white/90 backdrop-blur-sm'>
			<div className='dark:border-dark-primary-border relative flex h-full items-center justify-center border-b border-gray-200 p-6 sm:p-3'>
				{/* 電腦版導航清單 */}
				<nav className='hidden items-center gap-4 sm:flex'>
					{navList.map((item) => (
						<NavLink key={item.name} href={item.path}>
							{item.name}
						</NavLink>
					))}
				</nav>

				<div className='absolute right-2.5'>
					{/* 手機板選單按鈕 */}
					<div className='inline-block'>
						<button
							type='button'
							className='navButton p-2 sm:hidden'
							aria-expanded={openMenu}
							data-open={openMenu ? 'true' : 'false'}
							aria-label='網站導航'
							title='網站導航'
							onClick={toggleOpenMenu}
						>
							<AiOutlineMenu className='navIcon navIcon-open' />
							<RiMenuFold4Line className='navIcon navIcon-close' />
						</button>
					</div>
					{/* 切換語系 */}
					<LanguageSwitcher />

					{/* 切換主題色 */}
					<ThemeToggle />
				</div>

				{/* 手機板導航清單 */}
				{/* Backdrop：用透明度與 pointer-events 控制顯示 */}
				<div
					className={`bg-dark fixed inset-0 h-screen transition-opacity duration-300 dark:bg-gray-700 ${openMenu ? 'pointer-events-auto opacity-55' : 'pointer-events-none opacity-0'}`}
					aria-hidden='true'
				/>
				{/* Drawer 面板：只做 translateX，不動 Backdrop */}
				<aside className={`absolute inset-0 h-screen sm:hidden ${drawerAnimClass}`}>
					<div className='flex h-full justify-end'>
						<div className='h-full w-1/3 flex-1'></div>
						<div className='dark:bg-dark h-full w-2/3 flex-none bg-white p-3 shadow-[0_0_10px_rgba(0,0,0,0.45)] backdrop-blur-md'>
							<div className='relative h-full'>
								<button
									type='button'
									className='navButton animate-wiggle absolute top-1/2 -left-8 p-2'
									aria-label='關閉手機板導航菜單'
									title='手機板導航菜單'
									onClick={toggleOpenMenu}
									onKeyDown={(e) => console.log('2')}
								>
									<FaChevronCircleRight className='navIcon animate-wiggle' />
								</button>
								<button
									type='button'
									className='navButton absolute float-end p-2'
									aria-label='關閉手機板導航菜單'
									title='手機板導航菜單'
									onClick={toggleOpenMenu}
									onKeyDown={(e) => console.log('3')}
								>
									<IoCloseSharp className='navIcon' />
								</button>

								<nav className='flex flex-col gap-4 p-5'>
									{navList.map((item) => (
										<NavLink
											key={item.name}
											href={item.path}
											onClick={() => setOpenMenu(false)}
										>
											{item.name}
										</NavLink>
									))}
								</nav>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</header>
	);
};
export default Header;
