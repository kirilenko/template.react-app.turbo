import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  addons: [
    { name: '@storybook/addon-links', options: {} },
    { name: '@storybook/addon-essentials', options: {} },
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/**/*.story.tsx'],
}

export default config
