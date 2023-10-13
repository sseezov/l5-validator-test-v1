export default class ObjectSchema {
  validators = {};

  shape(fields) {
    // eslint-disable-next-line
    Object.keys(fields).map((key) => this.validators[key] = fields[key]);
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
