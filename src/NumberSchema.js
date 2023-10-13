export default class NumberSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  even() {
    const validator = (value) => value % 2 === 0;
    return new NumberSchema([...this.validators, validator]);
  }

  odd() {
    const validator = (value) => value % 2 !== 0;
    return new NumberSchema([...this.validators, validator]);
  }
}
