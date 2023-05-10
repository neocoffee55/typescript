import Iperson, { Iperson2 } from './Iperson';
import { makePerson } from './person';
import Chance from 'chance';
import * as Ramda from 'ramda';

const chance = new Chance();

class Person_1 {
    //constructor(public name: string, public age: number, public etc?: any) {}

    name: string
    age: number
    etc?: any
    constructor(name: string, age: number, etc?: any) {
        this.name = name;
        this.age = age;
        this.etc = etc;
    }
}

class Person_2 implements Iperson2 {
    constructor(public name: string, public age: number){
        makePerson(name, age);
    }
}

const test2 = new Person_2('JACK', 44);
console.log('test2 result : ', test2);

let test1 = new Person_1('J', 42, 'test!!!!');

console.log(test1);

let persons: Iperson[] = Ramda.range(0, 2).map((n: number) => {
    console.log('here : ', n);
    return makePerson(chance.name(), chance.age());
});

export function Log() {
    console.log(persons[0].name);
    persons.forEach(function(data, idx) {
        //console.log('data('+ idx +') : '+ `${data.name} to ${data.age}` + ' end !!!');
    });

    persons.forEach((data, idx) => {
        console.log('data('+ idx +') : name is '+ `${data.name} and age is ${data.age}` + ' !!!');
    });
}

const printMe = (me: {name: string, age: number, etc?: boolean}) => {
    const test = me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`;
    console.log(test);
}

printMe({name: 'J', age: 12, etc: true});

// 추상 클래스
abstract class Project {
    public project_name:string|null = null;
    private budget:number = 2000000000; // 예산
  
    // 추상 메서드 정의
    public abstract changeProjectName(name:string): void;
  
    // 실제 메서드 정의
    public calcBudget(): number {
      return this.budget * 2;
    }
  
}

class WebProject extends Project {
    // 추상 클래스에 정의된 추상 메서드 구현
    changeProjectName(name:string): void {
      this.project_name = name;
    }
}

/* 인스턴스 생성 */
let new_project = new WebProject();

console.log("new_project.project_name 1 : ", new_project.project_name); // null

new_project.changeProjectName('CJ 올리브 네트웍스 웹사이트 개편');

console.log("new_project.project_name 2 : ", new_project.project_name); // 'CJ 올리브 네트웍스 웹사이트 개편'

let printMe1: (string, number) => void = 
    function(name: string, age: number): void {
        console.log(name, age);
    };
