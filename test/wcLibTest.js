const assert = require("assert");
const { wc } = require("../src/wcLib.js");

describe("wc", function() {
  it("should return number of lines,words and characters in given file", function() {
    fs = {
      readFileSync: function(fileName) {
        return "AB\nCD";
      }
    };
    let actualOutput = wc("SmallFile", fs);
    let expectedOutput = "      2      2      5 SmallFile";
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
