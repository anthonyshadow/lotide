const tail = require('../tail');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
/*
assertEqual(words.length, 3);
assertEqual(words[1], "Lighthouse");
assertEqual(words[2], "Labs");
*/

describe("tail", () => {
  it("returns [2, 3] when calculaing the array without the first index", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});