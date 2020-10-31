module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = ``;
  members.forEach(el => {
    if (typeof el === `string`) {
      result += el.trim()[0].toUpperCase();
    }
  });
  return result.split(``).sort().join(``);
};
