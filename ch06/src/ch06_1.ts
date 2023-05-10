import { createRangeIterable, test, range, RangeIterable, StringIterable, generator,
rangeGenerator, IterableUsingGenerator, gen12345, random, gen } from "./util/utils";

export function ch06_1() {
    const numArray: number[] = [1,2,3];
    for(let value of numArray){
        console.log(value);
    }

    const strArray: string[] = ['hello', 'world', '!!!'];
    for(let value of strArray){
        console.log(value);
    }

    const iterator = createRangeIterable(1, 3+1);
    while(true){
        const {value, done} = iterator.next();
        if(done){
            break;
        }
        console.log('value : ', value);
    }

    const test1 = test();
    console.log("test1 : ", test1.test1());
    console.log("test2 : ", test1.test2());

    for(let value of range(1, 3+1)) console.log('range value : ', value);

    const iterable = new RangeIterable(1, 3+1);

    for(let value of iterable){
        console.log('iterable value : ', value);
    }

    for(let value of new StringIterable(['hello', 'world', '!!!'])) console.log('StringIterable : ', value);

    for(let value of generator()){
        console.log('generator value : ', value);
    }
    console.log('here 1...');
    const period = 1000;
    let count = 0;
    console.log('program started...');
    const id = setInterval(() => {
        if(count >= 3){
            clearInterval(id);
            console.log('program finished...');
        }else{
            console.log(++count);
        }
    }, period);
    console.log('here 2...');

    let iterator1 = rangeGenerator(1, 3+1);
    while(1){
        const { value, done } = iterator1.next();
        if(done) break;
        console.log('iterator1 value : ', value);
    }

    for(let value of rangeGenerator(4, 6+1)){
        console.log('for value : ', value);
    }
    console.log('here 3...');

    for(let item of new IterableUsingGenerator([1,2,3])){
        console.log('IterableUsingGenerator item1 : ', item);
    }

    for(let item of new IterableUsingGenerator(['hello', 'world', '!!!'])){
        console.log('IterableUsingGenerator item2 : ', item);
    }

    for(let value of gen12345()){
        console.log('value : ', value);
    }

    const iter = gen();
    while(true){
        const { value, done } = iter.next(random(10, 1));
        if(done) break;
        console.log('value : ', value);
    }
}

