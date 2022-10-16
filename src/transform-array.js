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
    newArray.forEach((el, i) => {
      if (el == `--discard-next`) {
        newArray[i] = undefined;
        newArray[i + 1] = undefined;
      } else if (el == '--discard-prev') {
        newArray[i] = undefined;
        newArray[i - 1] = undefined;
      } else if (el == `--double-next`) {
        newArray[i] = newArray[i + 1];
      } else if (el == `--double-prev`) {
        newArray[i] = newArray[i - 1];
      }
    });
    return newArray.filter(el => el !== undefined);
  }
}

module.exports = {
  transform
};