const assert = require("assert");
const {
  defaultFormatter,
  lineFormatter,
  byteFormatter,
  wordFormatter
} = require("../src/formatter.js");

describe("defaultFormatter", function() {
  it("should return string with all options", function() {
    let counts = { lineCount: 10, wordCount: 20, byteCount: 40 };
    let actualOutput = defaultFormatter(counts, "Lines");
    let expectedOutput = "\t10\t20\t40 Lines";
    assert.equal(actualOutput, expectedOutput);
  });
});

describe("lineFormatter", function() {
  it("should return string with all options", function() {
    let counts = { lineCount: 10, wordCount: 20, byteCount: 40 };
    let actualOutput = lineFormatter(counts, "Lines");
    let expectedOutput = "\t10 Lines";
    assert.equal(actualOutput, expectedOutput);
  });
});

describe("wordFormatter", function() {
  it("should return string with all options", function() {
    let counts = { lineCount: 10, wordCount: 20, byteCount: 40 };
    let actualOutput = wordFormatter(counts, "Lines");
    let expectedOutput = "\t20 Lines";
    assert.equal(actualOutput, expectedOutput);
  });
});

describe("byteFormatter", function() {
  it("should return string with all options", function() {
    let counts = { lineCount: 10, wordCount: 20, byteCount: 40 };
    let actualOutput = byteFormatter(counts, "Lines");
    let expectedOutput = "\t40 Lines";
    assert.equal(actualOutput, expectedOutput);
  });
});
