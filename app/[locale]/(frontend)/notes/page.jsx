'use server';

import Image from 'next/image';

import notesImage from '@/public/images/notes/notes_d_2.webp';
import ImageLightbox from '@/components/common/ImageLightbox';
import BreadcrumbNavbar from '@/components/common/BreadcrumbNavbar';

const NotesPage = async () => {
	return (
		<div className='max-container space-y-3'>
			<BreadcrumbNavbar items={[{ name: '個人筆記', path: '/notes' }]} />
			<p>
				<time dateTime='2025-09-06'>2025/9/6</time> 紀錄：未來計畫將筆記內容架設至
				Docusaurus 文件網站，目前仍是個人未公開狀態。
			</p>
			<ul className='ml-7 list-disc'>
				<li>
					HackMD 筆記：{' '}
					<a
						href='https://hackmd.io/@bGZ4YNduQJmEb3VN_d3Vng/SkDQJqmm3'
						target='_blank'
						rel='noopener noreferrer'
						className='link'
					>
						Ben筆記目錄
					</a>
				</li>
			</ul>

			<h2>筆記截圖參考：</h2>
			<div className='relative h-[300px] w-full overflow-hidden sm:h-[500px] md:h-[700px] lg:h-[900px]'>
				<ImageLightbox
					item={{
						src: notesImage.src,
						alt: '個人筆記截圖參考',
						width: 2048,
						height: 1152,
						title: '個人筆記截圖參考',
					}}
				>
					<Image
						src={notesImage.src}
						alt='個人筆記截圖參考'
						priority
						width={2048}
						height={1152}
						className='object-contain'
						sizes='(max-width: 768px) 100vw, 1200px'
					/>
				</ImageLightbox>
			</div>
			<p className='text-secondary my-2 text-sm'>*參考截圖：實際內容以最新公開版本為準</p>
		</div>
	);
};
export default NotesPage;
