export const createRangeIterable = (from: number, to: number) => {
    let currentValue = from;
    return {
        next(){
            const value = currentValue < to ? currentValue++ : undefined;
            const done = value == undefined;
            return {value, done};
        }
    }
}

//return function test
export function test() {
    return {
        test1() {
            return "!!!!!";
        },
        test2() {
            return "?????";
        }
    }
}

export const range:any = (from: number, to: number) => from < to ? [from, ...range(from + 1, to)] : [];

export class RangeIterable {
    constructor(public from: number, public to: number){}
    [Symbol.iterator](){
        const that = this;
        let currentValue = that.from;
        return{
            next(){
                const value = currentValue < that.to ? currentValue++ : undefined;
                const done = value == undefined;
                return {value, done}
            }
        }
    }
}

export class StringIterable implements Iterable<string>{
    constructor(private strings: string[] = [], private currentIndex: number = 0){}
    [Symbol.iterator](): Iterator<string>{
        const that = this;
        let currentIndex = that.currentIndex, length = that.strings.length;

        const iterator: Iterator<string> = {
            next(): {value: string, done: boolean}{
                const value = currentIndex < length ? that.strings[currentIndex++]: 'undefined';
                const done = value == 'undefined';
                return {value, done}
            }
        }
        return iterator;
    }
}

export function* generator() {
    console.log('generator started...');
    let value = 1;
    while(value < 4){
        yield value++;
    }
    console.log('generator finished...');
}

export function* rangeGenerator(from: number, to: number) {
    let value = from;
    while(value < to){
        yield value++;
    }
}

export class IterableUsingGenerator<T> implements Iterable<T>{
    constructor(private values: T[] = [], private currentIndex: number = 0){}
    
    [Symbol.iterator] = function* (this:any){
        while(this.currentIndex < this.values.length){
            yield this.values[this.currentIndex++];
        }
    }
}

function* gen12() {
    yield 1;
    yield 2;
}

export function* gen12345() {
    yield* gen12();
    yield* [3,4];
    yield 5;
}

export function* gen() {
    let count = 5;
    let select = 0;
    while(count--){
        select = yield `you select ${select}`
    }
}

export const random = (max:number,min:number = 0) => Math.round(Math.random() * (max - min)) + min;
