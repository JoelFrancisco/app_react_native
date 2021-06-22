module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./"],
          "extensions": [
            ".jsx",
            ".js",
            ".json"
          ],
          alias: {
            "@pages": "./src/pages",
            "@components": "./src/components",
            "@assets": "./assets",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
          }
        }
      ]
    ]
  };
};
