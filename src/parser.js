const { HYPHEN, EMPTY } = require("./constants.js");

const creatObject = function(option, fileNames) {
  return { option, fileNames };
};

const parse = function(userInput) {
  let option = [];
  let index = 0;
  const options = { l: "line", w: "word", c: "byte" };
  while (userInput[index].startsWith(HYPHEN)) {
    let type = userInput[index]
      .slice(1)
      .split(EMPTY)
      .map(x => options[x]);
    option = option.concat(type);
    index++;
  }
  if (!option.length) {
    option = ["line", "word", "byte"];
  }
  return creatObject(option, userInput.slice(index));
};

module.exports = {
  parse
};
