import {arrayLength, isEmpty, range} from './util/utils';
import {Iperson} from './type/types';

export function callArrayTest() {
    let numArray: number[] = [1,2,3];
    let strArray: string[] = ['Hello', 'World'];

    let personArray: Iperson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}];

    console.log(
        arrayLength(numArray),
        arrayLength(strArray),
        arrayLength(personArray),
        isEmpty([]),
        isEmpty([1])
    );

    //제네릭함수의 타입 추론
    const identity = <T>(n: T): T => n;
    
    console.log(
        identity<boolean>(true),
        identity(true)
    );

    //제네릭 함수의 함수 시그니처
    const f = <T>(cb: (arg: T, i?: number) => number): void => {}

    let array1: number[] = [1];
    let array2: number[] = [2,3];
    let mergedArray: number[] = [...array1, ...array2, 4];

    console.log(mergedArray);

    let numbers: number[] = range(1, 9+1);
    console.log(numbers);
}