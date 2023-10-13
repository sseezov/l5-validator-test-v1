class NumberSchema {
  isValid(data) {
    if (typeof data === 'number') {
      return true;
    }
    return false;
  }
}
export default NumberSchema;
