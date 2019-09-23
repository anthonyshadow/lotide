const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');

assertArraysEqual(["lighthouse labs", "bootcamp"], ["lighthouse labs", "bootcamp"]);

describe("assertArraysEqual", () => {
  it("returns true if [1, 2, 3], [1, 2, 3] ", () => {
    assert.deepEqual(([1, 2, 3]), [1, 2, 3]);
  });
});

