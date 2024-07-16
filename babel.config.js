module.exports = {
  presets: ['babel-preset-expo'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
      ],
    },
  },
};