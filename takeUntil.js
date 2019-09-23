const takeUntil = function(array, callback) {
  let arr = [];
  for (let item of array) {
    if (callback(item)) {
      // if function is true return array
      return arr;
    } else {
      // push item to arr until the function is true
      arr.push(item);
    }
  }
  return arr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



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
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};




//test code

const test1 = takeUntil(data1, x => x < 0);
console.log(test1);
assertArraysEqual(test1, [1, 2, 5, 7, 2]);

const test2 = takeUntil(data2, x => x === ',');
console.log(test2);
assertArraysEqual(test2, ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;