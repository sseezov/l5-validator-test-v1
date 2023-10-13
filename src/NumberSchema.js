class NumberSchema {
  constructor(option) {
    this.option = option || {};
  }

  isValid(data) {
    const type = typeof data === 'number';
    if (Object.hasOwn(this.option, 'even') && type) {
      return data % 2 === 0;
    }
    if (Object.hasOwn(this.option, 'odd') && type) {
      return data % 2 !== 0;
    }
    return type;
  }

  even() {
    return new NumberSchema({ even: true });
  }

  odd() {
    return new NumberSchema({ odd: true });
  }
}
export default NumberSchema;

// class Validator {
//     constructor() {
//       this.validations = [];
//     }

//     isValid(value) {
//       return this.validations.every(validation => validation(value));
//     }

//     number() {
//       const validator = new Validator();
//       validator.validations.push(value => typeof value === 'number');

//       validator.even = function() {
//         this.validations.push(value => typeof value === 'number' && value % 2 === 0);
//         return this;
//       };

//       validator.odd = function() {
//         this.validations.push(value => typeof value === 'number' && value % 2 !== 0);
//         return this;
//       };

//       return validator;
//     }
//   }

// class NumberSchema {
//     constructor(option) {
//       this.option = option;
//     }

//     isValid(data) {
//       const type = typeof data === 'number';
//       if (this.option === 'even' && type) {
//         return data % 2 === 0;
//       }
//       if (this.option === 'odd' && type) {
//         return data % 2 !== 0;
//       }
//       return type;
//     }

//     even() {
//       return new NumberSchema('even');
//     }

//     odd() {
//       return new NumberSchema('odd');
//     }
//   }
