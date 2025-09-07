'use server';

import PropTypes from 'prop-types';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

import projects from '@/data/projects.json';
import BreadcrumbNavbar from '@/components/common/BreadcrumbNavbar';
import ProjectFancyBox from '@/components/pages/projects/ProjectFancyBox';
import ProjectsTags from '@/components/pages/projects/ProjectsTags';

const ProjectDetailPage = async ({ params }) => {
	const newParams = await params;
	const slug = newParams?.id ?? '';
	const id = String(slug).split('-').pop(); // 取 url 後面的 id
	const data = projects?.find((item) => item?.id == id);
	const largeImage = data?.covers?.find((img) => img.type === 'large');
	const locale = newParams?.locale;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: data?.title,
		operatingSystem: 'Web',
		applicationCategory: 'Productivity',
		description: data?.description,
		image: `${process.env.NEXT_PUBLIC_SITE_URL}${largeImage?.src}`,
		url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/projects/${data?.title}-${data?.id}`,
		author: {
			'@type': 'Person',
			name: 'Ben0588',
		},
	};

	const linkObject = {
		frontend: '前台 DEMO 連結',
		backend: '後台 DEMO 連結',
		repo: '前端 GitHub Repo 連結',
		backend_repo: '後端 GitHub Repo 連結',
		swagger: 'Swagger API DEMO 連結',
		user_login: '會員登入展示影片',
	};

	if (!data) {
		return (
			<div>
				專案不存在，請返回
				<Link
					href={'/projects'}
					className='link mx-2'
					aria-label='返回作品擊'
					title='返回作品擊'
				>
					作品集
				</Link>
				重新確認。謝謝
			</div>
		);
	}

	return (
		<div className='max-container mb-5 space-y-5'>
			<BreadcrumbNavbar
				currentType='text'
				items={[
					{ name: '作品集', path: '/projects' },
					{ name: data?.title, path: `/projects/${data?.title}-${data?.id}` },
				]}
			/>

			{jsonLd && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			)}

			<div className='max-h-[500px] min-h-[200px] w-full overflow-hidden'>
				<Image
					src={largeImage?.src}
					alt={largeImage?.alt}
					priority
					width={largeImage?.width} // 原圖實際寬
					height={largeImage?.height} // 原圖實際高
					className='w-full object-cover object-bottom'
					quality={100}
				/>
			</div>

			<div className='space-y-8'>
				<section className='space-y-3'>
					<h1 className='text-primary text-2xl font-bold'>{data?.title}</h1>
					<p>{data?.description}</p>
					<ProjectsTags tags={data?.tags} containerClass='px-0' />
				</section>

				<section className='space-y-3'>
					<h2>網站連結</h2>
					<ul className='list-disc pl-7'>
						{Object.entries(data?.links || {}).map(([key, value]) => (
							<li key={key}>
								<Link href={value} target='_blank' className='link'>
									{linkObject[key]}
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section className='space-y-3'>
					<h3>前後台截圖</h3>
					<div className='border-primary-border hover:border-primary-border-hover dark:border-dark-primary-border dark:hover:border-dark-primary-border-hover border p-2 duration-150'>
						{/* 使用 FancyBox 套件 */}
						<ProjectFancyBox gallery={data?.gallery} />

						{/* 自製燈箱功能 */}
						{/* {data?.gallery?.map((item) => (
							<div key={item.title} className='overflow-hidden'>
								<ImageLightbox item={item}>
									<Image
										src={`${process.env.NEXT_PUBLIC_SITE_URL}${item.src}`}
										alt={item?.alt}
										priority
										width={item?.width} // 原圖實際寬
										height={item?.height} // 原圖實際高
										className='w-full object-cover object-bottom'
										quality={100}
									/>
								</ImageLightbox>
							</div>
						))} */}
					</div>
				</section>

				<section className='space-y-3'>
					<h3>專案介紹</h3>
					<p className='mb-0 text-sm'>
						開發週期：{data?.timeline?.start} - {data?.timeline.end}
					</p>
					<ul className='list-disc pl-7'>
						{data?.responsibilities?.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				<section className='space-y-3'>
					<h3>開發過程</h3>
					<ul className='list-disc pl-7'>
						{data?.caseIntro?.map((item) => (
							<li key={item.label}>
								{item.label}：{item.value}
							</li>
						))}
					</ul>
				</section>

				<section className='space-y-3'>
					<h4>技術反思</h4>
					<ul className='list-disc pl-7'>
						{data?.reflection?.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				{data?.assets && (
					<section className='space-y-3'>
						<h5>資源來源</h5>
						<ul className='list-disc pl-7'>
							{Object.entries(data?.assets || {}).map(([key, value]) => (
								<li key={key}>
									{key}：{value}
								</li>
							))}
						</ul>
					</section>
				)}

				{data?.outcomes?.metric && (
					<section className='space-y-3'>
						<h5>備註</h5>
						<p>
							{data?.outcomes?.metric}：{data?.outcomes?.value} (
							{data?.outcomes?.note})
						</p>
					</section>
				)}
			</div>
		</div>
	);
};

ProjectDetailPage.propTypes = {
	params: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}).isRequired,
};

export default ProjectDetailPage;

export async function generateMetadata({ params }) {
	const newParams = await params;
	const slug = newParams?.id ?? '';
	const id = String(slug).split('-').pop();
	const data = projects?.find((item) => String(item?.id) === id);
	const locale = newParams?.locale;
	const t = await getTranslations({ locale });

	// 關鍵字可以考慮+
	return {
		title: `${data?.title} | ${t('SEO.websiteName')}`,
		description: data?.description,
	};
}
