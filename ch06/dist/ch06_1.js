"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ch06_1 = void 0;
var utils_1 = require("./util/utils");
function ch06_1() {
    var e_1, _a, e_2, _b;
    var numArray = [1, 2, 3];
    try {
        for (var numArray_1 = __values(numArray), numArray_1_1 = numArray_1.next(); !numArray_1_1.done; numArray_1_1 = numArray_1.next()) {
            var value = numArray_1_1.value;
            console.log(value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (numArray_1_1 && !numArray_1_1.done && (_a = numArray_1.return)) _a.call(numArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var strArray = ['hello', 'world', '!!!'];
    try {
        for (var strArray_1 = __values(strArray), strArray_1_1 = strArray_1.next(); !strArray_1_1.done; strArray_1_1 = strArray_1.next()) {
            var value = strArray_1_1.value;
            console.log(value);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (strArray_1_1 && !strArray_1_1.done && (_b = strArray_1.return)) _b.call(strArray_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var iterator = (0, utils_1.createRangeIterable)(1, 3 + 1);
    while (true) {
        var _c = iterator.next(), value = _c.value, done = _c.done;
        if (done) {
            break;
        }
        console.log('value : ', value);
    }
    var test1 = (0, utils_1.test)();
    console.log("test : ", test1.test());
}
exports.ch06_1 = ch06_1;
//# sourceMappingURL=ch06_1.js.map