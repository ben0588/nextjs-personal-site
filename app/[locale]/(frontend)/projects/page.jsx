'use server';

import PropTypes from 'prop-types';

import projects from '@/data/projects.json';
import ProjectCard from '@/components/pages/projects/ProjectCard';
import ProjectsNavbar from '@/components/pages/projects/ProjectsNavbar';
import BreadcrumbNavbar from '@/components/common/BreadcrumbNavbar';

const ProjectsPage = async ({ searchParams }) => {
	const newSearchParams = await searchParams;
	const type = newSearchParams?.type ?? '';
	const tech = newSearchParams?.tech ?? '';
	const year = newSearchParams?.year ?? '';

	// 依照 type/tech/year 篩選 + 專案年份排序 (新=>舊)
	const filterProject = projects
		.filter((item) => {
			// type:專案類型 (練習專案的不出現在預設選單)
			if (type === '') {
				if (item.type === 'test') return false;
			} else if (type !== 'all') {
				if (item.type !== type) return false;
			}

			// tech:技術類型
			if (tech && tech !== 'all') {
				const hasTech = item.tech.some((techItem) => techItem.key === tech);
				if (!hasTech) return false;
			}

			// year:專案年份
			if (year && year !== 'all') {
				if (String(item.year) !== String(year)) return false;
			}

			// 都符合才顯示
			return true;
		})
		.sort((x, y) => y.year - x.year);

	return (
		<div className='max-container'>
			<BreadcrumbNavbar items={[{ name: '作品集', path: '/projects' }]} />

			<ProjectsNavbar />

			<div className='my-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3'>
				{filterProject?.map((item) => (
					<ProjectCard item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

ProjectsPage.propTypes = {
	searchParams: PropTypes.shape({
		type: PropTypes.string,
		tech: PropTypes.string,
		year: PropTypes.string,
	}),
};

export default ProjectsPage;
