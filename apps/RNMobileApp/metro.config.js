const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

/**
 * Metro configuration for monorepo support
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  projectRoot,
  watchFolders: [
    projectRoot,
    path.resolve(monorepoRoot, 'packages/ui'),
    path.resolve(monorepoRoot, 'packages/shared'),
    path.resolve(monorepoRoot, 'node_modules'),
  ],
  resolver: {
    extraNodeModules: {
      '@monorepo/ui': path.resolve(monorepoRoot, 'packages/ui'),
      '@monorepo/shared': path.resolve(monorepoRoot, 'packages/shared'),
      'react': path.resolve(monorepoRoot, 'node_modules/react'),
      'react-native': path.resolve(monorepoRoot, 'node_modules/react-native'),
    },
    nodeModulesPaths: [
      path.resolve(monorepoRoot, 'node_modules'),
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);