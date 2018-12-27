const {
  defaultFormatter,
  lineFormatter,
  byteFormatter,
  wordFormatter
} = require("./formatter.js");

const { NEWLINE, EMPTY } = require("./constants");

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

const getCounts = function(contents) {
  let lineCount = countLines(contents);
  let wordCount = countWords(contents);
  let byteCount = countBytes(contents);
  return { lineCount, wordCount, byteCount };
};

const wc = function(userInput, fs) {
  let { option, fileNames } = userInput;
  let fileContents = fs.readFileSync(fileNames[0], "utf8");
  let counts = getCounts(fileContents);
  if (includesAll(option)) {
    return defaultFormatter(counts, fileNames[0]);
  }
  if (option.includes("l")) {
    return lineFormatter(counts, fileNames[0]);
  }

  if (option.includes("w")) {
    return wordFormatter(counts, fileNames[0]);
  }

  if (option.includes("c")) {
    return byteFormatter(counts, fileNames[0]);
  }
};

module.exports = {
  wc
};
