module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(arr => {
    arr.forEach(el => {
      if (el === `^^`) {
        count++;
      }
    });
  });
  return count;
};
