"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMethodChain = void 0;
const methodChain_1 = require("./methodChain");
function testMethodChain() {
    let calc = new methodChain_1.calculator;
    let result = calc.add(1).add(2).multiply(3).multiply(4).value;
    console.log(result);
}
exports.testMethodChain = testMethodChain;
//# sourceMappingURL=testMethodChain.js.map