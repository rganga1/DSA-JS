// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
capitalize("a short sentence") === "A Short Sentence";
// capitalize('a lazy fox') === 'A Lazy Fox'
// capitalize('look, it is working!') === 'Look, It Is Working!'

function capitalize(str) {
  // let matches = str.match(/[a-z]+?\b/g); // don't work for comma,?

  // let matches = str.split(" ");
  // console.log(matches.map((e) => e.slice(0, 1).toUpperCase() + e.slice(1)));
  // return matches.map((e) => e.slice(0, 1).toUpperCase() + e.slice(1)).join(" ");

  let result = "";
  for (let i in str) {
    console.log(str[i]);
    if (str[i - 1] === " " || i == 0) {
      console.log((result += str[i].toUpperCase()));
    } else result += str[i];
  }
  return result;
}

module.exports = capitalize;