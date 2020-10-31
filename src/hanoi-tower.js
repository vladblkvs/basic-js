module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsSpeedSec = turnsSpeed / 3600;
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / turnsSpeedSec);
  return { turns, seconds };
};
