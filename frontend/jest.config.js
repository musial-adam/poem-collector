module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // setupTestFrameworkScriptFile: 'jest-enzyme',
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
}
