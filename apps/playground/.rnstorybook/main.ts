import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    // all apps stories defined here
    '../../../apps/miniApps/src/**/*.stories.?(ts|tsx|js)',
    // all packages stories defined here
    '../../../packages/mobile-design-system/src/**/*.stories.?(ts|tsx|js)',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};

export default main;
