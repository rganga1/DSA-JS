// --- Directions
// Given a string, return a new string with the reversed

// order of characters
// --- Examples
console.log(reverse("apple") === "leppa");
console.log(reverse("hello") === "olleh");
// console.log(reverse("Greetings!") === "!sgniteerG");

// console.log(reverse(54));

function reverse(str) {
  // let s = "";
  // for (var i = str.length - 1; i >= 0; i--) {
  //   s = s + str.charAt(i);
  // }
  // return s;

  // let reversed = "";
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  // return str.split("").reverse().join("");
  // debugger;
  return str.split("").reduce((cum, cur) => cur + cum, "");
}


module.exports = reverse;
