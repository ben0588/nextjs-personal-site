'use server';

import Accordion from '@/components/common/Accordion';
import BreadcrumbNavbar from '@/components/common/BreadcrumbNavbar';
import LogoLoop from '@/components/react_bits/LogoLoop';
import TextType from '@/components/react_bits/TextType';
import { Link } from '@/i18n/navigation';
import { cookies } from 'next/headers';
import {
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiVuedotjs,
	SiBootstrap,
	SiSass,
	SiJavascript,
	SiRedux,
	SiReactquery,
	SiExpress,
	SiMysql,
	SiDocker,
	SiSonarqube,
} from 'react-icons/si';

const techLogos = [
	{ node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
	{ node: <SiReact />, title: 'React.js', href: 'https://react.dev' },
	{ node: <SiVuedotjs />, title: 'Vue.js', href: 'https://www.https://vuejs.org/' },
	{
		node: <SiJavascript />,
		title: 'Javascript',
		href: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript',
	},
	{
		node: <SiRedux />,
		title: 'Redux',
		href: 'https://redux-toolkit.js.org',
	},
	{
		node: <SiReactquery />,
		title: 'ReactQuery',
		href: 'https://redux-toolkit.js.org/rtk-query/overview',
	},
	{
		node: <SiExpress />,
		title: 'Express.js',
		href: 'https://expressjs.com',
	},
	{
		node: <SiMysql />,
		title: 'Mysql',
		href: 'https://www.mysql.com',
	},
	{
		node: <SiDocker />,
		title: 'Docker',
		href: 'https://www.docker.com/',
	},
	{
		node: <SiSonarqube />,
		title: 'Sonarqube',
		href: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChsSEwiwtpel-sCPAxURmqYDHQEbPcAYACICCAEQABoCdGI&co=1&ase=2&gclid=Cj0KCQjw8eTFBhCXARIsAIkiuOzREnCEgjsRJTGRzB1LBuAWdLuRpNbpzPF7bQG_SHnMZprWYGOx1coaAvnIEALw_wcB&ei=-H26aP2PDIu10-kPzLPi0AY&ohost=www.google.com&cid=CAESVeD218tFUfuWlZZz7lREFT-69xCAWH4lBLEtc1wEEEhnLFipVX1tNG6IoMSKyrugnFB0kamgZ89oPNBMLPPOp46nuZtVYuD3UzWJU_89K-6dtgjmino&category=acrcp_v1_40&sig=AOD64_0w3sAZ3fmZa8JBDXHSWF-t1e9rRw&q&sqi=2&nis=4&adurl&ved=2ahUKEwj965Gl-sCPAxWL2jQHHcyZGGoQ0Qx6BAgXEAE',
	},
	{ node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
	{ node: <SiBootstrap />, title: 'Bootstrap CSS', href: 'https://getbootstrap.com' },
	{ node: <SiSass />, title: 'Sass', href: 'https://sass-lang.com' },
];

const SkillsPage = async () => {
	const cookieStore = await cookies();
	const theme = cookieStore.get('theme')?.value;

	const skillsData = [
		{
			label: '前端',
			content: [
				'Next.js：SSR/ISR、App Router、API Routes、攔截處理(middleware)、狀態管理(Zustand)、多語系 (next-intl)、主題色 (next-themes)。',
				'React.js：SPA、狀態管理(Redux、RTK Query)、表單驗證(React Hook Form)。',
				'Vue.js：Vue Router、Pinia、表單驗證(vee-validate + yup)。',
				'Javascript：熟悉 ES6+ 語法、非同步操作 (Promise/async-await)、事件處理與 DOM 操作。',
			],
		},
		{
			label: '樣式',
			content: [
				'Tailwind：RWD 版型設計、客製化 theme config、暗色模式支援。',
				'Bootstrap：快速排版、Grid 系統、響應式設計。',
				'SCSS：變數、Mixin、巢狀結構、模組化樣式管理。',
				'Styled Components：CSS-in-JS、動態樣式、條件式樣式設定。',
			],
		},
		{
			label: '後端',
			content: [
				'Express：建立 RESTful API、JWT 驗證、Middleware 設計、CORS 設定。',
				'MySQL：資料庫 Schema 設計、基本 CRUD 操作、資料關聯查詢。',
				'Supabase：資料表 CRUD。',
				'JSON-Server：快速模擬 API，支援前端開發測試環境。',
			],
		},

		{
			label: 'SEO',
			content: [
				'網頁標籤結構：語意化標籤 (h1–h6, article, section, nav) 提升搜尋可讀性。',
				'Meta：動態設定標題、描述、Open Graph、Twitter Cards。',
				'Sitemap：自動生成 XML Sitemap，利於搜尋引擎收錄。',
				'Robots：設置 robots.txt 控制爬蟲存取權限。',
				'Google Search Console：提交與檢查收錄狀態，監控 SEO 效果。',
				'JSON-LD：結構化資料標記 (Breadcrumb、Article、Product)。',
			],
		},
		{
			label: '品質',
			content: [
				'SonarQube：程式碼品質檢測，掌握重複程式碼、潛在 Bug 與安全性問題。',
				'ESLint：維持程式碼一致性，避免潛在錯誤，搭配 Prettier 格式化。',
			],
		},
		{
			label: '其他',
			content: [
				'Docker：建立開發與正式環境容器化，撰寫 docker-compose.yml，方便團隊部署。',
				'reCAPTCHA / hCaptcha：表單驗證、防爬蟲機制，支援區域性替代方案。',
				'第三方登入串接：(Apple / Google / Facebook / Line / GitHub) OAuth2 流程整合。',
			],
		},
	];

	return (
		<div className='max-container space-y-5'>
			<BreadcrumbNavbar items={[{ name: '技術', path: '/skills' }]} />

			<TextType
				text={[
					'此處僅列出常見主流技術，更多套件與實作細節請見完整筆記。',
					'完整內容請參考：個人筆記目錄',
				]}
				typingSpeed={75}
				pauseDuration={1500}
				showCursor={true}
				cursorCharacter='|'
				cursorClassName='text-primary-text dark:text-dark-text'
			/>
			{/* <p>
				僅展示常用大眾技術，詳細(套件/實作等等)請參考：{' '}
				<Link href='/notes' className='link'>
					個人筆記目錄
				</Link>
			</p> */}

			{/* 技能區塊 */}
			<div className='space-y-1'>
				<Accordion content={skillsData} />
			</div>

			{/* LOGO LOOP 展示 */}
			<div style={{ height: '60px', position: 'relative', overflow: 'hidden' }}>
				<LogoLoop
					logos={techLogos}
					speed={40}
					direction='left'
					logoHeight={48}
					gap={40}
					pauseOnHover
					scaleOnHover
					fadeOut
					fadeOutColor={`${theme === 'dark' ? '#262626' : '#ffffff'}`} // 有限度的更改顏色，因為SSR切換並不會重新整理頁面，只針對整理後的色系做更新
					ariaLabel='Technology partners'
				/>
			</div>
		</div>
	);
};
export default SkillsPage;
