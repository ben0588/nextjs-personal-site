'use client';

import { ThemeProvider } from 'next-themes';

export default function ThemeProviders({ children }) {
	return (
		<ThemeProvider
			attribute='data-theme'
			defaultTheme='dark' // 主題色 system=light / dark
			enableSystem={false} // 根據使用者的系統設定決定亮或暗模式，會強制覆蓋 defaultThem，false=不根據
			disableTransitionOnChange // 切換主題時禁止 CSS 過渡功能
			enableColorScheme // 讓 UI 直接修改顏色模式
		>
			{children}
		</ThemeProvider>
	);
}
