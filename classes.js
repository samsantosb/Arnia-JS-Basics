//classe como um superset de funções

//Factory Function
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

const person = createPerson('arnia', 250);
//instanciamos a função e criamos um objeto

console.log(typeof person);

//Class Constructor

//instanciar é criar um objeto a partir de uma classe
class Person {
    names
    ages
    constructor(name, age) {
        this.names = name;
        this.ages = age;
    }
}


//uma equivalencia para chergarmos a resultados próximos
function person3(name, age) {
    const names = name
    const ages = age
    return {
        nameOftheUser: names,
        ageOftheUser: ages
    }
}

const person2 = new Person('sam', 350);
console.log(person2);

//typeof person e typeof person2 são objetos
//construtor irá instanciar objetos

//Metodos de classe
//classe eltra maisculo
class Calculator {
    constructor() {
        //nesse contexto ele é opcional
    }
    sum(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mult(a, b) {
        return a * b;
    }
    div(a, b) {
        return a / b;
    }
}

//função letra minuscula
function calculator2() {
    return {
        sum: function (a, b) {
            return a + b;
        },
        sub: function (a, b) {
            return a - b;
        },
        mult: function (a, b) {
            return a * b;
        },
        div: function (a, b) {
            return a / b;
        }
    }
}
const calculator = new Calculator();
