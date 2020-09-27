const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('Not an array')

    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '--discard-next'
            && arr[i] !== '--double-next'
            && arr[i] !== '--double-prev'
            && arr[i] !== '--discard-prev') newArr.push(arr[i])
        if (arr[i - 1] !== undefined
            && arr[i - 2] !== "--discard-next"
            && arr[i] === '--discard-prev') newArr.pop()
        if (arr[i - 1] !== undefined
            && arr[i - 2] !== "--discard-next"
            && arr[i] === '--double-prev') newArr.push(arr[i - 1])
        if (arr[i + 1] !== undefined && arr[i] === '--double-next') newArr.push(arr[i + 1])
        if (arr[i + 1] !== undefined && arr[i] === '--discard-next') i++
    }
    return newArr
}
