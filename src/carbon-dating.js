const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    const p = +sampleActivity
    const k = 0.693 / HALF_LIFE_PERIOD
    if (typeof (p) !== 'number'
        || typeof (sampleActivity) !== 'string'
        || p <= 0
        || p > MODERN_ACTIVITY
        || p.toString() === 'NaN') return false
    return Math.ceil(Math.log(MODERN_ACTIVITY / p) / k)
};
