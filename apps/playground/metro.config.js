const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'prod';

// Function to get all directories in a given path
const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// Get all app and package directories
const appsDir = path.resolve(__dirname, '../../apps');
const packagesDir = path.resolve(__dirname, '../../packages');

const apps = getDirectories(appsDir);
const packages = getDirectories(packagesDir);

// Create watchFolders for all apps and packages
const watchFolders = [
  path.resolve(__dirname, '../../node_modules'),
];

// Add all apps to watchFolders
apps.forEach(app => {
  watchFolders.push(path.resolve(appsDir, app));
});

// Add all packages to watchFolders
packages.forEach(pkg => {
  watchFolders.push(path.resolve(packagesDir, pkg));
});

const extraNodeModules = {
  '@babel/runtime': path.resolve(__dirname, '../../node_modules/@babel/runtime'),
};

// Add all packages to extraNodeModules
packages.forEach(pkg => {
  extraNodeModules[pkg] = path.resolve(packagesDir, pkg);
});

const developmentConfig = {
  resolver: {
    nodeModulesPaths: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extraNodeModules,
  },
  watchFolders,
};

const productionConfig = {};
const config = isProduction ? productionConfig : developmentConfig;

const finalConfig = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = withStorybook(finalConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, './.rnstorybook'),
});