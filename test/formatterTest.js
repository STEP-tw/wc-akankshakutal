/* eslint-env mocha */
const assert = require("assert");
const { formatter } = require("../src/formatter.js");
const { mockLogger } = require("./helpers.js");

describe("formatter", function() {
  it("should return string with all options and filePath when array length is 4", function() {
    let counts = [[10, 20, 40, "Lines"]];
    let filePaths = ["Lines"];
    let actualOutput = formatter(counts, filePaths, mockLogger);
    let expectedOutput = "\t10\t20\t40\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with two counts and filePath", function() {
    let counts = [[20, 40, "Lines"]];
    let filePaths = ["Lines"];
    let actualOutput = formatter(counts, filePaths, mockLogger);
    let expectedOutput = "\t20\t40\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with only one count with filePath", function() {
    let counts = [[10, "Lines"]];
    let filePaths = ["Lines"];
    let actualOutput = formatter(counts, filePaths, mockLogger);
    let expectedOutput = "\t10\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with only file", function() {
    let counts = [["Lines"]];
    let filePaths = ["Lines"];
    let actualOutput = formatter(counts, filePaths, mockLogger);
    let expectedOutput = "\tLines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with multiple files with total", function() {
    let counts = [[40, "Lines"], [50, "digits"]];
    let filePaths = ["Lines", "digits"];
    let actualOutput = formatter(counts, filePaths, mockLogger);
    let expectedOutput = "\t40\tLines\n";
    expectedOutput += "\t50\tdigits\n";
    expectedOutput += "\t90\ttotal";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return all counts with multiple files with total", function() {
    let counts = [[40, 50, 100, "Lines"], [50, 60, 200, "digits"]];
    let filePaths = ["Lines", "digits"];
    let actualOutput = formatter(counts, filePaths, mockLogger);
    let expectedOutput = "\t40\t50\t100\tLines\n";
    expectedOutput += "\t50\t60\t200\tdigits\n";
    expectedOutput += "\t90\t110\t300\ttotal";
    assert.equal(actualOutput, expectedOutput);
  });
});
