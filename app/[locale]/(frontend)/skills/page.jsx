'use server';

import { cookies } from 'next/headers';

import Accordion from '@/components/common/Accordion';
import BreadcrumbNavbar from '@/components/common/BreadcrumbNavbar';
import LogoLoop from '@/components/react_bits/LogoLoop';
import TextType from '@/components/react_bits/TextType';
import skills from '@/data/skills.json';
import { techLogos } from '@/data/techLogos';

const SkillsPage = async () => {
	const cookieStore = await cookies();
	const theme = cookieStore.get('theme')?.value;

	return (
		<div className='max-container space-y-5'>
			<BreadcrumbNavbar items={[{ name: '技術', path: '/skills' }]} />

			<TextType
				text={[
					'此處僅列出常見主流技術，更多套件與實作細節請見完整筆記。',
					'完整內容請參考：個人筆記目錄',
				]}
				typingSpeed={75}
				pauseDuration={1500}
				showCursor={true}
				cursorCharacter='|'
				cursorClassName='text-primary-text dark:text-dark-text'
			/>
			{/* <p>
				僅展示常用大眾技術，詳細(套件/實作等等)請參考：{' '}
				<Link href='/notes' className='link'>
					個人筆記目錄
				</Link>
			</p> */}

			{/* 技能區塊 */}
			<div className='space-y-1'>
				<Accordion content={skills} />
			</div>

			{/* LOGO LOOP 展示 */}
			<div className='relative mt-10 h-[60px] overflow-hidden'>
				<LogoLoop
					logos={techLogos}
					speed={40}
					direction='left'
					logoHeight={48}
					gap={40}
					pauseOnHover
					scaleOnHover
					fadeOut
					fadeOutColor={`${theme === 'dark' ? '#262626' : '#ffffff'}`} // 有限度的更改顏色，因為SSR切換並不會重新整理頁面，只針對整理後的色系做更新
					ariaLabel='Technology partners'
				/>
			</div>
		</div>
	);
};
export default SkillsPage;
