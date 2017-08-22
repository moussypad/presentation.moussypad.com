const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    // exclude: path.resolve(__dirname, 'src/modules/presentation/private/components/overlayMenu/private/__tests__/overlayMenu.test.tsx'),
    loader: require.resolve('ts-loader')
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};