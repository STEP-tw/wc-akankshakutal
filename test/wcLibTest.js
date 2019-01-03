/* eslint-env mocha */
const assert = require("assert");
const { wc } = require("../src/wcLib.js");
const { mockReader } = require("./helpers.js");

let expectedFilePaths = {};
expectedFilePaths = {
  lines: "A\nB\nC\nD\nE\nF",
  digits: "1\n2\n3\n4\n5\n6\n7\n8\n9\n0",
  Numbers: "one\ntwo\nthree\nfour\nfive\nsix\nseven\neight\nnine\nten"
};

let fs = mockReader(expectedFilePaths);

describe("wc", function() {
  it("should return number of lines,words and characters in given file", function() {
    let actualOutput = wc(
      { options: ["line", "word", "byte"], filePaths: ["lines"] },
      fs
    );
    let expectedOutput = "\t5\t6\t11\tlines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return only lineCount and filePaths 'node wc.js -l file1'", function() {
    let actualOutput = wc({ options: ["line"], filePaths: ["digits"] }, fs);
    let expectedOutput = "\t9\tdigits";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return only byteCount and filePaths 'node wc.js -c file1'", function() {
    let actualOutput = wc({ options: ["byte"], filePaths: ["lines"] }, fs);
    let expectedOutput = "\t11\tlines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return only wordCount and filePaths 'node wc.js -w file1'", function() {
    let actualOutput = wc({ options: ["word"], filePaths: ["lines"] }, fs);
    let expectedOutput = "\t6\tlines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return string with multiple files", function() {
    let actualOutput = wc(
      { options: ["line"], filePaths: ["lines", "digits"] },
      fs
    );
    let expectedOutput = "\t5\tlines\n\t9\tdigits\n\t14\ttotal";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return two options with a file ", function() {
    let actualOutput = wc(
      { options: ["line", "byte"], filePaths: ["lines"] },
      fs
    );
    let expectedOutput = "\t5\t11\tlines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return two options of multiple files", function() {
    let actualOutput = wc(
      { options: ["line", "word"], filePaths: ["lines", "digits"] },
      fs
    );
    let expectedOutput = "\t5\t6\tlines\n\t9\t10\tdigits\n\t14\t16\ttotal";
    assert.equal(actualOutput, expectedOutput);
  });
});
