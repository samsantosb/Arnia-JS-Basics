/*tipos primitivos*/

const number = 1;
const number2 = new Number(1);

const string = 'Arnia';
const string2 = new String('Arnia');

const boolean = true;
const boolean2 = new Boolean(true);

const nullValue = null; //vazio
const undefinedValue = undefined; //não conhecemos

/*tipos não primitivos*/
const array = [1, 2, 3];
const array2 = new Array(1, 2, 3);

const object = { name: 'Arnia' };
const object2 = new Object({ name: 'Arnia' });

const mapObject = new Map();
mapObject.set('name', 'Arnia');

const mapObject2 = new Map(
    [
        ['name', 'Arnia'],
        ['age', 25],
    ]
)

const setByConstructor = new Set();
setByConstructor.add(1);
setByConstructor.add(2);
setByConstructor.add(1);

console.log(setByConstructor);

const promiseByConstructor = new Promise();

const date = new Date();

const error = new Error();

