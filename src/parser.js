const creatObject = function(option, fileName) {
  return { option, fileName };
};
const parse = function(userInput) {
  let firstArg = userInput[0];
  let secondArg = userInput[1];

  if (firstArg === "-l") {
    return creatObject("line", secondArg);
  }

  if (firstArg === "-c") {
    return creatObject("byte", secondArg);
  }

  return creatObject("all", firstArg);
};

module.exports = {
  parse
};
