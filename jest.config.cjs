/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.js"],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
