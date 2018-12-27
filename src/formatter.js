const { TAB, SPACE, EMPTY } = require("./constants.js");

const defaultFormatter = function(
  { lineCount, wordCount, byteCount },
  fileName
) {
  const counts = [EMPTY, lineCount, wordCount, byteCount];
  return counts.join(TAB) + SPACE + fileName;
};

const lineFormatter = function({ lineCount }, fileName) {
  const count = [EMPTY, lineCount];
  return count.join(TAB) + SPACE + fileName;
};

const wordFormatter = function({ wordCount }, fileName) {
  const count = [EMPTY, wordCount];
  return count.join(TAB) + SPACE + fileName;
};

const byteFormatter = function({ byteCount }, fileName) {
  const count = [EMPTY, byteCount];
  return count.join(TAB) + SPACE + fileName;
};

module.exports = {
  defaultFormatter,
  lineFormatter,
  byteFormatter,
  wordFormatter
};
