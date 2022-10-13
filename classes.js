//classe como um superset de funções

//Factory Function
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

const person = createPerson('arnia', 250);
const otherPerson = person3('sammm', 23213120);
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
    constructor(a, b) {
        this.a = a; //this.a = 1
        this.b = b; //this.b = 2
    }

    sum() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mult() {
        return this.a * this.b;
    }
    div() {
        return this.a / this.b;
    }
}

//função letra minuscula
function calculator2(a, b) {
    const string = 'string';
    return {
        a: a,
        b: b,
        sum: function () {
            return a + b;
        },
        sub: function () {
            return a - b;
        },
        mult: function () {
            return a * b;
        },
        div: function () {
            return a / b;
        }
    }
}

//instanciamos a classe
const calculator = new Calculator(1, 2);
console.log(calculator.div());


//instanciamos a função
const calculatorr2 = calculator2(2, 3);
console.log(calculatorr2.mult());
