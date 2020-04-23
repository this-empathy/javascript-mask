module.exports = {
    moduleFileExtensions: ['js', 'json'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/utils/**/*.js', '<rootDir>/masks/**/*.js']
  }