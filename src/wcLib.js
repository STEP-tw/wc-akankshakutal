const TAB = "\t";
const NEWLINE = "\n";
const SPACE = " ";

const countLines = function(text) {
  return text.split(NEWLINE).length - 1;
};

const countWords = function(text) {
  return text
    .split(NEWLINE)
    .join(SPACE)
    .split(SPACE)
    .filter(x => x != "").length;
};

const countBytes = function(text) {
  return text.split("").length;
};

const formatOutput = function({ lineCount, wordCount, byteCount, fileName }) {
  return TAB + lineCount + TAB + wordCount + TAB + byteCount + SPACE + fileName;
};

const wc = function(userInput, fs) {
  let { option, fileName } = userInput;
  let fileContents = fs.readFileSync(fileName, "utf8");
  let lineCount = countLines(fileContents);
  let wordCount = countWords(fileContents);
  let byteCount = countBytes(fileContents);

  if (option.length === 3) {
    let counts = { lineCount, wordCount, byteCount, fileName };
    return formatOutput(counts);
  }
  if (option.includes("line")) {
    return TAB + lineCount + SPACE + fileName;
  }
  if (option.includes("byte")) {
    return TAB + byteCount + SPACE + fileName;
  }
};

module.exports = {
  wc
};
