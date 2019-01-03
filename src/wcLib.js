const { formatter } = require("./formatter.js");

const { getLines, getWords } = require("./utils/string.js");

const countLines = function(lines) {
  return getLines(lines).length - 1;
};

const countWords = function(words) {
  return getWords(words).length;
};

const countBytes = function(bytes) {
  return bytes.length;
};

const wcOptionCounter = {
  line: countLines,
  word: countWords,
  byte: countBytes
};

const validOptions = ["line", "word", "byte"];

const getCounts = function(contents, options) {
  let counts = validOptions.filter(x => options.includes(x));
  counts = counts.map(option => wcOptionCounter[option](contents));
  return counts;
};

const getFileCounts = function(contents, options, filePath) {
  let fileCounts = getCounts(contents, options);
  fileCounts.push(filePath);
  return fileCounts;
};

const reader = function(
  result,
  fileName,
  { options, filePaths },
  logger,
  err,
  data
) {
  result.push(getFileCounts(data, options, fileName));
  if (result.length == filePaths.length) {
    formatter(result, filePaths, logger);
  }
};

const wc = function(userInput, fs, logger) {
  let result = [];
  let { filePaths } = userInput;
  for (let filePath of filePaths) {
    let fileReader = reader.bind(null, result, filePath, userInput, logger);
    fs.readFile(filePath, "utf8", fileReader);
  }
  return result;
};

module.exports = {
  wc,
  reader
};
