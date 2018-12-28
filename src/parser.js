const { HYPHEN, EMPTY } = require("./constants.js");
const { findFirstIndexOf } = require("./utils/array.js");

const creatObject = function(options, filePaths) {
  return { options, filePaths };
};

const wcOptions = { l: "line", w: "word", c: "byte" };

const splitOptions = function(options) {
  return options
    .slice(1)
    .split(EMPTY)
    .map(x => wcOptions[x]);
};

const isNotOption = function(userArg) {
  return !userArg.startsWith(HYPHEN);
};

const getoptions = function(acc, element) {
  if (element.startsWith(HYPHEN)) {
    let splitedOptions = splitOptions(element);
    acc = acc.concat(splitedOptions);
  }
  return acc;
};

const parse = function(userInput) {
  let options = [];
  options = userInput.reduce(getoptions, []);
  if (!options.length) {
    options = ["line", "word", "byte"];
  }
  let filesStartsFrom = findFirstIndexOf(userInput, isNotOption);
  return creatObject(options, userInput.slice(filesStartsFrom));
};

module.exports = {
  parse
};
