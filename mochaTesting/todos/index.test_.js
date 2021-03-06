// callback
const assert = require("assert").strict;
const fs = require("fs");
const Todos = require("./index_");
/* global describe, it */
describe("integration test", function () {
  it("should be able to add and complete TODOs", function () {
    const todos = new Todos();
    assert.strictEqual(todos.list().length, 0);

    todos.add("run code");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: false },
    ]);

    todos.add("test everything");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: false },
      { title: "test everything", completed: false },
    ]);

    todos.complete("run code");
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", completed: true },
      { title: "test everything", completed: false },
    ]);
  });
});

describe("complete()", function () {
  it("should fail if there are no TODOs", function () {
    const todos = new Todos();
    const expectedError = new Error(
      "You have no TODOs stored. Why don't you add one first?"
    );

    assert.throws(() => {
      todos.complete("doesn't exist");
    }, expectedError);
  });
});

describe("saveToFile()", function () {
  it("should save a single TODO", function (done) {
    const todos = new Todos();
    todos.add("save a CSV");
    todos.saveToFile((err) => {
      assert.strictEqual(fs.existsSync("todos.csv"), true);
      const expectedFileContents = "Title,Completed\nsave a CSV,false\n";
      const content = fs.readFileSync("todos.csv").toString();
      assert.strictEqual(content, expectedFileContents);
      done(err);
    });
  });
});
