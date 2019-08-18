
const calculator = require('./modules/calculator/index.js');

const exp = "150-6*800+300";

let posFix = calculator.InfixToPosFix(exp);
let value = calculator.Calc(exp);

console.log("inFix: ", exp);
console.log("posFix: ",posFix);
console.log("value: ", value);
