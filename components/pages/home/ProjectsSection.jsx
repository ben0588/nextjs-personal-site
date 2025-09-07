'use server';

import projects from '@/data/projects.json';
import ProjectCard from '../projects/ProjectCard';
import { Link } from '@/i18n/navigation';
import ProjectsTags from '../projects/ProjectsTags';
import Image from 'next/image';
import CardSwap, { Card } from '@/components/react_bits/CardSwap';

const ProjectsSection = async () => {
	const filterProjects = projects
		.filter((item) => item.type === 'website')
		.sort((x, y) => y.year - x.year);

	const heroCards = [
		{ label: '1', value: '2' },
		{ label: '2', value: '4' },
		{ label: '3', value: '5' },
	];

	const projectIntro = [
		'開發電商購物流程（商品展示、購物車、結帳系統）。',
		'開發後台系統（商品、優惠卷、文章、訂單管理）。',
		'實作會員系統（註冊、登入、權限驗證）。',
		'多語系與主題切換（next-intl / next-themes）。',
		'SEO 與效能優化（SSR、ISR、Lighthouse 測試）。',
		'前端程式品質檢測（SonarQube、ESLint）',
	];

	return (
		<section className='max-container flex flex-col gap-3 overflow-hidden'>
			<h2 className=''>作品集</h2>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-2'>
				<div className='primary-border order-2 flex w-full flex-col justify-between gap-3 rounded-md p-3 sm:order-1 sm:w-[80%] md:w-[60%] xl:w-[100%]'>
					<div>
						<p>
							這些專案展示了我在前端開發、UI/UX
							設計與系統規劃上的實作成果，從個人實驗到完整專案落地都有涵蓋。
						</p>
						<ul className='mt-4 list-inside list-disc pl-7'>
							{projectIntro?.map((item) => (
								<li key={item} className='truncate'>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div>
						<Link href='/projects' className='button more-button'>
							查看更多作品
						</Link>
					</div>
				</div>
				<div className='relative order-1 h-[330px] overflow-hidden sm:order-2 sm:h-[400px] md:h-[520px] md:overflow-visible xl:h-[600px]'>
					<CardSwap
						cardDistance={60}
						verticalDistance={70}
						delay={5000}
						pauseOnHover={false}
					>
						{filterProjects?.map((item) => {
							const smallImage = item?.covers?.find((img) => img.type === 'small');
							return (
								<Card
									key={item.label}
									customClass='bg-white dark:bg-dark dark:text-dark-text text-primary-text primary-border rounded-md'
								>
									<h3 className='primary-border-color border-b p-3'>
										{item.title}
									</h3>
									<div className='h-[85%] w-full overflow-hidden'>
										<Image
											src={smallImage?.src}
											alt={smallImage?.alt}
											priority={false}
											width={smallImage?.width} // 原圖實際寬
											height={smallImage?.height} // 原圖實際高
											className='size-full object-cover'
											sizes='(max-width: 768px) 100vw, 50vw'
										/>
									</div>
								</Card>
							);
						})}
					</CardSwap>
				</div>
			</div>

			{/* <div className='mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4'>
				{filterProjects?.map((item, index) => {
					if (index < 4) {
						const smallImage = item?.covers?.find((img) => img.type === 'small');

						return (
							<Link
								href={`/projects/${item.title}-${item.id}`}
								className='border-primary-border hover:border-primary-border-hover dark:border-dark-primary-border dark:hover:border-dark-primary-border-hover flex h-full w-full cursor-pointer flex-col items-start justify-between rounded-md border p-2 duration-200'
								key={item.id}
							>
								<div className='mb-3 min-h-[100px] w-full overflow-hidden'>
									<Image
										src={`${process.env.NEXT_PUBLIC_SITE_URL}${smallImage?.src}`}
										alt={smallImage?.alt}
										priority={false}
										width={smallImage?.width} // 原圖實際寬
										height={smallImage?.height} // 原圖實際高
										className='size-full object-cover'
										sizes='(max-width: 768px) 100vw, 50vw'
									/>
								</div>
								<h2 className='text-primary mb-2 w-full text-center text-xl font-bold'>
									{item?.title}
								</h2>
								<ProjectsTags tags={item?.tags} />
							</Link>
						);
					}
				})}
			</div> */}
			{/* <div>
				<Link href='/projects' className='button more-button'>
					查看更多作品
				</Link>
			</div> */}
		</section>
	);
};
export default ProjectsSection;
