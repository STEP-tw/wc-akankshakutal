const { formatter } = require("./formatter.js");

const { NEWLINE, EMPTY } = require("./constants.js");

const countLines = function(text) {
  return text.split(NEWLINE).length - 1;
};

const countWords = function(text) {
  return text.split(/["\n"," "]/).filter(x => x).length;
};

const countBytes = function(text) {
  return text.split(EMPTY).length;
};

const includesAll = function(option) {
  return option.includes("l") && option.includes("w") && option.includes("c");
};

const getCounts = function(contents, option, fileName) {
  let lineCount = countLines(contents);
  let wordCount = countWords(contents);
  let byteCount = countBytes(contents);
  let counts = [];
  if (option.includes("l")) {
    counts.push(lineCount);
  }
  if (option.includes("w")) {
    counts.push(wordCount);
  }
  if (option.includes("c")) {
    counts.push(byteCount);
  }
  counts.push(fileName);
  return counts;
};

const getAllCounts = function(fs, option, fileName) {
  let { readFileSync } = fs;
  let contents = readFileSync(fileName, "utf8");
  let counts = getCounts(contents, option, fileName);
  return counts;
};

const wc = function(userInput, fs) {
  let { option, fileNames } = userInput;
  let counts = fileNames.map(getAllCounts.bind(null, fs, option));
  return formatter(counts);
};

module.exports = {
  wc
};
