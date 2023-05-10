import * as P1 from './person/person'
import * as P2 from './person/person2'
import * as P3 from './person/structuring'
import Iperson, { Iperson2 } from '../src/person/Iperson'
import * as method from './method/function'

const callProc = (): void => {
    /*
    let jane: Iperson = U.makePerson('Jane')
    let jack: Iperson = U.makePerson('jack')
    console.log(jane, jack)
    */
    //P1.test(10);
    //P2.Log();
    //P3.test();
    method.testFunction();
}

callProc();