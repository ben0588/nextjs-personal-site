'use server';

import CardSwap, { Card } from '@/components/react_bits/CardSwap';

const HeroSection = async () => {
	const heroCards = [
		{ label: '1', value: '2' },
		{ label: '2', value: '4' },
		{ label: '3', value: '5' },
	];

	return (
		<div>
			HeroSection簡短一句：「嗨，我是張勝翔，一名前端工程師，專注於 Next.js 與前後端整合。」
			可搭配一張個人風格圖片（不一定是照片，可以是插畫或抽象背景）。 CTA
			按鈕：查看作品、閱讀筆記。
		</div>
	);
};
export default HeroSection;
