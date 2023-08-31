module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  fakeTimers: {
    enableGlobally: true
  },
  globalSetup: '<rootDir>/.jest/timezoneMock.ts',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.scss$': '<rootDir>/src/testHelpers/mocks/style.ts',
    '^.+\\.svg$': '<rootDir>/src/testHelpers/mocks/svg.ts'
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  passWithNoTests: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  transform: {
    '\\.(webp|png|gif|svg|jpg)$':
      '<rootDir>/src/testHelpers/mocks/assetsTransformer.js',
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
