// middleware.js
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
	/*
    過濾指定路徑或者檔案
        - 如果路徑開頭的 `/api`, `/trpc`, `/_next`, `/_vercel` 
        - 如果是包含點的 (e.g. `favicon.ico`)
  */
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
