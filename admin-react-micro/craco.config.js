const CracoLessPlugin = require('craco-less');
const path = require('path');
const { name } = require('./package.json');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: false,
    watchContentBase: false,
    liveReload: false,
  },
  webpack: {
    configure: {
      output: {
        publicPath: process.env.NODE_ENV === 'development' ? '/' : `/${name}/`,
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`,
        globalObject: 'window',
      },
    },
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // Customize theme, follow https://ant.design/docs/react/customize-theme-cn
            modifyVars: {
              '@ant-prefix': name,
              // '@primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
