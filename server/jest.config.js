// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/build/"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};