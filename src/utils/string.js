const { NEWLINE, EMPTY } = require("../constants.js");

const getLines = function(text) {
  return text.split(NEWLINE);
};

const getWords = function(text) {
  return text.split(/[ \n]+/).filter(x => x);
};

const getBytes = function(text) {
  return text.split(EMPTY);
};

module.exports = {
  getLines,
  getWords,
  getBytes
};
