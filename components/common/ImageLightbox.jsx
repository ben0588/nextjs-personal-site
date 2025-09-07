'use client';

/**
 * 圖片燈箱 ImageLightbox
 *
 * @param {Object} props
 * @param {{ src: string, width: number,height:number,alt:string,title:string }} props.item - 顯示放大的圖片檔案與資訊。
 * @param {Node} props.children - 將外層設定圖片包裹進按鈕裡面。
 */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ImageLightbox = ({ item, children }) => {
	const [openImage, setOpenImage] = useState(false);
	const toggleImageBox = () => setOpenImage(!openImage);

	// 支持 ESC 關閉選單
	useEffect(() => {
		if (!openImage) return;
		const onKey = (e) => e.key === 'Escape' && toggleImageBox();
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [openImage, toggleImageBox]);

	return (
		<>
			<button
				type='button'
				onClick={() => toggleImageBox()}
				aria-label='開啟圖片燈箱效果'
				title='開啟圖片燈箱效果'
				className='cursor-pointer duration-100 hover:opacity-85'
			>
				{children}
			</button>
			{openImage && (
				<div className='fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/80 backdrop-blur-sm'>
					<div className='flex flex-col items-center justify-center gap-3'>
						<div className='h-auto w-full overflow-hidden lg:h-[80%] lg:w-[80%]'>
							<Image
								src={`${process.env.NEXT_PUBLIC_SITE_URL}${item.src}`}
								alt={item?.alt}
								priority
								width={item?.width} // 原圖實際寬
								height={item?.height} // 原圖實際高
								className='w-full object-cover object-bottom'
								quality={100}
							/>
						</div>
						<button
							type='button'
							onClick={() => setOpenImage(false)}
							className='button px-5 py-2'
							aria-label='關閉圖片燈箱效果'
							title='關閉圖片燈箱效果'
						>
							關閉圖片
						</button>
					</div>
				</div>
			)}
		</>
	);
};

ImageLightbox.propTypes = {
	item: PropTypes.shape({
		src: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		alt: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	children: PropTypes.node,
};

export default ImageLightbox;
