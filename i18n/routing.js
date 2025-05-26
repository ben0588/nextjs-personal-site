// i18n/routing.js
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	// 支援的所有語系
	locales: ['zh-Hant', 'en'],

	// 預設語系
	defaultLocale: 'zh-Hant',

	// 始終顯示語言前綴 (默認)
	// localePrefix: 'always',
});
