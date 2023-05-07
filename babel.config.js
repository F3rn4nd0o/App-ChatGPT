module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',
          'allowUndefined': false,
        }
      ]
    ],
  };
};
