'use server';

const Footer = async () => {
	const links = [
		{ label: 'GitHub', path: 'https://github.com/ben0588', type: 'link' },
		{ label: 'E-mail', path: 'energy9527z@gmail.com', type: 'email' },
	];

	return (
		<footer className='bg-dark p-10 text-neutral-100'>
			<div className='flex flex-col justify-start gap-1'>
				{links?.map((item) => {
					const hrefPath = item.type == 'email' ? `mailto:${item.path}` : item.path;
					return (
						<div key={item.label} className='text-sm'>
							<span>{item.label}：</span>
							<a href={hrefPath} target='_blank' className='footer-link'>
								{item.path}
							</a>
						</div>
					);
				})}

				<small aria-label='Copyright © 2025 張勝翔(ben0588)' className='text-sm'>
					Copyright © 2025 張勝翔(ben0588)
				</small>
			</div>
		</footer>
	);
};
export default Footer;
