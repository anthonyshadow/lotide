const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const without = function (arr, remove) {
  for (var i = 0; i < remove.length; i++) {
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] === remove[i]) {
        arr.splice(x,1);
      }
    }
    // console.log("getting rid of matching");
    // array1.splice(x, 1);
    return arr
  }
}
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
