"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callTest = void 0;
const utils_1 = require("./util/utils");
function callTest() {
    let personArray = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];
    console.log(personArray);
    console.log((0, utils_1.split)('h_e_l_l_o', '_'));
    console.log((0, utils_1.join)(['h', 'e', 'l', 'l', 'o'], '_'));
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i = i + 1) {
        const item = numbers[i];
        console.log(item);
    }
    let array = [1, 2, 3, 4, 5];
    let [f, s, t, ...rest] = array;
    console.log(f, s, t, rest);
    let names = ['Jack', 'Jane', 'John'];
    for (let i in names) {
        const name = names[i];
        console.log(`${i} : ${name}`);
    }
    for (let item of names) {
        console.log(item);
    }
}
exports.callTest = callTest;
//# sourceMappingURL=test.js.map