const { NEWLINE } = require("../constants.js");

const getLines = function(text) {
  return text.split(NEWLINE);
};

const getWords = function(text) {
  return text.split(/[ \n]+/).filter(x => x);
};

module.exports = {
  getLines,
  getWords
};
