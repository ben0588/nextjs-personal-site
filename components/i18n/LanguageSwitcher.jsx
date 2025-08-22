'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AiOutlineGlobal } from 'react-icons/ai'; // 地球儀圖示
import { IoEarth } from 'react-icons/io5';

import PropTypes from 'prop-types';
import { FaEarthAsia } from 'react-icons/fa6';

function LanguageSwitcher({ isMobile = false }) {
	const router = useRouter();
	const pathname = usePathname();
	const dropdownRef = useRef(null);
	const [isOpenMenu, setIsOpenMenu] = useState(false); // 開啟選單
	const currentLocale = useLocale(); // 當前語系
	const t = useTranslations();
	const searchParams = useSearchParams(); // 原本需要使用 .get('queryName') 取得對應 query 參數
	const query = Object.fromEntries(searchParams.entries()); // 直接取出所有的 query 變成物件
	const queryString = new URLSearchParams(query).toString(); // 再轉成 type=1&index=2&... 字串格式
	const newUrl = `${pathname}?${queryString}`;

	const availableLocales = [
		// 支持語系
		{
			code: 'zh-Hant',
			label: '中文',
			flagsCode: '🇹🇼',
		},
		{
			code: 'en',
			label: 'English',
			flagsCode: '🇺🇸',
		},
	];

	// 開啟/關閉選單
	const toggleMenuShow = () => setIsOpenMenu(!isOpenMenu);

	// 切換語系控制
	const changeLocale = (newLocale) => {
		if (newLocale !== currentLocale) {
			// next-intl 提供的 router 切換路由方式不行，改使用重組後的 url 進行切換
			router.replace(newUrl, { locale: newLocale });
		}
	};

	// 檢查是否點擊在 dropdown 內用於關閉選單
	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpenMenu(false);
		}
	};

	useEffect(() => {
		if (isOpenMenu) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpenMenu]);

	//  mobile language switcher
	if (isMobile) {
		return (
			<div className='mt-3 ml-6 grid grid-cols-2 gap-2'>
				{availableLocales.map((language) => (
					<button
						type='button'
						key={language.code}
						className={`tag text-sm transition-all hover:opacity-70 ${currentLocale === language.code ? 'bg-primary text-primaryBtnText' : 'bg-primaryBg/50'}`}
						onClick={() => changeLocale(language.code)}
					>
						<span>{language.label}</span>
					</button>
				))}
			</div>
		);
	}

	return (
		<div ref={dropdownRef} className='relative inline-block text-left'>
			<button
				type='button'
				onClick={toggleMenuShow}
				className='navButton'
				aria-haspopup='true' // 閱讀器支援告知會有彈出的選單
				aria-expanded={isOpenMenu} // 是否已開啟選單
				aria-label={t('changeLanguage')}
			>
				<AiOutlineGlobal className='navIcon' />
				{/* <IoEarth className='navIcon' />
				<FaEarthAsia className='navIcon' /> */}
			</button>

			{isOpenMenu && (
				<ul
					className={`absolute left-1/2 z-10 mt-2 w-28 -translate-x-1/2 rounded-md border border-gray-200/30 bg-gray-700 shadow shadow-gray-200/30`}
					aria-label={t('changeLanguage')}
				>
					{availableLocales.map((language) => (
						<li key={language.code}>
							<button
								type='button'
								onClick={() => changeLocale(language.code)}
								className={`flex size-full items-center justify-center gap-2 px-2 py-3 text-sm tracking-wide ${currentLocale === language.code ? 'bg-primary text-gray-700' : 'cursor-pointer text-white'} hover:opacity-80`}
								aria-label={`${t('changeLanguage')} ${language.label}`}
							>
								{language.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

LanguageSwitcher.propTypes = {
	isMobile: PropTypes.bool,
};

export default LanguageSwitcher;
