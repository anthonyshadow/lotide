const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: ${actual} === ${expected}")
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}")
  }
}

const countLetters = function(word) {
  const results = {};
  const removeSpaces = word.split(' ').join('').toLowerCase('');
  for (const letter of removeSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters('Lighthouse in the House.'));
