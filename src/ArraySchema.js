class ArraySchema {
  constructor() {
    this.len = null;
  }

  isValid(data) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (this.len && data.length !== this.len) {
      return false;
    }
    return true;
  }

  length(newData) {
    this.len = newData;
    return this;
  }
}
export default ArraySchema;
