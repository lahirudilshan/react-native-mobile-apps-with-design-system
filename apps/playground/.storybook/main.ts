import type { StorybookConfig } from '@storybook/react-native-web-vite';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

type ServerStorybookConfig = StorybookConfig & {
  reactNativeServerOptions: { host: string; port: number };
  viteFinal?: (config: any, options: any) => any;
};

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  // Using import.meta.url which is available in ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return join(__dirname, '../../../node_modules', value);
}

const config: ServerStorybookConfig = {
  stories: [
    // all apps stories defined here
    '../../../apps/miniApps/src/**/*.stories.?(ts|tsx|js)',
    // all packages stories defined here
    '../../../packages/mobile-design-system/src/**/*.stories.?(ts|tsx|js)',
  ],
  addons: [
    '@storybook/addon-react-native-server',
    'storybook-addon-deep-controls',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-native-web-vite'),
    options: {},
  },
  reactNativeServerOptions: {
    host: 'localhost',
    port: 6006,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
