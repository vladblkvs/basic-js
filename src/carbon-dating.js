const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const LOG_OF_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  const floatActivity = parseFloat(sampleActivity);
  const numActivity = parseInt(sampleActivity, 10);
  if (isNaN(numActivity) || (typeof sampleActivity !== `string`) || numActivity <= 0 || numActivity > MODERN_ACTIVITY || floatActivity !== numActivity) {
    return false;
  }
  const k = LOG_OF_2 / HALF_LIFE_PERIOD;
  const t = Math.log2(MODERN_ACTIVITY / numActivity) / k;
  return Math.ceil(t);
};
