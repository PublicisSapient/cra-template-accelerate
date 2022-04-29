// @ts-ignore
module.exports = {
  core: {
    builder: 'webpack5',
  },
  "framework": "@storybook/react",
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
};
