import {Iperson, ResultType} from './type/types';
import {split, join, pureSort, pureDelete, mergeArray} from './util/utils';

export function callTest() {
    let personArray: Iperson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}];
    console.log(personArray);

    console.log(split('h_e_l_l_o', '_'));
    console.log(join(['h','e','l','l','o'], '_'));

    const numbers: number[] = [1,2,3,4,5];
    for(let i=0; i<numbers.length; i=i+1){
        const item: number = numbers[i];
        console.log(item);
    }

    let array: number[] = [1,2,3,4,5];
    let [f,s,t,...rest] = array;
    console.log(f,s,t,rest);

    let names: string[] = ['Jack', 'Jane', 'John'];
    for(let i in names){
        const name = names[i];
        console.log(`${i} : ${name}`);
    }

    for(let item of names){
        console.log(item);
    }

    //제네릭타입
    const arrayLength = (array) => array.length;
    const arrayLength2 = <T>(array: T[]): number => array.length;
}

export function ch05_3() {
    const multiply = (result, val) => result * val;

    let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    let tempResult = numbers.filter(val => val % 2 != 0).map(val => val * val).reduce(multiply, 1);
    let result = Math.round(Math.sqrt(tempResult));

    console.log(result);
}

export function ch05_4() {
    const oArray = [1,2,3,4];
    const deepCopiedArray = [...oArray];
    deepCopiedArray[0] = 0;
    console.log('oArray, deepCopiedArray : ', oArray, deepCopiedArray);

    let beforeSort = [6,2,9,0];
    const afterSort = pureSort(beforeSort);
    console.log('beforeSort, afterSort : ', beforeSort, afterSort);

    const mixedArray: object[] = [
        [], {name: 'jack'}, {name:'jane', age: 32}, ['description']
    ];

    const objectOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val));
    console.log('mixedArray, objectOnly : ', mixedArray, objectOnly);

    const mergedArray1: string[] = mergeArray(
        ['hello'], ['world']
    );

    console.log('mergedArray1 : ', mergedArray1);

    const mergedArray2: number[] = mergeArray(
        [1], [2,3], [4,5,6], [7,8,9,10]
    );

    console.log('mergedArray2 : ', mergedArray2);

    //let tuple: any[] = [true, 'the result is ok!!!'];

    const array: number[] = [1,2,3,4];
    const tuple: [boolean, string] = [true, 'the result is ok!!!'];

    const doSomething = (): ResultType => {
        try{
            throw new Error('Some error occurs...');
        }catch(e: any){
            return [false, e.message];
        }
    }

    const [result, errorMessage] = doSomething();

    console.log('result, errorMessage : ', result, errorMessage);
}
