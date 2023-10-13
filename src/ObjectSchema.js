export default class ObjectSchema {
  validators = {};

  shape(fields) {
    this.validators = Object.assign(this.validators, fields);
    return this;
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }

    return keys.every((key) => this.validators[key].isValid(value[key]));
  }
}
