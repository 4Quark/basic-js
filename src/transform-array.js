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
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  } else {
    let newArray = arr.slice(0);
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] == `--discard-next`) {
        newArray.splice(i, 2);
      } else if (newArray[i] == '--discard-prev') {
        if (i = 0) {
          newArray.slice(1, newArray.length);
        } else {
          newArray.splice(i-1, 2);
        }
      } else if (newArray[i] == `--double-next`) {
        newArray[i] = newArray[i+1];
      } else if (newArray[i] == `--double-prev`) {
        newArray[i] = newArray[i-1];
      }
    }
    return newArray;
  }
}

module.exports = {
  transform
};