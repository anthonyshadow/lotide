const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(words[1], "Lighthouse");
assertEqual(words[2], "Labs");