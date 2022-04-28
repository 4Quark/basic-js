const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  console.log(matrix);
  let catCounter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log("catCounter = " + catCounter + "; elem - " + matrix[i][j]);
      if (matrix[i][j] == '^^') {
        catCounter++;
      }
    }
  }
  console.log("catCounter = " + catCounter);
  return catCounter;
}

module.exports = {
  countCats
};

