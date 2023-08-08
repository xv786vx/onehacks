module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    config.images.unoptimized = true;

    return config;
  },
};
