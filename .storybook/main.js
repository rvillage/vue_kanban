const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
  stories: ['../app/javascript/components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  webpackFinal: async (config, { configType }) => {
    // pug
    config.module.rules.push({
      test: /\.pug$/,
      exclude: /node_modules/,
      oneOf: [{
        resourceQuery: /^\?vue/,
        use: ['pug-plain-loader']
      }]
    });
    // typescript
    config.module.rules.push({
      test: /\.tsx?(\.erb)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: PnpWebpackPlugin.tsLoaderOptions({
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
          })
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    // scss, sass
    config.module.rules.push(
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      }
    );
    // alias
    config.resolve.alias['@components'] = path.resolve(__dirname, '../app/javascript/components');
    config.resolve.alias['@stores'] = path.resolve(__dirname, '../app/javascript/stores');
    config.resolve.alias['@views'] = path.resolve(__dirname, '../app/javascript/views');

    return config;
  }
};
