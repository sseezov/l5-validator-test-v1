class ObjectSchrema {
  constructor() {
    this.validations = {};
  }

  shape(newData) {
    this.validations = newData;
    return this;
    // или через создание нового экземпляра return new ObjectSchrema(newData);
  }

  isValid(data) {
    const dataKeys = Object.keys(data);
    const schemaKeys = Object.keys(this.validations);

    if (dataKeys.length !== schemaKeys.length) {
      return false;
    }

    if (schemaKeys.every((key) => this.validations[key].isValid(data[key]))) {
      return true;
    }
    return false;
  }
}
export default ObjectSchrema;
