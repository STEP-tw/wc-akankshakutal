const { HYPHEN, EMPTY } = require("./constants.js");

const creatObject = function(options, filePaths) {
  return { options, filePaths };
};

const wcOptions = { l: "line", w: "word", c: "byte" };

const parse = function(userInput) {
  let options = [];
  let index = 0;
  while (userInput[index].startsWith(HYPHEN)) {
    let type = userInput[index]
      .slice(1)
      .split(EMPTY)
      .map(x => wcOptions[x]);
    options = options.concat(type);
    index++;
  }
  if (!options.length) {
    options = ["line", "word", "byte"];
  }
  return creatObject(options, userInput.slice(index));
};

module.exports = {
  parse
};
