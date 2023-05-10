import {range, fold, filter, map} from './util/utils';

export const callDeclare = (): void => {
    let numbers: number[] = range(1, 100+1);
    let result = fold(numbers, (result, value) => result + value, 0);
    console.log(result);

    const isOdd = (n:number): boolean => n % 2 != 0;

    result = fold(
        filter(numbers, isOdd),
        (result, value) => result + value,
        0
    );

    console.log(result);

    const isEven = (n: number): boolean => n % 2 == 0;

    result = fold(
        filter(numbers, isEven),
        (result, value) => result + value,
        0
    );

    console.log(result);

    result = fold(
        map(numbers, value => value * value),
        (result, value) => result + value,
        0
    );

    console.log(result);
}
