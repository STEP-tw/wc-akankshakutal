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

const getFileCounts = function(fs, options, filePath) {
  let { readFileSync } = fs;
  let contents = readFileSync(filePath, "utf8");
  let fileCounts = getCounts(contents, options);
  fileCounts.push(filePath);
  return fileCounts;
};

const wc = function(userInput, fs) {
  let { options, filePaths } = userInput;
  let counts = filePaths.map(getFileCounts.bind(null, fs, options));
  return formatter(counts);
};

module.exports = {
  wc
};
