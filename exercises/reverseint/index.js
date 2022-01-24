// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
// reverseInt(15) === 51;
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //Brute force
  // let i1 = 0;
  // for (let i = 0; i < Math.log10(n); i++) {}

  //Methods
  sign = Math.sign(n);
  n *= sign;
  let st = n.toString().split("").reverse().join("");
  return parseInt(st1)*sign;
}

module.exports = reverseInt;
