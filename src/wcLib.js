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
  return (
    option.includes("line") &&
    option.includes("word") &&
    option.includes("byte")
  );
};

const getCounts = function(contents) {
  let lineCount = countLines(contents);
  let wordCount = countWords(contents);
  let byteCount = countBytes(contents);
  return { lineCount, wordCount, byteCount };
};

const wc = function(userInput, fs) {
  let { option, fileName } = userInput;
  let fileContents = fs.readFileSync(fileName, "utf8");
  let counts = getCounts(fileContents);
  if (includesAll(option)) {
    return defaultFormatter(counts, fileName);
  }
  if (option.includes("line")) {
    return lineFormatter(counts, fileName);
  }

  if (option.includes("word")) {
    return wordFormatter(counts, fileName);
  }

  if (option.includes("byte")) {
    return byteFormatter(counts, fileName);
  }
};

module.exports = {
  wc
};
