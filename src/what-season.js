module.exports = function getSeason(date) {
  if (!date) {
    return `Unable to determine the time of year!`;
  }
  if (!(date instanceof Date) || !date.getTime()) {
    throw new Error();
  }
  let result = ``;
  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    result = `spring`
  } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
    result = `summer`;
  } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
    result = `autumn`;
  } else if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    result = `winter`;
  }
  return result;
};
