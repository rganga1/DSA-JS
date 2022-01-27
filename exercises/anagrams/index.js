// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
anagrams("rail safety", "fairy tales") == true;
anagrams("RAIL! SAFETY!", "fairy tales") == true;
anagrams("Hi there", "Bye there") == false;
anagrams("One one", "One one c") == false; //this throws error for diff lengths
anagrams("One_one", "One one_") == true;

function anagrams(stringA, stringB) {
  // stringA = removePunc(stringA.toLowerCase());
  // stringB = removePunc(stringB.toLowerCase());
  // return compare(object(stringA), object(stringB));

  //2nd sol:
  str1 = stringA.toLowerCase().replace(/[\W_]/g, "").split("").sort().join("");
  str2 = stringB.toLowerCase().replace(/[\W_]/g, "").split("").sort().join("");
  return str1 === str2;
}
//remove punctuation
function removePunc(str) {
  console.log(str.replace(/[\W_]/g, ""));
  return str.replace(/[\W_]/g, "");
}
//creating hashmap like object
function object(str) {
  let obj = {};
  for (let c of str) obj[c] = obj[c] + 1 || 1;
  console.log(obj);
  return obj;
}
//deep comparison of objects
function compare(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let [key, val] of Object.entries(obj1)) {
    if (obj2[key] !== val) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
