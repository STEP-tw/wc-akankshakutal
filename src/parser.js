const { HYPHEN } = require("./constants.js");

const creatObject = function(option, fileNames) {
  return { option, fileNames };
};

const parse = function(userInput) {
  let args = userInput.slice();
  let option = [];
  let options = { l: "line", w: "word", c: "byte" };
  while (args[0].startsWith(HYPHEN)) {
    let type = args[0]
      .slice(1)
      .split("")
      .map(x => options[x]);
    option = option.concat(type);
    args.shift();
  }
  if (!option.length) {
    option = ["line", "word", "byte"];
  }
  return creatObject(option, args);
};

module.exports = {
  parse
};
