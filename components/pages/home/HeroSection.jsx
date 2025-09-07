'use server';

import DotLottieNext from '@/components/common/DotLottieNext';
import { Link } from '@/i18n/navigation';

const HeroSection = async () => {
	return (
		<section className='max-container'>
			<div className='relative w-full'>
				<DotLottieNext src='lotties/work.lottie' />

				<div className='absolute right-0 bottom-50 w-[30%] border p-3'>
					{/* <h1 className='text-primary mb-4 text-2xl'>
						嗨，我是張勝翔，一名前端工程師，專注於 Next.js 與前後端整合。
					</h1>
					<Link href='/projects' className='button more-button'>
						查看更多
					</Link> */}
					asdasdasdasd
				</div>
			</div>
		</section>
	);
};
export default HeroSection;
