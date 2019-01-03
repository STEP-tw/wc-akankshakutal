const { NEWLINE, TAB, EMPTY } = require("./constants.js");
const { addLists } = require("./utils/array.js");

const arrangeCounts = function(counts, filePaths) {
  return filePaths.map(filePath => {
    for (let count of counts) {
      if (count.includes(filePath)) return count;
    }
  });
};
const formatter = function(counts, filePaths) {
  counts = arrangeCounts(counts, filePaths);
  let output = counts.map(count => {
    return TAB + count.join(TAB);
  });
  if (counts.length === 1) {
    return output.join(EMPTY);
  }
  let total = counts.reduce(addLists);
  let length = total.length;
  total[length - 1] = "total";
  total = TAB + total.join(TAB);
  return output.concat(total).join(NEWLINE);
};

module.exports = {
  formatter
};
