"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
class calculator {
    constructor(value = 0) {
        this.value = value;
    }
    add(value) {
        this.value += value;
        return this;
    }
    multiply(value) {
        this.value *= value;
        return this;
    }
}
exports.calculator = calculator;
//# sourceMappingURL=methodChain.js.map