'use server';
const ProjectsTags = async ({ tags, containerClass }) => {
	return (
		<div className='w-full'>
			<div
				className={`flex items-center gap-2 overflow-x-auto py-2 whitespace-nowrap ${containerClass ?? 'px-2'}`}
			>
				{tags.map((tag) => (
					<span
						key={tag}
						className='border-primary-border hover:border-primary-border-hover dark:border-dark-primary-border dark:hover:border-dark-primary-border-hover shrink-0 rounded-sm border px-2 py-1 text-sm duration-200'
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};
export default ProjectsTags;
