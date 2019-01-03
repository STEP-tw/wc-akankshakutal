const mockUtf8Reader = function(expectedFilePaths, expectedEncoding) {
  return function(actualFilePath, actualEncoding, callback) {
    if (expectedEncoding === actualEncoding) {
      callback("", expectedFilePaths[actualFilePath]);
    }
  };
};

const mockExistsSync = function(expectedFilePaths) {
  return function(actualfilePath) {
    return actualfilePath in expectedFilePaths;
  };
};

const mockReader = function(expectedFilePaths) {
  return {
    readFile: mockUtf8Reader(expectedFilePaths, "utf8"),
    existsFile: mockExistsSync(expectedFilePaths)
  };
};

const mockLogger = function(text) {
  return text;
};

exports.mockReader = mockReader;
exports.mockLogger = mockLogger;
