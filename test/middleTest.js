const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

describe("middle", () => {
  it("returns [2, 3] when returning the middle of the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});