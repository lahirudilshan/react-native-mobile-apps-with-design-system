import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    '../../../apps/miniApps/src/**/*.stories.?(ts|tsx|js)', 
    '../../../packages/mobile-design-system/src/**/*.stories.?(ts|tsx|js)',
  ],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};

export default main;
