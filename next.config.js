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
				hostname: 'nextjs-personal-site-pi.vercel.app',
			},
			{
				hostname: 'animation.lottie',
			},
			{
				hostname: 'localhost',
			},

			{
				hostname: '127.0.0.1', // 測試用
			},
		],
	},
};

module.exports = withNextIntl(nextConfig);
