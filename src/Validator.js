import NumberSchema from "./NumberSchema.js";
import ArraySchema from "./ArraySchema.js";
import ObjectSchema from "./ObjectSchema.js";

export default class Validator {
    number() {
        const validator = (vlaue) => typeof vlaue === 'number';
        return new NumberSchema([validator]);
    }

    array() {
        const validator = (value) => Array.isArray(value);
        return new ArraySchema([validator]);
    }

    object() {
        return new ObjectSchema
    }
}