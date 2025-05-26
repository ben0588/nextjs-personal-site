const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				hostname: 'beauty.kinglyrobot.com',
			},
			{
				hostname: 'wiki.kinglyrobot.com',
			},
			{
				hostname: 'images.unsplash.com',
			},
			{
				hostname: 'plus.unsplash.com',
			},
			{
				hostname: 'localhost',
			},
			{
				hostname: 'shikimori.one', // 測試用
			},
			{
				hostname: '127.0.0.1', // 測試用
			},
		],
	},
};

module.exports = withNextIntl(nextConfig);
