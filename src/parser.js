const { HYPHEN } = require("./constants.js");

const creatObject = function(option, fileNames) {
  return { option, fileNames };
};
const parse = function(userInput) {
  let args = userInput.slice();
  let option = [];

  while (args[0].startsWith(HYPHEN)) {
    option = option.concat(args[0].slice(1).split(""));
    args.shift();
  }

  if (!option.length) {
    option = ["l", "w", "c"];
  }
  return creatObject(option, args);
};

module.exports = {
  parse
};
