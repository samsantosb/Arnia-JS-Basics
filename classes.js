//classe pode ter analogias com funções para facilitar seu entendimento

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

// console.log(typeof person);

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
// console.log(person2);

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
// console.log(calculator.div());


//instanciamos a função
const calculatorr2 = calculator2(2, 3);
// console.log(calculatorr2.mult());


//Herança de classe
class Pikachu {
    constructor(type) {
        //this refere-se ao objeto que está sendo criado - ao objeto da classe
        //sem o this é parâmetro, vem de fora do construtor

        this.name = 'Alberto-O-Pikachu-Front-End';
        this.type = type;
    }
    attack() {
        return `${this.name} atacou`;
    }
}

const pikachu = new Pikachu('elétrico');
// console.log(pikachu);
// console.log(pikachu.attack());

class Raichu extends Pikachu {
    constructor(type, level) {
        //super referencia o construtor da classe pai(Pikachu)
        //os parâmetros de super, são os mesmos parâmetros do construtor da classe Pai(Pikachu)
        //super deve ser chamado antes de this
        //parâmetros instanciados na classe pai de maneira literal,
        //não precisam ser passados como parâmetro para o construtor da classe filha
        super(type);
        this.level = level;
    }
    attack() {
        return super.attack
    }
}

const raichu = new Raichu('elétrico e fada', 100);
// console.log(raichu);



//Injeção de dependência

//com funções
function sum(a, b) {
    return a + b;
}

sum(2, 3)
function sub(a, b) {
    return a - b;
}

// function calculator1000(sum, sub, a, b) {
//     return {
//         //a função sum é passada como parâmetro para a função calculator1000	
//         aquiSoma: sum(a, b),
//         //a função sub é passada como parâmetro para a função calculator1000
//         aquiSubtrai: sub(a, b)
//     }
// }

//const calculator1000 = calculator1000(sum, sub, 1, 2);



//mais um caso
function operations() {
    return {
        sum: function (a, b) {
            return a + b;
        },
        sub: function (a, b) {
            return a - b;
        }
    }
}

const op = operations();
op.sub(2, 3);
op.sum(2, 3);
// console.log(op.sum(1, 2));
// console.log(op.sub(1, 2));
function operationsAndMyNmae(op, a, b) {
    return {
        sum: op.sum(a, b),
        sub: op.sub(a, b),
        myName: 'Samuel',
        sumMinusSub: function () {
            return op.sum(a, b) - op.sub(a, b);
        }
    }
}

operationsAndMyNmae(op, 1, 2);

