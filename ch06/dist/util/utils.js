"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.createRangeIterable = void 0;
var createRangeIterable = function (from, to) {
    var currentValue = from;
    return {
        next: function () {
            var value = currentValue < to ? currentValue++ : undefined;
            var done = value == undefined;
            return { value: value, done: done };
        }
    };
};
exports.createRangeIterable = createRangeIterable;
function test() {
    return {
        test: function () {
            return "!!!!!";
        }
    };
}
exports.test = test;
//# sourceMappingURL=utils.js.map