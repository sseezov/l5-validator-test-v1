export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    const validations = this.validators.map((validator) => validator(value));
    return !validations.includes(false);
  }

  length(num) {
    const validator = (value) => (value !== null ? value.length === num : false);
    this.validators.push(validator);
    return this;
  }
}
