const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

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
    console.log('✅✅✅Assertion Passed: ${actual} === ${expected}')
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}")
  }
}

//test:

const test1 = map(words, word => word[0]);
console.log(test1);
assertArraysEqual(test1, [ 'g', 'c', 't', 'm', 't' ]);

const test2 = map(words, word => word.toLowerCase());
console.log(test2);
assertArraysEqual(test2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const test3 = map(words, word => `${word} is part of space oddity`);
console.log(test3);
assertArraysEqual(test3, [ 'ground is part of space oddity', 'control is part of space oddity', 'to is part of space oddity', 'major is part of space oddity', 'tom is part of space oddity' ]);
