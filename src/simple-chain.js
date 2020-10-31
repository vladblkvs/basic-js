const chainMaker = {
  chain: [],
  chainLength: 0,
  getLength() {
    return this.chainLength;
  },
  addLink(value) {
    if (this.chain) {
      if (value === undefined) {
        this.chain.push(`( )`);
      } else {
        this.chain.push(`( ${value} )`);
      }
      this.chainLength++;
    }
    return this;
  },
  removeLink(position) {
    if (this.chain && this.chain.length > 0 && Number.isInteger(position) && !isNaN(position) && this.chain[position] !== undefined) {
      this.chain.splice(position - 1, 1);
      this.chainLength--;
    } else {
      this.chain = [];
      throw new Error(`Invaild value`);
    }
    return this;
  },
  reverseChain() {
    if (this.chain && this.chain.length > 0) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    let finalChain;
    finalChain = this.chain.join(`~~`);

    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
