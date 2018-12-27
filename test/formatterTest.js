const assert = require("assert");
const { formatter } = require("../src/formatter.js");

describe("formatter", function() {
  it("should return string with all options and fileName when array length is 4", function() {
    let counts = [[10, 20, 40, "Lines"]];
    let actualOutput = formatter(counts);
    let expectedOutput = "\t10\t20\t40\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with two counts and fileName", function() {
    let counts = [[20, 40, "Lines"]];
    let actualOutput = formatter(counts);
    let expectedOutput = "\t20\t40\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with only one count with fileName", function() {
    let counts = [[10, "Lines"]];
    let actualOutput = formatter(counts);
    let expectedOutput = "\t10\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with only file", function() {
    let counts = [["Lines"]];
    let actualOutput = formatter(counts);
    let expectedOutput = "\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with multiple files with total", function() {
    let counts = [[40, "Lines"], [50, "digits"]];
    let actualOutput = formatter(counts);
    let expectedOutput = "\t40\tLines\n\t50\tdigits\n\t90\ttotal";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return all counts with multiple files with total", function() {
    let counts = [[40, 50, 100, "Lines"], [50, 60, 200, "digits"]];
    let actualOutput = formatter(counts);
    let expectedOutput =
      "\t40\t50\t100\tLines\n\t50\t60\t200\tdigits\n\t90\t110\t300\ttotal";
    assert.equal(actualOutput, expectedOutput);
  });
});
