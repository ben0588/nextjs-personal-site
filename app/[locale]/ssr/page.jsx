'use server';

import { cookies } from 'next/headers';

const SSRPageTest = async ({ params }) => {
	const { locale } = await params;
	// console.log('當前語系:', locale);

	// const cookieStore = await cookies();
	// const locale = cookieStore.get('NEXT_LOCALE') || 'zh-Hant';
	// console.log('當前語系:', locale.value);

	const response = await fetch(`http://localhost:3000/${locale}/api/test`);
	const result = await response.json();
	console.log('測試語言包', result);

	return <div>SSRPageTest</div>;
};
export default SSRPageTest;
