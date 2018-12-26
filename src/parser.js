const creatObject = function(option, fileName) {
  return { option, fileName };
};
const parse = function(userInput) {
  let firstArg = userInput[0];
  let secondArg = userInput[1];
  let options = { "-l": "line", "-c": "byte", "-w": "word" };
  if (firstArg.startsWith("-")) {
    return creatObject([options[firstArg]], secondArg);
  }
  return creatObject(["line", "word", "byte"], firstArg);
};

module.exports = {
  parse
};
