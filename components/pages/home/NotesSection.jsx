'use server';

import { Link } from '@/i18n/navigation';

const NotesSection = async () => {
	return (
		<section className='max-container flex flex-col gap-3'>
			<h2>個人筆記</h2>
			<p>
				我也會紀錄學習過程與心得，並且對於新技術保持樂觀探索，
				<a
					href='https://hackmd.io/@bGZ4YNduQJmEb3VN_d3Vng/SkDQJqmm3'
					target='_blank'
					rel='noopener noreferrer'
					className='link'
				>
					前往筆記目錄。
				</a>
			</p>
		</section>
	);
};
export default NotesSection;
