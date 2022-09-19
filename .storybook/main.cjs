module.exports = {
	stories: [
		{
			directory: '../src/stories/',
			titlePrefix: 'Design System',
			files: '*.stories.mdx'
		},
		{
			directory: '../src/lib/stories',
			titlePrefix: 'Pages',
			files: '*.stories.@(js|jsx|ts|tsx)'
		},
		{
			directory: '../src/lib/components/atoms/stories',
			titlePrefix: 'Components/Atoms',
			files: '*.stories.@(js|jsx|ts|tsx)'
		},
		{
			directory: '../src/lib/components/molecules/stories',
			titlePrefix: 'Components/Molecules',
			files: '*.stories.@(js|jsx|ts|tsx)'
		},
		{
			directory: '../src/lib/components/organisms/stories',
			titlePrefix: 'Components/Organisms',
			files: '*.stories.@(js|jsx|ts|tsx)'
		}
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	features: {
		storyStoreV7: true
	}
};
