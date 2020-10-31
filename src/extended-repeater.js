module.exports = function repeater(str, ops) {
  str = `${str}`;

  let addition = ops.addition === undefined ? `` : `${ops.addition}`;
  let separator = ops.separator === undefined ? `+` : `${ops.separator}`;
  let additionSeparator = ops.additionSeparator === undefined ? `|` : `${ops.additionSeparator}`;
  const reps = ops.repeatTimes || 1;
  const additionReps = ops.additionRepeatTimes || 1;

  let repeatedAddition = ``;
  for (let i = 0; i < additionReps; i++) {
    if (i === additionReps - 1) {
      additionSeparator = ``;
    }
    repeatedAddition = `${repeatedAddition}${addition}${additionSeparator}`;
  }

  str = `${str}${repeatedAddition}`;

  let repeatedStr = ``;
  for (let i = 0; i < reps; i++) {
    if (i === reps - 1) {
      separator = ``;
    }
    repeatedStr = `${repeatedStr}${str}${separator}`;
  }
  return repeatedStr;
};
