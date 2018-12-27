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
      { option: ["l", "w", "c"], fileNames: ["lines"] },
      fs
    );
    let expectedOutput = "\t5\t6\t11\tlines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return only lineCount and fileNames 'node wc.js -l file1'", function() {
    let actualOutput = wc({ option: "l", fileNames: ["digits"] }, fs);
    let expectedOutput = "\t9\tdigits";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return only byteCount and fileNames 'node wc.js -c file1'", function() {
    let actualOutput = wc({ option: "c", fileNames: ["lines"] }, fs);
    let expectedOutput = "\t11\tlines";
    assert.equal(actualOutput, expectedOutput);
  });

  it("should return only wordCount and fileNames 'node wc.js -w file1'", function() {
    let actualOutput = wc({ option: "w", fileNames: ["lines"] }, fs);
    let expectedOutput = "\t6\tlines";
    assert.equal(actualOutput, expectedOutput);
  });
});
