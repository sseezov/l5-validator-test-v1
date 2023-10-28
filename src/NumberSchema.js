class NumberSchema {
  constructor() {
    this.iseven = false;
    this.isodd = false;
  }

  isValid(data) {
    if (typeof data !== 'number') {
      return false;
    }
    if (this.iseven && data % 2 !== 0) {
      return false;
    }
    if (this.isodd && data % 2 === 0) {
      return false;
    }
    return true;
  }

  even() {
    this.iseven = true;
    return this;
  }

  odd() {
    this.isodd = true;
    return this;
  }
}
export default NumberSchema;
