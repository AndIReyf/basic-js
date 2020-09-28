const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let count = 0

        arr.map(i => Array.isArray(i) ? count = Math.max(this.calculateDepth(i), count) : null)

        return ++count
    }
}
