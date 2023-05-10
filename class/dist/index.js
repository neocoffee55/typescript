"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testA_1 = require("./class/testA");
const testB_1 = require("./class/testB");
const testMethodChain_1 = require("./class/testMethodChain");
const callIndex = () => {
    console.log('index!!!');
    (0, testA_1.classTestA)();
    (0, testB_1.classTestB)();
    (0, testMethodChain_1.testMethodChain)();
};
callIndex();
//# sourceMappingURL=index.js.map