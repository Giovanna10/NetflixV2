require("dotenv").config();
const withCss = require("@zeit/next-css");

module.exports = withCss({
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      issuer: {
        test: /.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    'KEY': process.env.KEY,
    'BASE_URL': process.env.BASE_URL,
    'IMAGE_BASE_URL': process.env.IMAGE_BASE_URL
  },
});
