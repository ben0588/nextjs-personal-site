'use client';

import SelectGroup from '@/components/common/SelectGroup';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

const ProjectsNavbar = () => {
	const router = useRouter();
	const currentPathname = usePathname();
	const searchParams = useSearchParams();

	function getUrlQuery({ type }) {
		return searchParams.get(type) ?? '';
	}

	function updateUrlQuery({ e, selectType }) {
		const selectValue = e.target.value;
		// 複製當前 URL 參數
		const currentSearchParams = new URLSearchParams(searchParams);

		// 參數不存在就刪除否則就更新指定 Key 參數
		if (!selectValue || selectValue == '') {
			currentSearchParams.delete(selectType);
		} else {
			currentSearchParams.set(selectType, selectValue);
		}

		// 組合新的網址
		const queryString = currentSearchParams.toString();
		const newUrl = queryString ? `${currentPathname}?${queryString}` : currentPathname;

		// 使用 replace 更新網址（不會新增歷史紀錄，需要前一頁功能就改 push）
		router.replace(newUrl, { scroll: false });
	}

	return (
		<div className='item-center flex justify-center gap-3'>
			{/* 專案類型選單 */}
			<SelectGroup
				value={getUrlQuery({ type: 'type' })}
				onChange={(e) => updateUrlQuery({ e, selectType: 'type' })}
				containerClass='w-[130px]'
			>
				<option value='' disabled>
					專案類型
				</option>
				<option value='website'>網站</option>
				<option value='admin'>後臺</option>
				<option value='tool'>小工具</option>
				<option value='test'>技術練習</option>
				<option value='all'>全部專案</option>
			</SelectGroup>

			{/* 技術 */}
			<SelectGroup
				value={getUrlQuery({ type: 'tech' })}
				onChange={(e) => updateUrlQuery({ e, selectType: 'tech' })}
				containerClass='w-[130px]'
			>
				<option value='' disabled>
					技術
				</option>
				<option value='next'>Next.js</option>
				<option value='react'>React.js</option>
				<option value='vue'>Vue.js</option>
				<option value='all'>全部技術</option>
			</SelectGroup>

			{/* 年份 */}
			<SelectGroup
				value={getUrlQuery({ type: 'year' })}
				onChange={(e) => updateUrlQuery({ e, selectType: 'year' })}
				containerClass='w-[130px]'
			>
				<option value='' disabled>
					年份
				</option>
				<option value='2025'>2025</option>
				<option value='2024'>2024</option>
				<option value='2023'>2023</option>
				<option value='2022'>2022</option>
				<option value='all'>全部年份</option>
			</SelectGroup>
		</div>
	);
};
export default ProjectsNavbar;
