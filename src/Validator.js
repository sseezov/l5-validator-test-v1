/* eslint-disable class-methods-use-this */
import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }
}
