const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = arr.slice(0);
  newArr.sort((a, b) => {return a - b;});
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == -1) {
      newArr.shift();
    }
  };
  newArr.forEach(el => {
    if (el == -1) {
      newArr.shift();
    }
  });
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == -1) {
      newArr.shift();
    }
  };
  newArr.forEach(el => {
    if (el == -1) {
      newArr.shift();
    }
  });
  let newArr1 = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr1.push(-1);
    } else {
      newArr1.push(newArr[counter]);
      counter++;
    }
  }
  return newArr1;
  // return arr.sort((a, b) => {
  //   if (a == -1 || b == -1) {
  //     return 0;
  //   } else return a - b;
  // });
}

module.exports = {
  sortByHeight
};
