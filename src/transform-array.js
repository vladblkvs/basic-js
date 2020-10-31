module.exports = function transform(input) {
  if (!input instanceof Array) {
    throw new Error(`Not an array`);
  }

  const output = input.slice();
  const getIndex = function (el) {
    return output.indexOf(el)
  };

  input.forEach((el, i) => {
    if ((el === `--discard-prev` || el === `--double-prev`) && input[i - 1] === undefined) {
      output.splice(0, 1);
    } else if (el === `--discard-prev` && input[i - 2] !== `--discard-next`) {
      output.splice(getIndex(el) - 1, 2);
    } else if (el === `--discard-prev` && input[i - 2] === `--discard-next`) {
      output.splice(getIndex(el), 1);
    } else if (el === `--double-prev` && input[i - 2] !== `--discard-next` && input[i - 2] !== `--double-next` && input[i - 2] !== `--discard-prev`) {
      output.splice(getIndex(el), 1, output[getIndex(el) - 1]);
    } else if (el === `--double-prev` && input[i - 2] === `--discard-prev`) {
      output.splice(getIndex(el), 1, input[i - 1]);
    } else if (el === `--double-prev` && input[i - 2] === `--discard-next`) {
      output.splice(getIndex(el), 1);
    } else if (el === `--double-prev` && input[i - 2] === `--double-next`) {
      output.splice(getIndex(el), 1, input[i - 1]);
    } else if ((el === `--discard-next` || el === `--double-next`) && input[i + 1] === undefined) {
      output.splice(-1, 1);
    } else if (el === `--discard-next`) {
      output.splice(getIndex(el), 2);
    } else if (el === `--double-next`) {
      output.splice(getIndex(el), 1, input[i + 1]);
    }
  });

  return output;
};
