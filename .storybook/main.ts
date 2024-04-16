import type { StorybookConfig } from '@storybook/react-vite'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const config: StorybookConfig = {
  stories: [
    '../lib/**/*.mdx',
    '../lib/**/**/*.mdx',
    '../lib/**/*.stories.@(mdx|js|jsx|ts|tsx)',
    '../lib/**/**/*.stories.@(mdx|js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  env: (config) => ({
    ...config,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY!,
  }),
}
export default config
