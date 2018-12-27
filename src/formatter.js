const { TAB, SPACE, EMPTY } = require("./constants.js");

const defaultFormatter = function(
  { lineCount, wordCount, byteCount },
  fileNames
) {
  const counts = [EMPTY, lineCount, wordCount, byteCount];
  return counts.join(TAB) + SPACE + fileNames;
};

const lineFormatter = function({ lineCount }, fileNames) {
  const count = [EMPTY, lineCount];
  return count.join(TAB) + SPACE + fileNames;
};

const wordFormatter = function({ wordCount }, fileNames) {
  const count = [EMPTY, wordCount];
  return count.join(TAB) + SPACE + fileNames;
};

const byteFormatter = function({ byteCount }, fileNames) {
  const count = [EMPTY, byteCount];
  return count.join(TAB) + SPACE + fileNames;
};

module.exports = {
  defaultFormatter,
  lineFormatter,
  byteFormatter,
  wordFormatter
};
