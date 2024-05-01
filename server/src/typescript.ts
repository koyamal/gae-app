interface Foo {
    x: string,
    y: boolean,
};

const foo: Foo = { x: 'x', y: false};
// const foo2 = Foo;

const num: number = 123;
function identity(num: number): number {
    return num;
}

let boolArray: boolean[];
boolArray = [true, false];
boolArray = ["true", false];
boolArray = false;