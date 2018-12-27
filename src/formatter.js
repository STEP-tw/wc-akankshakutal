const { NEWLINE, TAB, EMPTY } = require("./constants.js");

const addLists = function(list1, list2) {
  let result = [];
  for (let index = 0; index < list1.length; index++) {
    result.push(list1[index] + list2[index]);
  }
  return result;
};

const formatter = function(counts) {
  let output = counts.map(count => {
    return TAB + count.join(TAB);
  });
  if (counts.length === 1) {
    return output.join(EMPTY);
  }
  let total = counts.reduce(addLists);
  total.pop();
  total.push("total");
  total = TAB + total.join(TAB);
  return output.concat(total).join(NEWLINE);
};

module.exports = {
  formatter
};
