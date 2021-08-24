const withPlugins = require('next-compose-plugins');

// const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['use-voice-recorder']);

const translateConfig = {
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ["images.pexels.com"],
  },

};

module.exports = withPlugins([
  withTM,
  
], translateConfig);
