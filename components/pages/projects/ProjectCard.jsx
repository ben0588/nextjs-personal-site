'use server';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';

import ProjectsTags from './ProjectsTags';
import SpotlightCard from '@/components/react_bits/SpotlightCard';

const ProjectCard = async ({ item }) => {
	const smallImage = item?.covers?.find((img) => img.type === 'small');

	return (
		<SpotlightCard
			className='custom-spotlight-card bg-primary-bg'
			spotlightColor='rgba(183,19,255,1)'
		>
			<Link
				href={`/projects/${item.title}-${item.id}`}
				className='border-primary-border hover:border-primary-border-hover dark:border-dark-primary-border dark:hover:border-dark-primary-border-hover flex h-full w-full cursor-pointer flex-col items-start justify-between gap-3 rounded-md border p-2 duration-200'
				key={item.id}
			>
				<div className='min-h-[100px] w-full overflow-hidden'>
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
				<div className='space-y-2 p-3'>
					<h2 className='text-primary text-xl font-bold'>{item?.title}</h2>

					<p className='line-clamp-2 overflow-hidden text-sm text-ellipsis'>
						{item?.description}
						{/* <span className='text-secondary-text float-right text-xs font-normal'>
						#{item.year}
					</span> */}
					</p>
					{/* <p className='text-secondary-text dark:text-dark-secondary-text float-right'>
					查看詳情
				</p> */}
				</div>
				<ProjectsTags tags={item?.tags} />
			</Link>
		</SpotlightCard>
	);
};
export default ProjectCard;
