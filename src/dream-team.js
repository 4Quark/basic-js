const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.log(members);
  let firstLetters = [];
  if (Array.isArray(members)) {
    members.forEach(elem => {
      if (typeof elem == 'string') {
        firstLetters.push(elem[0].toUpperCase());
        console.log(firstLetters);
      }
    });
    console.log(members);
    firstLetters.sort();
    console.log(firstLetters);
    let dremTeamName = firstLetters.join('');
    console.log(dremTeamName);
    return dremTeamName;
  }
  else return false;
}

module.exports = {
  createDreamTeam
};