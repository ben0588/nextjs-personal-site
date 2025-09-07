'use client';

import { Link } from '@/i18n/navigation';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

/**
 * 動態麵包屑 BreadcrumbNavbar
 *
 * @param {Object} props
 * @param {{ name: string, path?: string }[]} props.items - 依序排列的階層。最後一個視為當前頁。
 * @param {'h1'|'text'} props.currentType - 當前頁要用 h1（預設）或純文字。
 * @param {boolean} props.autoPrependHome - 是否自動加上首頁在最前面。
 */
function BreadcrumbNavbar({ items = [], currentType = 'h1', autoPrependHome = true }) {
	// 重新組合選單
	const regroupItems = useMemo(() => {
		const home = { name: '首頁', path: '/' };
		// 過濾掉不存在的參數
		const newItems = (Array.isArray(items) ? items : [])
			.filter(Boolean)
			.filter((i) => typeof i?.name === 'string' && i.name.trim() !== ''); // name 必填;

		// 自動加入首頁，如果第一個 item 不是首頁就替換掉
		if (autoPrependHome) {
			const first = newItems[0];
			if (!first || first.name !== home.name) {
				return [home, ...newItems];
			}
		}
		return newItems;
	}, [items, autoPrependHome]);

	// 最後索引
	const lastIndex = regroupItems.length - 1;

	// 產出 JSON-LD 標記
	const jsonLd = useMemo(() => {
		// 只輸出有 path 的項目（schema 需要 URL）
		const list = regroupItems
			.map((item, idx) => ({
				...(item?.path
					? {
							'@type': 'ListItem',
							position: idx + 1,
							name: item.name,
							item: item.path,
						}
					: null),
			}))
			.filter(Boolean)
			.filter((i) => typeof i?.name === 'string' && i.name.trim() !== ''); // name 必填;

		// 若都沒有 path，就不輸出
		if (!list.length) return null;

		return {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: list,
		};
	}, [regroupItems]);

	// 沒有內容就不顯示
	if (!regroupItems.length) return null;

	return (
		<>
			<nav aria-label='breadcrumb' className='mb-4'>
				<ol className='flex flex-wrap items-center gap-2'>
					{regroupItems.map((item, idx) => {
						const isLast = idx === lastIndex;
						const baseBeforeClass =
							idx === 0
								? "first:pl-0 first:before:content-['']"
								: 'breadcrumbBeforeIcon';

						// 最後一個：當前頁
						if (isLast) {
							if (currentType === 'text') {
								return (
									<li
										key={`${item.name}-${idx}`}
										aria-current='page'
										className={`relative text-neutral-500 ${baseBeforeClass}`}
									>
										<span>{item.name}</span>
									</li>
								);
							}
							// 預設：用 h1 呈現當前頁
							return (
								<li
									key={`${item.name}-${idx}`}
									aria-current='page'
									className={`relative ${baseBeforeClass}`}
								>
									<h1 className='text-neutral-500'>{item.name}</h1>
								</li>
							);
						}

						// 其餘層級：若有 path 則可點，否則純文字
						return (
							<li
								key={`${item.name}-${idx}`}
								className={`relative ${baseBeforeClass}`}
							>
								{item.path ? (
									<Link href={item.path} className='link relative'>
										{item.name}
									</Link>
								) : (
									<span className='text-neutral-500'>{item.name}</span>
								)}
							</li>
						);
					})}
				</ol>
			</nav>

			{jsonLd && (
				<script
					type='application/ld+json'
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			)}
		</>
	);
}

BreadcrumbNavbar.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string, // 當前頁通常不需要 path
		}),
	),
	currentType: PropTypes.oneOf(['h1', 'text']),
	autoPrependHome: PropTypes.bool,
};

export default BreadcrumbNavbar;
