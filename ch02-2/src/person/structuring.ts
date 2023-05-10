import { IPerson, ICompany } from "../interface/IPerson_Icompany"

export function test() {
    let jack: IPerson = {name: "JACK", age: 32},
    jane: IPerson = {name: 'JANE', age: 45};

    let apple: ICompany = {name: "Apple", age: 43},
    ms: ICompany = {name: "Microsoft", age: 44};

    console.log("jack : ", jack);
    console.log("apple : ", apple);

    let {name, age} = jack;
    console.log("name: ", name, "age: ", age);

    let address: any = {
        country: 'korea',
        city: 'Seoul',
        address1: '강남구',
        address2: '신사동 123-456',
        address3: '789길, ABC빌딩 2층'
    }

    const {  country, city, ...detail} = address;

    console.log("detail : ", detail);

    let part1 = { name: 'jane', age: 45, country: 'KR'},
    part2 = [{addr1: '신사동1'}, {addr1: '신사동2'}, {addr1: '신사동3'}],
    part3 = { city: 'Seoul', sex: '남'};
    let merged = {...part1, ...part2, ...part3};
    console.log("merged : ", merged);
}
