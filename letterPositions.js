const letterPositions = function(sentence) {
  const results = {};
  var index = 0;
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index += 1;
  }

  return results;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const eqArrays = function(array1, array2) {
  console.log(array1);
  console.log(array2);
  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  console.log("HERE");

  return true;
}

console.log(letterPositions("hello"));
//console.log([1]);
//console.log(letterPositions("hello").e);
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;