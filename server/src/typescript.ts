// interface Foo {
//     x: string,
//     y: boolean,
// };

// const foo: Foo = { x: 'x', y: false};
// const foo2 = Foo;

const num: number = 123;
function identity(num: number): number {
    return num;
}

let boolArray: boolean[];
boolArray = [true, false];
boolArray = ["true", false];
boolArray = false;

interface Name {
    first: string;
    second: string;
}
let nameTemp: Name;
nameTemp = {
    first: 'John',
    second: 'Doe'
};
nameTemp = {
    first: 'John'
}
nameTemp = {
    first: 0,
    second: 'Doe'
}

function log(msg: string): void {
    console.log(msg);
}

function returnRow<T>(items: T[]): T[] {
    return items;
}

let sample = [1, 2, 3];
let returned = returnRow(sample);
returned = [4, 5, 6];
returned = ['1', '2', '3'];

type StrOrNum = string | number;
let sampleSorN: StrOrNum;
sampleSorN = 123;
sampleSorN = '123';
sampleSorN = true;

Math.floor(3);

declare var window: Window;

interface Foo {
    foo: string;
}
function foo(sample: Foo): Foo {
    return sample;
}
function fooFalse(sample: Foo) {
    return { fou: 'Jhon' }
}
console.log(fooFalse({foo: 'Tom'}).foo);

function fooOption(bar: number, foo?: number): number {
    if(foo) {
        return bar ** foo;
    }
    return bar;
}

console.log(fooOption(2, 4));
console.log(fooOption(2));