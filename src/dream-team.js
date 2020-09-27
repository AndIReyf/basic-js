const CustomError = require("../extensions/custom-error");

module.exports =function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  return members.filter(i => typeof i === 'string')
      .map(i => i.trim().toUpperCase())
      .map(i => i.slice(0, 1)).sort().join('')
}