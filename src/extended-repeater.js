const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newStringStr = '';
  let additionStr = '';

  if (options.hasOwnProperty('separator')) {
    mainSeparator = String(options.separator);
  }
  else {
    mainSeparator = '+';
  };

  if (options.hasOwnProperty('additionSeparator')) {
    addSeparator = String(options.additionSeparator);
  }
  else {
    addSeparator = '|';
  };

  if (options.hasOwnProperty('repeatTimes')) {
    repeatTimes = options.repeatTimes;
  }
  else {
    repeatTimes = 1;
  };

  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  else {
    additionRepeatTimes = 1;
  };
  
  if (options.hasOwnProperty('addition')) {
    additionStr = (String(options.addition) + addSeparator).repeat(additionRepeatTimes).slice(0, -(addSeparator.length));
  }
  else {
    additionStr = '';
  };



  //console.log(str + options);
  //additionStr = (String(options.addition) + addSeparator).repeat(additionRepeatTimes).slice(0, -(addSeparator.length));
  console.log(additionStr);
  newStringStr = (String(str) + additionStr + mainSeparator).repeat(repeatTimes).slice(0, -(mainSeparator.length));
  console.log(newStringStr);
  return newStringStr;

}

module.exports = {
  repeater
};

repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });
repeater('la', { repeatTimes: 3 });