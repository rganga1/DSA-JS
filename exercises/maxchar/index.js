// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"

function maxChar(str) {
  //Bruteforce
  let o = {};
  for (let char of str) {
    //  if(!o.char) o.char=1; //number don't work
    // if(!o[char]) o[char]=1; //o[char] is null initially
    //  else o[char]++;

    o[char] = o[char] + 1 || 1; //1 if first is false ie null
  }
  let max = 0;
  let maxChar = "";
  for (let char in o) {
    if(max<o[char]){
      max=o[char];
      maxChar=char;
    }
  }
  console.log(o);
  console.log(maxChar);
  return maxChar;
}

module.exports = maxChar;
