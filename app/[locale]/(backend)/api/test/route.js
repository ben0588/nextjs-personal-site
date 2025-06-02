// app/api/test/route.js

import { NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get('locale');

	const t = await getTranslations({ locale });
	return NextResponse.json({ title: t('title') }, { status: 200 });
}
