'use client';

const SelectGroup = ({
	id,
	labelText,
	onChange,
	children,
	disabled = false,
	value,
	defaultValue = '',
	containerClass,
}) => {
	return (
		<div className={`${containerClass ?? 'w-[200px]'}`}>
			<label htmlFor={id} className='block text-sm text-neutral-600 dark:text-neutral-300'>
				{labelText}
			</label>
			<div className='relative'>
				<select
					id={id}
					className='dark:bg-dark dark:text-dark-text dark:border-dark-primary-border dark:hover:border-dark-primary-border-hover dark:focus:border-dark-primary-focus-border border-primary-border bg-primary-bg focus:border-primary-focus-border placeholder:text-placeholder hover:border-primary-border-hover dark:focus:dark-primary-focus-border/10 h-10 w-full appearance-none rounded-xl border px-3 pr-10 text-sm text-neutral-900 shadow-sm transition outline-none focus:ring-2 focus:ring-neutral-900/10 disabled:cursor-not-allowed disabled:opacity-60'
					aria-invalid={value === '' ? 'true' : 'false'}
					{...(value !== undefined ? { value } : { defaultValue })}
					disabled={disabled}
					onChange={onChange ? (e) => onChange(e) : null}
				>
					{children}
				</select>
				{/* 下拉箭頭（純裝飾） */}
				<svg
					aria-hidden='true'
					className='pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-400 dark:text-neutral-500'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path d='M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.18l3.71-2.95a.75.75 0 1 1 .94 1.16l-4.2 3.34a.75.75 0 0 1-.94 0l-4.2-3.34a.75.75 0 0 1-.02-1.06z' />
				</svg>
			</div>
		</div>
	);
};
export default SelectGroup;
