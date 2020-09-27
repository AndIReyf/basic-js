const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!'
    if ({}.toString.call(date) !== "[object Date]") throw new Error()

    const month = date.getMonth()

    if (month === 11 || month < 2) return 'winter'
    if (month < 5) return 'spring'
    if (month < 8) return 'summer'
    if (month > 7 && month < 11) return 'autumn'
};
