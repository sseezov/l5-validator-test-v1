export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  length(num) {
    const validator = (value) => (value !== null ? value.length === num : false);
    return new ArraySchema([...this.validators, validator]);
  }
}
