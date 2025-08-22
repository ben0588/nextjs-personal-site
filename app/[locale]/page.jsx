'use client';
// /app/[locale]/page.jsx

import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
	const t = useTranslations();
	const locale = useLocale();

	console.log('locale', locale);

	return (
		<div>
			<h1 className='text-red-400'>{t('HomePage.title')}</h1>
		</div>
	);
}
