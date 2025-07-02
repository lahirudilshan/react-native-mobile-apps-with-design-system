const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'prod';

const developmentConfig = {
  resolver: {
    nodeModulesPaths: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extraNodeModules: {
      '@babel/runtime': path.resolve(
        __dirname,
        '../../node_modules/@babel/runtime',
      ),
      'mobile-design-system': path.resolve(
        __dirname,
        '../../packages/mobile-design-system',
      ),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../packages/mobile-design-system'),
  ],
};

const productionConfig = {};
const config = isProduction ? productionConfig : developmentConfig;

module.exports = mergeConfig(getDefaultConfig(__dirname), config);