module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let depth = 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
        count = 1 + this.calculateDepth(el);
        if (count > depth) {
          depth = count;
        }
      }
    }
    count = 1;
    return depth;
  };
}
