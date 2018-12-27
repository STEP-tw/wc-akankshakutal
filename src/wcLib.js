const { formatter } = require("./formatter.js");

const { getLines, getWords, getBytes } = require("./utils/string.js");

const countLines = function(lines) {
  return getLines(lines).length - 1;
};

const countWords = function(words) {
  return getWords(words).length;
};

const countBytes = function(bytes) {
  return getBytes(bytes).length;
};

const wcOptionCounter = {
  line: countLines,
  word: countWords,
  byte: countBytes
};

const getCounts = function(contents, option) {
  let counts = ["line", "word", "byte"].filter(x => option.includes(x));
  counts = counts.map(option => wcOptionCounter[option](contents));
  return counts;
};

const getFileCounts = function(fs, option, fileName) {
  let { readFileSync } = fs;
  let contents = readFileSync(fileName, "utf8");
  let fileCounts = getCounts(contents, option);
  fileCounts.push(fileName);
  return fileCounts;
};

const wc = function(userInput, fs) {
  let { option, fileNames } = userInput;
  let counts = fileNames.map(getFileCounts.bind(null, fs, option));
  return formatter(counts);
};

module.exports = {
  wc
};
