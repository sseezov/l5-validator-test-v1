class ArraySchema {
  constructor() {
    this.value = null;
  }

  isValid(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (this.value !== null && this.value !== data.length) {
      return false;
    }
    return true;
  }

  length(subLeng) {
    this.value = subLeng;
    return this;
  }
}
export default ArraySchema;
