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
  ],
  resolver: {
    extraNodeModules: {
      '@monorepo/ui': path.resolve(monorepoRoot, 'packages/ui'),
      '@monorepo/shared': path.resolve(monorepoRoot, 'packages/shared'),
    },
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(monorepoRoot, 'node_modules'),
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
