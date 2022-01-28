// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
steps(4);
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // for (let i = 1; i <= n; i++) {
  //   str1 = [...Array(i).keys()].reduce((c, p) => c + "#", "");
  //   str2 = [...Array(n - i).keys()].reduce((c, p) => c + " ", "");
  //   str3 = str1 + str2;
  //   console.log(str3);
  // }

  // for (let i of [...Array(n).keys()]) {
  //   let stair = "";
  //   for (let j of [...Array(n).keys()]) {
  //     if (j <= i) stair += "#";
  //     else stair += " ";
  //   }
  //   console.log(stair);
  // }

  //Recursion and space ignored
  //Base condition
  if (n == 1) console.log("#");
  else {
    steps(n - 1);
    console.log("#".repeat(n));
  }
}

module.exports = steps;
