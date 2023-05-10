import * as R from 'ramda';
import Iperson, { Iperson2 } from './Iperson'

let MAX_AGE = 100

class Person implements Iperson {
    constructor(public name: string, public age: number){}
}

export function makeRandomNumber(max: number = MAX_AGE): number {
    return Math.ceil((Math.random() * max))
}

//const makePerson = (name: string, age:number = makeRandomNumber()) => ({name, age})

export const makePerson = (name: string, age: number = makeRandomNumber()): Iperson => {
    return ({name, age});
}

interface Itest {
    value1: number[]
}

function testVal(val: number): number[] {
    let rtnVal: number[] = R.range(0, val);
    console.log(rtnVal);
    return rtnVal;
}

export const test = (value1: number) => {
    console.log('here1 : ', value1);
    let test = testVal(value1);
    return test;
}