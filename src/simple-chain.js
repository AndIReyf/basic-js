const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (!Number.isFinite(position)
        || position > this.chain.length
        || position < 1 ) {
      this.chain.length = 0;
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const finishChain = this.chain.join('~~')
    this.chain.length = 0
    return finishChain
  }
};

module.exports = chainMaker;
