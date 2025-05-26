// /i18n/navigation.js
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// 用於配置 Next.js 常用導航 API 包裝容器 (新版使用 createNavigation)
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
