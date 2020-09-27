const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    const regex = /(^\^{2})/
    const spreadArr = [].concat(...matrix).filter(i => regex.test(i))
    return spreadArr.length !== 0 ? spreadArr.length : 0;
}