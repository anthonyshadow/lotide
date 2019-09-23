const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//assertEqual("lighthouse labs", "lighthouse labs");

describe("assertEqual", () => {
  it("returns true if lighthouse labs = lighthouse labs", () => {
    assert.strictEqual(assertEqual("lighthouse labs", "lighthouse labs"));
  });

});