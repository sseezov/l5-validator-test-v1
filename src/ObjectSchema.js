class ObjectSchrema {
    constructor(value){
        this.validations = {};
    }

    shape(newData){
        this.validations = newData;
        return this;
        // или через создание нового экземпляра return new ObjectSchrema(newData);
    }

    isValid(data){
        const dataKeys = Object.keys(data);
        const schemaKeys = Object.keys(this.validations);
    
        if (dataKeys.length !== schemaKeys.length) {
          return false;
        }
    
        for (const key of schemaKeys) {
          const validation = this.validations[key];
          if (!validation.isValid(data[key])) {
            return false;
          }
        }
    
        return true;
    }


}
export default ObjectSchrema;
