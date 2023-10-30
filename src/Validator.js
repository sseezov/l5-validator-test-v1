import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  // eslint-disable-next-line
  number() {
    const validator = (vlaue) => typeof vlaue === 'number';
    return new NumberSchema([validator]);
  }
  // eslint-disable-next-line
  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }
  // eslint-disable-next-line
  object() {
    return new ObjectSchema();
  }
}
