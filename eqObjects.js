const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

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
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


module.exports = eqObjects;

//assertEqual((cd, dc));
//assertEqual((cd, cd2));

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

//const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false


//assertEqual((ab, ba));
//assertEqual((ab, abc))

