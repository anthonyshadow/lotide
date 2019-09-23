# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anthonyshadow/lotide`

**Require it:**

`const _ = require('@anthonyshadow/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertArraysEqual(actual, expected)`: compares if arrays are equal

`assertEqual(actual, expected)`: compares if strings are equal

`assertObjectsEqual(actual, expected)`: compares if objects are equal

`countLetters(word)`: counts the total amount of letters of an Object

`countOnly(allItems, itemsToCount)`: counts number of times a value occurs in an array, returns in form of an object

`eqArrays(array1, array2)`: compares if arrays are equal

`eqObjects(object1, object2)`: compares if objects are equal

`flatten(arr)`: takes an array with nested arrays, and prints a new array removing the nested array while keeping the same position in the index.

`findKeyByValue(list, value)`: takes in an object and the value of a key, returns the key of the object that contains the input value.

`findKey(object, callback)`: prints object key that matches the callback functions key finding function

`head(array)`: prtints the first element (index 0) of an array.

`tail(array)`: prints every item from the array except for the first item (index 0).

`middle(array)`: prnts items from the middle index of the input array. If there are an even number of items in the array, it will print the middle two values.

`letterPositions(sentence)`: takes in a sentence and returns an object with the index of every letter within.

`takeUntil(array, callback)`: takes in an array and returns a new array that is filtered by using callback.

`map(array, callback)`: takes in an array and parses through every index of said array with the callback function, printing a new array with the items filtered by the callback.

`without(arr, remove)`: takes in arr and prints the array without the items indicated in remove.