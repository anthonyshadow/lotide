const eqArrays = function(array1, array2) {
  if(array1.length === array2.length) {
    for (var i = 0; i < array1.length; i ++) {
      if(array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
      return false;
  }
  return true;
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keysA = Object.keys(object1);
  let keysB = Object.keys(object2);
  if (keysA.length === keysB.length) {
    for (let key of keysA) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key])) {
          return true;
        } else {
          return false;
        }
      }
    };
  } else {
    return false
  }
};

function inspect(input) { return input; }
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

module.exports = assertObjectsEqual;