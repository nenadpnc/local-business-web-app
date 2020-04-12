const CompressionPlugin = require('compression-webpack-plugin');

const nextConfig = {
  distDir: '../_next',
  env: {
    API_URL: 'http://localhost:3001'
  },
  webpack(config, { dev, isServer }) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.css|\.js(\?.*)?$/i
        })
      );
    }
    if (!dev) {
      Object.assign(config, { devtool: 'source-map' });
      if (!isServer) {
        Object.assign(config.optimization.minimizer[0].options, { sourceMap: true });
      }
    }

    return config;
  }
};

module.exports = nextConfig;
