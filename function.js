/*Programação Funcional*/

//1. delcaração de função
function soma(a, b) {
    return a + b
}

function somaComRetornoDeMultiplosDados(a, b) {
    return {
        a: a,
        b: b,
        c: a + b
    }
}

// console.log(soma(1, 2))
// console.log(somaComMultiplosRetornos(1, 2))

//2. arrow function
const somaArrow = (a, b) => a + b

//3. função impura
const x = 1;
const somaImpura = (y) => {
    return x + y
}


//4. função pura
const somaPura = (x, y) => {
    return x + y
}

//5. currying
function curryingSumFunction(a, b) {
    return function (c) {
        a + b + c;
    }
}

const curryingSum = (a) => (b) => a + b;

//6. Closure
//o filho consegue chamar os dados que estão dentro do pai
//o pai não consegue chamar os dados que estão dentro do filho
function closure() {
    const arnia = 'arnia';
    const id = 's3928392';

    sam

    function childFunction() {
        const sam = 'sam';

        return arnia + id;
    }
}

//functions as namesapces
function closure2() {
    const arnia = 'arnia'; //publico
    const age = 250; //publico
    const privateArnia = 'private arnia'//privado
    const password = '123560'; //privado
    const hashedPassword = 'Hdsiue90439S-DS--43290-9DSKJDS-3232J';


    //o retorno define os atributos e sub funções que serão publicos
    return {
        arnia: arnia,
        age: age,
        hashedPassword: hashedPassword,
    }
}

const instance = closure2();
instance.age
instance.arnia
instance.hashedPassword
instance.passowrd

//exemplo 3
function calculator() {
    const sum = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mult = (a, b) => a * b;
    const div = (a, b) => a / b;

    return {
        sum: sum,
        sub: sub,
        mult: mult,
        div: div,
    }
}

const calculators = calculator();
calculators.div(10, 2)
calculators.mult(10, 2)
calculators.sub(10, 2)
calculators.sum(10, 2)

//exemplo 4
const arr = [1, 2, 3, 4] //arr.length 4

//recursão é poder chamar uma função dentro dela mesma
function iterateThisArrayRecusive(arr) {
    let counter = 0;
    //1
    //2
    function log() {
        console.log(arr[counter]); //counter -> 0 -> 1
        counter++;
        if (counter < arr.length) {
            log();
        }
    }
    log();
}

iterateThisArrayRecusive(arr);