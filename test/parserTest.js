const assert = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function() {
  it("should return {option : ['line','word','byte'], fileName: 'File1'} when firstArg is fileName", function() {
    let actualOutput = parse(["File1"]);
    let expectedOutput = {
      option: ["line", "word", "byte"],
      fileName: "File1"
    };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['line'] fileName: 'File1'} when firstArg is '-l'", function() {
    let actualOutput = parse(["-l", "File1"]);
    let expectedOutput = { option: ["line"], fileName: "File1" };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : 'byte' fileName: 'File1'} when firstArg is '-c'", function() {
    let actualOutput = parse(["-c", "File1"]);
    let expectedOutput = { option: ["byte"], fileName: "File1" };
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
