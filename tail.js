const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: ${actual} === ${expected}")
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}")
  }

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
  };


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");