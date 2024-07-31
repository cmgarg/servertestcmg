module.exports = {
  apps: [
    {
      name: "app",
      script: "./dist/app.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
