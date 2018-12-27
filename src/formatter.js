const { NEWLINE, TAB } = require("./constants.js");

const addLists = function(list1, list2) {
  let result = [];
  for (let index = 0; index < list1.length; index++) {
    result.push(list1[index] + list2[index]);
  }
  result[result.length - 1] = "total";
  return result;
};

const replaceEndElement = function(list, newElement) {
  list[list.length] = newElement;
  return list;
};

const formatter = function(counts) {
  let output = counts.map(count => {
    return TAB + count.join(TAB);
  });

  if (counts.length === 1) {
    return output.join(" ");
  }

  let total = TAB + counts.reduce(addLists).join(TAB);
  return replaceEndElement(output, total).join(NEWLINE);
};

module.exports = {
  formatter
};
