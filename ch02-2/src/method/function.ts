export function testFunction() {
    console.log('testFunction!!!');

    function add1(a, b) {
        return a+b;
    }

    function add2(a:number, b:number): number {
        return a+b;
    }

    console.log("add1 : ", add1(1,2));
    console.log("add2 : ", add2(3,4));

    var add3 = function(a, b) {
        return a+b;
    }

    let add4 = function(a:number, b:number): number {
        return a+b;
    }

    console.log("test1 : ", add3(5,6));
    console.log("test1_1 : ", add4(7,8));

    let printMe: (name: string, age: number) => void = function(n:string, a: number): void {
        console.log(`printMe : ${n} is ${a} !!!`);
    }

    printMe("insu.han", 42);

    type stringNumberFunc = (string, number) => void;

    let f: stringNumberFunc = function(a: string, b: number): void {
        console.log(`f : ${a}, ${b}`);
    }
    let g: stringNumberFunc = function(c: string, d: number): void {
        console.log(`g : ${c}, ${d} d's typeOf `+typeof(d));
    }

    f("JACK", 23);
    g("JANE", 44);

    interface Inameable {
        name: any,
        age?: number
    }

    let n: (o: Inameable) => string = function(o: Inameable) {
        let name = o != undefined ? o.name : 'unknown name';
        let age = o.age;
        return `${name} is ${age}`;
    }

    function getName(o: Inameable) {
        return o.name != undefined ? o.name : 'unknown name';
    }

    console.log(getName({name: undefined}));
    //console.log(getName(undefined));
    console.log(n({name: "TOM"}));
    console.log(n({name: "TOM", age: 25}));

    let add = new Function('a', 'b', 'return a+b');
    let result = add(1,2);
    console.log("result : ", result);

    type Person = {
        name: string,
        age: number
    }

    const makePerson = (name: string, age: number = 10): Person => {
        /*
        const person = {
            name: name,
            age: age
        };
        */
       const person = {name, age};
        return person;
    }

    console.log(makePerson('JACK'));
    console.log(makePerson('Jane', 33));

    const makePerson1 = (name: string, age: number = 10): Person => ({name, age});
    console.log(makePerson1('Jack'));
    console.log(makePerson1('Jane', 33));

    const printPerson = ({name, age}: Person): void =>
        console.log(`name: ${name} and age: ${age}`);

    printPerson({name: 'Jack', age: 10});

    const makeObject = (key, value) => ({[key]: value});
    let test3_1 = makeObject('name', 'Jack');
    let test3_2 = makeObject('firstName', 'Jane');
    console.log(test3_1['name']);
    console.log(test3_2['firstName']);
    console.log(test3_2['name']);

    const printPerson2 = ({name, age}: Person): void => {
        console.log(`name : ${name}, age : ${age}`);
    }

    printPerson2({name: 'Jack', age: 10});

    type keyValueType = {
        [key: string]: string
    }

    const makeObject2 = (key, value):keyValueType => ({[key]: value});
    console.log(makeObject2('name', 'Jack2'));
}
