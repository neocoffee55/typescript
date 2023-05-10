import {classTestA} from './class/testA';
import {classTestB} from './class/testB';
import {testMethodChain} from './class/testMethodChain';
const callIndex = (): void => {
    console.log('index!!!');
    classTestA();
    classTestB();
    testMethodChain();
}

callIndex();