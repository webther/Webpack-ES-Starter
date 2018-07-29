module.exports = {
  moduleFileExtensions: [
    'js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx))',
    '<rootDir>/(**/*.spec.(js|jsx|ts|tsx))'
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/.cache/"
  ]
}