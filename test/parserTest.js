const assert = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function() {
  it("should return {option : ['l','w','c'], fileNames: ['File1']} when firstArg is fileNames", function() {
    let actualOutput = parse(["File1"]);
    let expectedOutput = {
      option: ["l", "w", "c"],
      fileNames: ["File1"]
    };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['l'] fileNames: ['File1']} when firstArg is '-l'", function() {
    let actualOutput = parse(["-l", "File1"]);
    let expectedOutput = { option: ["l"], fileNames: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['c'] fileNames: ['File1']} when firstArg is '-c'", function() {
    let actualOutput = parse(["-c", "File1"]);
    let expectedOutput = { option: ["c"], fileNames: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['c'] fileNames: ['File1','File2']} when there are multiple files", function() {
    let actualOutput = parse(["-c", "File1", "File2"]);
    let expectedOutput = { option: ["c"], fileNames: ["File1", "File2"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['c','w'] fileNames: ['File1','File2']} when there are multiple options", function() {
    let actualOutput = parse(["-cw", "File1", "File2"]);
    let expectedOutput = { option: ["c", "w"], fileNames: ["File1", "File2"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['w'] fileNames: ['File1']} when -w is an option", function() {
    let actualOutput = parse(["-w", "File1"]);
    let expectedOutput = { option: ["w"], fileNames: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {option : ['c','w','l'] fileNames: ['File1']} when there are multiple options on diff index", function() {
    let actualOutput = parse(["-c", "-l", "-w", "File1"]);
    let expectedOutput = { option: ["c", "l", "w"], fileNames: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
