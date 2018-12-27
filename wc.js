const fs = require("fs");
const { wc } = require("./src/wcLib.js");
const { parse } = require("./src/parser.js");

const main = function() {
  let userInput = process.argv.slice(2);
  let parsedInput = parse(userInput);
  console.log(wc(parsedInput, fs));
};

main();
