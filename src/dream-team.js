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

  let firstLetters = [];
  if (Array.isArray(members)) {
    members.forEach(elem => {
      
      if (typeof elem == 'string') {
        elem = elem.trim();
        console.log(elem);
        firstLetters.push(elem[0].toUpperCase());
      }
    });
    firstLetters.sort();
    let dremTeamName = firstLetters.join('');
    return dremTeamName;
  }
  else return false;
}

module.exports = {
  createDreamTeam
};

createDreamTeam(['        Matt', ' Ann', 'Dmitry', 'Max']) 
createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]);