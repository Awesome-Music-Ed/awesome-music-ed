// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.awesomemusiced.com',
	base: '/',
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Awesome Music Ed',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Awesome-Music-Ed/awesome-music-ed' }],
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
				Footer: './src/components/overrides/Footer.astro',
			},
			sidebar: [
				{	
					label: 'Home', 
					link: '/'
				},
				{
					label: 'Getting Started',
					link: '/getting-started',
				},
				{
					label: 'Contribution Guidelines',
					link: '/contributions/',
				},
				{
					label: 'Tools',
					items: [
						{
							label: 'Communication & Ops',
							autogenerate: { directory: 'tools/communication_operations' },
							collapsed: true,
						},
						{
							label: 'Design & Media',
							autogenerate: { directory: 'tools/design_media' },
							collapsed: true,
						},
						{
							label: 'Ensemble Management',
							autogenerate: { directory: 'tools/ensemble_management' },
							collapsed: true,
						},
						{
							label: 'Marching Band',
							autogenerate: { directory: 'tools/marching_band' },
							collapsed: true,
						},
						{
							label: 'Notation & Creation',
							autogenerate: { directory: 'tools/notation_creation' },
							collapsed: true,
						},
						{
							label: 'Recruitment',
							autogenerate: { directory: 'tools/recruitment' },
							collapsed: true,
						},
						{
							label: 'Rehearsal Tools',
							autogenerate: { directory: 'tools/rehearsal_tools' },
							collapsed: true,
						},
						{
							label: 'Scores & Analysis',
							autogenerate: { directory: 'tools/scores_analysis' },
							collapsed: true,
						},
						{
							label: 'Websites',
							autogenerate: { directory: 'tools/websites' },
							collapsed: true,
						},
					],
				},
				{
					label: 'Pedagogy',
					items: [
						{
							label: 'Applied Pedagogy',
							autogenerate: { directory: 'pedagogy/applied_pedagogy' },
							collapsed: true,
						},
						{
							label: 'Classroom Resources',
							autogenerate: { directory: 'pedagogy/classroom_resources' },
							collapsed: true,
						},
						{
							label: 'Curriculum & Lessons',
							autogenerate: { directory: 'pedagogy/curriculum_lessons' },
							collapsed: true,
						},
						{
							label: 'Instrumental Pedagogy',
							autogenerate: { directory: 'pedagogy/instrumental_pedagogy' },
							collapsed: true,
						},
						{
							label: 'Vocal Pedagogy',
							autogenerate: { directory: 'pedagogy/vocal_pedagogy' },
							collapsed: true,
						},
					],
				},
				{
					label: 'Books',
					items: [
						{
							label: 'Artistry & Culture',
							autogenerate: { directory: 'books/artistry_culture' },
							collapsed: true,
						},
						{
							label: 'Conducting',
							autogenerate: { directory: 'books/conducting' },
							collapsed: true,
						},
						{
							label: 'History',
							autogenerate: { directory: 'books/history' },
							collapsed: true,
						},
						{
							label: 'Method Books',
							autogenerate: { directory: 'books/method_books' },
							collapsed: true,
						},
						{
							label: 'Professional Growth',
							autogenerate: { directory: 'books/professional_growth' },
							collapsed: true,
						},
					],
				},
				{
					label: 'Podcasts',
					autogenerate: { directory: 'podcasts' },
					collapsed: true,
				},
				{
					label: 'Advocacy',
					autogenerate: { directory: 'advocacy' },
					collapsed: true,
				},
				{
					label: 'Organizations',
					autogenerate: { directory: 'organizations' },
					collapsed: true,
				},
			],
		}),
	],
});
