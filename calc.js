/*

1. add()
2. subtract()
3. multiply()
4. divide()

*/

class Calculator {
  constructor() {
    this.total = 0;
  }

  add(num1, num2) {
    this.total = num1 + num2;
    return this.total
  }

  subtract(num1, num2) {
    this.total = num1 - num2;
    return this.total
  }

  multiply(num1, num2) {
    this.total = num1 * num2;
    return this.total
  }

  divide(num1, num2) {
    this.total = num1 / num2;
    return this.total
  }
}

var calc = new Calculator();
console.log("Added: ", calc.add(1, 2));
console.log("Subtraced: ", calc.subtract(1, 2));
console.log("Multiplied: ", calc.multiply(1, 2));
console.log("Divdided: ", calc.divide(1, 2));
// switch (doMath) {
//   case 'add':
//     return num1 + num2
//     break;
//   case 'subtract':
//     return num1 - num2
//     break;
//   case 'mutiply':
//     return num1 * num2
//     break;
//   case 'divide':
//     return num1 / num2
//     break;
//   default:
//     return "Please do this right."
//   break;
// }
