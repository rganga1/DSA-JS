// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
// palindrome("abba") === true;
console.log(palindrome("abba") === true);
//   palindrome("abcdefg") === false
// console.log(palindrome("abcdefg") === false);

function palindrome(str) {
  // let str1 = str.split("").reverse().join("");
  // return str1 === str;

  let ar1 = str.split("");
  return ar1.every((c, i) => c == ar1[ar1.length - i - 1]);
}

module.exports = palindrome;
