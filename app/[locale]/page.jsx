'use client';
// /app/[locale]/page.jsx

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';

export default function HomePage() {
	const t = useTranslations();
	const pathname = usePathname();
	const currentLocale = pathname.split('/')[1] || 'en'; // 取得路徑第一段作為語系

	console.log('currentLocale', currentLocale);

	return (
		<div>
			<h1 className='text-red-400'>{t('HomePage.title')}</h1>
			<Link href='/about'>{t('HomePage.about')}</Link>
			<Link href='/ssr'>SSR</Link>
		</div>
	);
}
