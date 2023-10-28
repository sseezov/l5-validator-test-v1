class ObjectSchema {
  constructor() {
    this.validators = {};
  }

  isValid(data) {
    const keyData = Object.keys(data);
    const keyVal = Object.keys(this.validators);

    if (keyData.length !== keyVal.length) {
      return false;
    }

    if (!keyVal.every((item) => this.validators[item].isValid(data[item]))) {
      return false;
    }

    return true;
  }

  shape(newVal) {
    this.validators = newVal;
    return this;
  }

  // everyElements = (data) => {
  //     const keyVal = Object.keys(this.validators);
  //     const arrRes = [];
  //     for(const item of keyVal){
  //        arrRes.push(this.validators[item].isValid(data[item]));
  //     }
  //     return !arrRes.includes(false);
  // }

  //  keyVal.every((item) => this.validations[item].isValid(data[item]))
  //  [id, basket].every((id) => v.number().odd()[id].isValid(11))
  //  [id, basket].every((basket) => v.array().length(3)[basket].isValid(['potatos', 'tomatos', 'oranges']))
}
export default ObjectSchema;
