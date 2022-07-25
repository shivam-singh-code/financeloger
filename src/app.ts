import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value == 'invoice') {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    } else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);

    }

    list.render(doc, type.value, 'end');

})

// Generics
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne.uid);

// with interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: { name: 'shaun' }
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'SHOPPING LIST',
//     data: ['vegatables', 'bread', 'milk'],
// }

// console.log(docThree, docFour);


// ENUMS
// enum ResourceType { Book, Author, Film, DIRECTOR, PERSON };

// interface Resource<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: ResourceType.Book,
//     data: { name: 'shaun' }
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: ResourceType.PERSON,
//     data: ['vegatables', 'bread', 'milk'],
// }

// console.log(docThree, docFour);


// Tuple


let arr = ['ryu', 35, true];
arr[0] = false;
arr[1] = 'youshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = "asdjad";
tup[1] = 9039;

let student: [string, number];
// student = [324234, 'ken']; //error
student = ['chun-li', 223223];