const mockUtf8Reader = function(expectedFilePaths) {
  return function(actualFilePath, actualEncoding, callback) {
    callback("", expectedFilePaths[actualFilePath]);
  };
};

const mockLogger = function(text) {
  return text;
};

const mockReader = function(expectedFilePaths) {
  return {
    readFile: mockUtf8Reader(expectedFilePaths, "utf8")
  };
};

exports.mockReader = mockReader;
exports.mockLogger = mockLogger;
