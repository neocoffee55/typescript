import {readFileSync, readFile} from 'fs';

export function ch07() {
    console.log('read package.json using synchronous api...');
    const buffer:Buffer = readFileSync('./package.json');
    console.log(buffer.toString());
 
    type Err = Error|null;

    readFile('./package.json', (error: Err, buffer: Buffer): void => {
        console.log('read package.json using asynchronous api...');
        console.log(buffer.toString());
    });
}