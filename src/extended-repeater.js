const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    const {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options

    let newStr = ''

    let count = 1
    while (count <= repeatTimes) {
        if (count > 1) newStr += separator
        newStr += str

        let secondCount = 1
        while (secondCount <= additionRepeatTimes) {
            if (secondCount > 1) newStr += additionSeparator
            newStr += addition
            secondCount++
        }
        count++
    }
    return newStr
}
  