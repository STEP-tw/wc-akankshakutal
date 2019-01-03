/* eslint-env mocha */
const assert = require("assert");
const { wc, reader } = require("../src/wcLib.js");
const { mockReader, mockLogger } = require("./helpers.js");

let expectedFilePaths = {};
expectedFilePaths = {
  lines: "A\nB\nC\nD\nE\nF",
  digits: "1\n2\n3\n4\n5\n6\n7\n8\n9\n0",
  Numbers: "one\ntwo\nthree\nfour\nfive\nsix\nseven\neight\nnine\nten"
};

let fs = mockReader(expectedFilePaths, reader);

describe("wc", function() {
  it("should return number of lines,words and characters in given file", function() {
    let actualOutput = wc(
      { options: ["line", "word", "byte"], filePaths: ["lines"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[5, 6, 11, "lines"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return only lineCount and filePaths 'node wc.js -l file1'", function() {
    let actualOutput = wc(
      { options: ["line"], filePaths: ["digits"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[9, "digits"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return only byteCount and filePaths 'node wc.js -c file1'", function() {
    let actualOutput = wc(
      { options: ["byte"], filePaths: ["lines"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[11, "lines"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return only wordCount and filePaths 'node wc.js -w file1'", function() {
    let actualOutput = wc(
      { options: ["word"], filePaths: ["lines"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[6, "lines"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return string with multiple files", function() {
    let actualOutput = wc(
      { options: ["line"], filePaths: ["lines", "digits"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[5, "lines"], [9, "digits"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return two options with a file ", function() {
    let actualOutput = wc(
      { options: ["line", "byte"], filePaths: ["lines"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[5, 11, "lines"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return two options of multiple files", function() {
    let actualOutput = wc(
      { options: ["line", "word"], filePaths: ["lines", "digits"] },
      fs,
      mockLogger
    );
    let expectedOutput = [[5, 6, "lines"], [9, 10, "digits"]];
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
