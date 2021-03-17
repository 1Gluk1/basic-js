const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (Array.isArray(members) != true) {
    return false
  }

  let result = ""

  for (i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      members[i] = members[i].split(" ").join("").toUpperCase()
    }
    else {
      members[i] = 1
    }
  }

  members = members.sort()

  for (i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      result += members[i][0]
    }
  }
  return result
}