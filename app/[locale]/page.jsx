'use server';
import HeroSection from '@/components/pages/home/HeroSection';
import NotesSection from '@/components/pages/home/NotesSection';
import ProjectsSection from '@/components/pages/home/ProjectsSection';
import SkillsSection from '@/components/pages/home/SkillsSection';
// /app/[locale]/page.jsx

export default async function HomePage() {
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
		<div className='space-y-20'>
			{/* 個人簡短介紹 */}
			<HeroSection />

			{/* 作品區塊 */}
			<ProjectsSection />

			{/* 技術展示 */}
			<SkillsSection />

			{/* 個人筆記區塊 */}
			<NotesSection />

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
