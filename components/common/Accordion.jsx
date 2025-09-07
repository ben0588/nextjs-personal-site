'use client';

import { useState } from 'react';
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const Accordion = ({ content }) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);
	const t = useTranslations();
	const prefersReducedMotion = useReducedMotion();

	const handleClick = (clickIndex) => {
		setExpandedIndex((current) => (current === clickIndex ? -1 : clickIndex));
	};

	const transition = prefersReducedMotion
		? { duration: 0 } // 使用者偏好減少動效時，直接關閉動畫
		: { duration: 0.28, ease: [0.2, 0, 0.2, 1] };

	const renderItems = content?.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const contentId = `accordion-content-${index}`;
		const headerId = `accordion-header-${index}`;

		return (
			<div key={item.label} className='w-full overflow-hidden rounded-t-md shadow-md'>
				{/* title */}
				<button
					className={`border-primary-border hover:border-primary-border-hover dark:border-dark-primary-border dark:hover:border-dark-primary-border-hover flex w-full cursor-pointer items-center justify-between rounded-t-md border px-5 py-4 transition-colors ${
						isExpanded
							? 'bg-primary-bg/60 dark:bg-dark/60'
							: 'bg-primary-bg dark:bg-dark'
					}`}
					onClick={() => handleClick(index)}
					type='button'
					aria-expanded={isExpanded}
					aria-controls={contentId}
					id={headerId}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							handleClick(index);
						}
						// 可選：上下鍵在手風琴內移動焦點
						if (e.key === 'ArrowDown') {
							const next = document.getElementById(`accordion-header-${index + 1}`);
							next?.focus();
						}
						if (e.key === 'ArrowUp') {
							const prev = document.getElementById(`accordion-header-${index - 1}`);
							prev?.focus();
						}
					}}
				>
					{/* label */}
					<h5 className='text-left select-none'>{item.label}</h5>

					{/* icon：使用動畫旋轉指示方向 */}
					<motion.span
						aria-hidden='true'
						className='pointer-events-none flex items-center justify-center p-1 text-lg text-gray-500'
						animate={{ rotate: isExpanded ? 90 : 0 }}
						transition={transition}
					>
						{/* 左箭頭 + 旋轉 90 度 = 展開狀態指向下方 */}
						<FaAngleLeft />
					</motion.span>
				</button>

				{/* content（動畫區） */}
				<AnimatePresence initial={false}>
					{isExpanded && (
						<motion.section
							key={contentId}
							id={contentId}
							aria-label='region'
							aria-labelledby={headerId}
							aria-hidden={!isExpanded}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={transition}
							style={{ overflow: 'hidden' }}
							className='bg-primary-bg dark:bg-dark dark:border-dark-primary-border border border-neutral-200'
						>
							<ul className='list-disc py-3 pl-8'>
								{item.content.map((p, pIdx) => (
									<li key={`${item.label}-${pIdx}`} className='mb-2 last:mb-0'>
										{p}
									</li>
								))}
							</ul>
							{/* <div className='text-primary-text dark:text-dark-text mb-5 px-5 pt-4 pb-5 md:text-lg'>
								{item.content.map((p, pIdx) => (
									<p key={`${item.label}-${pIdx}`} className='mb-2 last:mb-0'>
										{p}
									</p>
								))}
							</div> */}
						</motion.section>
					)}
				</AnimatePresence>
			</div>
		);
	});

	return <>{renderItems}</>;
};

Accordion.propTypes = {
	content: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			content: PropTypes.arrayOf(PropTypes.string).isRequired,
		}),
	).isRequired,
};

export default Accordion;
