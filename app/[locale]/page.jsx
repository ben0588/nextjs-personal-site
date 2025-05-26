'use client';
// /app/[locale]/page.jsx

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
	const t = useTranslations();
	return (
		<div>
			<h1 className='text-red-400'>{t('HomePage.title')}</h1>
			<Link href='/about'>{t('HomePage.about')}</Link>
			<Link href='/ssr'>SSR</Link>
		</div>
	);
}
