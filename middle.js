const eqArrays = function (array1, array2) {
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
    console.log("✅✅✅Assertion Passed: ${actual} === ${expected}")
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}")
  }
}

const middle = function(arr) {
  if (arr.length < 3) return [];
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 ?
    arr.slice(mid, mid + 1) : // Odd
    arr.slice(mid - 1, mid + 1); // Even
}


console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]



