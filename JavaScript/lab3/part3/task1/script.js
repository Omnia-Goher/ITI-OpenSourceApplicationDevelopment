/*
1 - Object.assign()
static method copies all properties from one or more source objects to a target object.
It returns the modified target object. 
Object.assign(target, ...sources)
*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const obj1 = Object.assign(target, source);
console.log(obj1);

/*
2 - Object.create()
static method creates a new object, using an existing object as the prototype of the newly created object.
Object.create(proto)
Object.create(proto, propertiesObject)
*/

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person);
me.name = 'Omnia';
me.isHuman = true;
me.printIntroduction();

/*
3 - Object.defineProperty()
static method defines a new property directly on an object, 
or modifies an existing property on an object, and returns the object.
Object.defineProperty(obj, prop, descriptor)
*/

const obj2 = {};
Object.defineProperty(obj1, 'property', {
    value: 42, //The value associated with the property. Can be any valid JavaScript value (number, object, function, etc.). Defaults to undefined
    writable: false //true if the value associated with the property may be changed with an assignment operator. Defaults to false.
});
obj2.property = 77;
console.log(obj2.property);

/*
4 - Object.entries()
static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
Object.entries(obj)
*/

const obj3 = {
    name: 'Omnia',
    age: 23
};
for (const [key, value] of Object.entries(obj3)) {
    console.log(`${key}: ${value}`);
}

/*
5 - Object.freeze()
static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable
and non-configurable. A frozen object can no longer be changed.
freeze() returns the same object that was passed in.
Object.freeze(obj)
*/

const obj4 = {
    prop: 42
};
Object.freeze(obj4);
obj4.prop = 33;
console.log(obj4.prop);

/*
6 - Object.fromEntries()
static method transforms a list of key-value pairs into an object.
Object.fromEntries(iterable)
*/

const people = new Map([
    ['omnia', 23],
    ['eman', 20]
]);
const obj5 = Object.fromEntries(people);
console.log(obj5);

/*
7 - Object.getOwnPropertyNames()
static method returns an array of all properties.
Object.getOwnPropertyNames(obj)
*/

const obj6 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(Object.getOwnPropertyNames(obj6));

/*
8 - Object.seal()
static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable.
A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed,
their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned.
Values of existing properties can still be changed as long as they are writable. 
Object.seal(obj)
*/

const obj7 = {
    property1: 42
};
Object.seal(obj7);
obj7.property1 = 33;
console.log(obj7.property1);
delete obj7.property1; // Cannot delete when sealed
console.log(obj7.property1);

/*
9 - Object.isSealed()
static method determines if an object is sealed.
Object.isSealed(obj)
*/

console.log(Object.isSealed(obj7));
const obj8 = {
    property1: 42
};
console.log(Object.isSealed(obj8));

/*
10 - Object.getOwnPropertySymbols()
static method returns an array of all symbol properties found directly upon a given object.
Object.getOwnPropertySymbols(obj)
*/

const obj9 = {};
const a = Symbol('a');
const b = Symbol.for('b');
obj9[a] = 'localSymbol';
obj9[b] = 'globalSymbol';
const objectSymbols = Object.getOwnPropertySymbols(obj9);
console.log(objectSymbols.length); 
console.log(objectSymbols);        
console.log(objectSymbols[0]);