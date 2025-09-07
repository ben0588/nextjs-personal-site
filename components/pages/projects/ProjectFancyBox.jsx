'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import useFancybox from '@/hooks/useFancybox';

const ProjectFancyBox = ({ gallery }) => {
	const [fancyboxRef] = useFancybox();

	return (
		<div ref={fancyboxRef} className='grid grid-cols-2 gap-3 md:grid-cols-3'>
			{gallery?.map((item) => (
				<div
					key={item?.src}
					className='flex cursor-pointer flex-col justify-between duration-100 hover:opacity-85'
				>
					<Image
						src={item?.src}
						data-fancybox='gallery'
						alt={item?.alt}
						priority
						width={item?.width} // 原圖實際寬
						height={item?.height} // 原圖實際高
						className='w-full object-cover object-bottom'
						quality={100}
					/>
					<div className='dark:bg-dark-secondary text-secondary-text dark:text-dark-secondary-text bg-neutral-100 py-1 text-center text-sm'>
						{item?.title}
					</div>
				</div>
			))}
		</div>
	);
};

ProjectFancyBox.propTypes = {
	gallery: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			width: PropTypes.number.isRequired,
			height: PropTypes.number.isRequired,
			alt: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default ProjectFancyBox;
