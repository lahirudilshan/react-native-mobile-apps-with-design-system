import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    // All stories in any app
    '../../../apps/**/*.stories.?(ts|tsx|js|jsx)',
    
    // All stories in any package
    '../../../packages/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};

export default main;
