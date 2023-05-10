module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@modules': './src/modules',
          '@navigators': './src/navigators',
          '@stores': './src/stores',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
