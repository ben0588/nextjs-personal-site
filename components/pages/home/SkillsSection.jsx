'use server';

import LogoLoop from '@/components/react_bits/LogoLoop';
import { techLogos } from '@/data/techLogos';
import { cookies } from 'next/headers';
import skills from '@/data/skills.json';
import Accordion from '@/components/common/Accordion';
import { Link } from '@/i18n/navigation';

const SkillsSection = async () => {
	const cookieStore = await cookies();
	const theme = cookieStore.get('theme')?.value;

	const newSkills = skills?.filter((item, index) => index < 2 && item);

	return (
		<section className='flex flex-col gap-3'>
			<div className='max-container w-full space-y-3'>
				<h2 className=''>技術</h2>

				<div className='grid grid-cols-1 gap-2'>
					<Accordion content={newSkills} />
				</div>
			</div>
			<div className='max-container w-full'>
				<Link href='/skills' className='button more-button'>
					查看更多技術
				</Link>
			</div>
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
		</section>
	);
};
export default SkillsSection;
