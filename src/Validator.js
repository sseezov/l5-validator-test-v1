/* eslint-disable class-methods-use-this */
import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    const validator = (value) => typeof value === 'number';
    return new NumberSchema([validator]);
  }

  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }

  object() {
    return new ObjectSchema();
  }
}
