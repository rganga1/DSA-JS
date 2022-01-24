// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2); //--> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) //--> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4)// --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10)// --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let ar = [];
  for (let i = 0; i < array.length; i += size) {
    //   ar.push(array.slice(i, i + size));//1st

    //   ar.push(array.splice(0,size)); //2nd but remainder array don't work

    let last = ar[ar.length - 1]; //3rd
    if (!last || last.length === size) ar.push([el]);
    else last.push(el);
  }
  ar;
  return ar;
}

module.exports = chunk;
