const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-controls"],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.pcss$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.postcss$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
