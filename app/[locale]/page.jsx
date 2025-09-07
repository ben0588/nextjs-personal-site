'use client';
// /app/[locale]/page.jsx

import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
	const t = useTranslations();
	const locale = useLocale();

	console.log('locale', locale);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		name: 'Ben0588',
		url: process.env.NEXT_PUBLIC_SITE_URL,
		about: {
			'@type': 'Person',
			name: 'Ben0588',
			jobTitle: '前端工程師',
			email: 'energy9527z@gmail.com',
			knowsAbout: ['React', 'Next.js', 'JavaScript', 'Frontend Development'],
			sameAs: ['https://github.com/ben0588'],
		},
	};

	return (
		<div>
			<h1 className='text-red-400'>{t('HomePage.title')}</h1>

			{jsonLd && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			)}
		</div>
	);
}
