export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\', 'dist/'],
};
