module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/.next/**",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: ["<rootDir>/src/utils/tests/setup.js"],
  setupFilesAfterEnv: ["<rootDir>/src/utils/tests/setupAfterEnv.js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
