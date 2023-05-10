export const split = (str: string, delim: string = ''): string[] => str.split(delim);

export const join = (strArray: string[], delim: string = ''): string => strArray.join(delim);

export const arrayLength = <T>(array: T[]): number => array.length;

export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;

export const range = (from: number, to: number): number[] => from < to ? [from, ...range(from+1, to)] : [];

export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
    let result: T = initValue;
    for(let i=0; i<array.length; ++i){
        const value = array[i];
        result = callback(result, value);
    }

    return result;
}

export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
    let result: T[] = [];
    for(let index: number=0; index < array.length; ++index){
        const value = array[index];
        if(callback(value, index)){
            result = [...result, value];
        }
    }

    return result;
}

export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
    let result: Q[] = [];
    for(let index=0; index < array.length; ++index){
        const value = array[index];
        result = [...result, callback(value, index)];
    }

    return result;
}

export const pureSort = <T>(array: readonly T[]): T[] => {
    let deepCopied = [...array];
    return deepCopied.sort();
}

export const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) => boolean): T[] => array.filter((val, index) => cb(val, index) == false);

export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
    let result: T[] = [];
    for(let index=0; index < arrays.length; index++){
        const array: T[] = arrays[index];
        result = [...result, ...array];
    }
    return result;
}