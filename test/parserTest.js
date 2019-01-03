/* eslint-env mocha */
const assert = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function() {
  it("should return {options : ['line','word','byte'], filePaths: ['File1']} when firstArg is filePaths", function() {
    let userArgs = ["File1"];
    let actualOutput = parse(userArgs);
    let expectedOutput = {
      options: ["line", "word", "byte"],
      filePaths: ["File1"]
    };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {options : ['line'] filePaths: ['File1']} when firstArg is '-l'", function() {
    let userArgs = ["-l", "File1"];
    let actualOutput = parse(userArgs);
    let expectedOutput = { options: ["line"], filePaths: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {options : ['byte'] filePaths: ['File1']} when firstArg is '-c'", function() {
    let userArgs = ["-c", "File1"];
    let actualOutput = parse(userArgs);
    let expectedOutput = { options: ["byte"], filePaths: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {options : ['byte'] filePaths: ['File1','File2']} when there are multiple files", function() {
    let userArgs = ["-c", "File1", "File2"];
    let actualOutput = parse(userArgs);
    let expectedOutput = { options: ["byte"], filePaths: ["File1", "File2"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {options : ['byte','word'] filePaths: ['File1','File2']} when there are multiple options", function() {
    let userArgs = ["-cw", "File1", "File2"];
    let actualOutput = parse(userArgs);
    let expectedOutput = {
      options: ["byte", "word"],
      filePaths: ["File1", "File2"]
    };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {options : ['word'] filePaths: ['File1']} when -w is an option", function() {
    let userArgs = ["-w", "File1"];
    let actualOutput = parse(userArgs);
    let expectedOutput = { options: ["word"], filePaths: ["File1"] };
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return {options : ['byte','word','line'] filePaths: ['File1']} when there are multiple options on diff index", function() {
    let userArgs = ["-c", "-l", "-w", "File1"];
    let actualOutput = parse(userArgs);
    let expectedOutput = {
      options: ["byte", "line", "word"],
      filePaths: ["File1"]
    };
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
