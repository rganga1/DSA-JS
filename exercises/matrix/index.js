// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
matrix(6);
//  ===  [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let ar = [];
  [...Array(n)].forEach(() => ar.push(Array(n)));
  count = 1;
  let sc = 0,
    sr = 0,
    ec = n - 1,
    er = n - 1;
  while (sc <= ec && sr <= er) {
    for (let col = sc; col <= ec; col++)
      if (ar[sr][col] == undefined) ar[sr][col] = count++;
    sr++;
    sr;
    ec;
    for (let row = sr; row <= er; row++)
      if (ar[row][ec] == undefined) ar[row][ec] = count++;
    ec--;
    for (let col = ec; col >= sc; col--)
      if (ar[er][col] == undefined) ar[er][col] = count++;
    er--;
    for (let row = er; row >= sr; row--)
      if (ar[row][sc] == undefined) ar[row][sc] = count++;
    sc++;
  }
  return ar;
}

module.exports = matrix;
