const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) == false) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let newArray = arr;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == `--discard-next`) {
      newArray.splice(i, 2)
    } else if (arr[i] == `--discard-prev`) {
      newArray.splice(i-1, 2)
    } else if (arr[i] == `--double-next`) {
      newArray[i] = arr[i+1];
    }
    if (arr[i] == `--double-prev`) {
      newArray[i] = arr[i-1];
    }
  }
return newArray;
}

module.exports = {
  transform
};