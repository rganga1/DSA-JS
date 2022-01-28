// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
vowels("Hi There!") === 3;
// vowels("Why do you ask?") === 4;
// vowels("Why?") === 0;

function vowels(str) {
  // let ar = str.match(/[aeiou]/gi);
  // let n = ar == null ? 0 : ar.length;
  // return n;

  let count = 0,
    vowels = "aeiou".split("");
  for (let c of str) if (vowels.includes(c.toLowerCase())) count++;
  return count;
}

module.exports = vowels;
