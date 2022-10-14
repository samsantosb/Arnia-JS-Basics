//Criando uma função que retorna dados pessoais

//1 - Factory function  - cria um usuário e trata alguns dados
function data(age, name, lastName, password, zipCode, cpf) {
    function crypto(number) {
        return number.split('').reverse().join('');
    }
    return {
        age: age,
        name: `${name}, ${lastName}`,
        isMajor: age >= 18 ? true : false,
        password: crypto(password),
        zipCode: zipCode,
    }
}

const myPersonalData = data(25, 'arnia', 'santos', '123456', '12345678');
//instanciar um objeto
const cesarPersonalData = data(25, 'cesar', 'santos', '123456', '12345678');



console.log('____________________________________________________')
//_______________________________________________________________

//2. Function as namespace
function calculator() {
    const result = {
        sum: (a, b) => a + b,
        sub: (a, b) => a - b,
        mult: (a, b) => a * b,
        div: (a, b) => a / b,
    }

    return result
}

//instanciar um objeto que carrega funções(metodos)
const calculator1 = calculator();
console.log(calculator1.sum(1, 2));

class Calculator {
    constructor() {
        this.author = 'samuel';
        this.age = 29;
        this.hobbie = ['jogar', 'programar', 'estudar'];
        this.number = 89999999;
    }

    getHobbie() {
        const number = 3;
        return {
            hobbie1: this.hobbie[0],
            hobbie2: this.hobbie[1],
            hobbie3: this.hobbie[2],
        }
    }

    sum(a, b) {
        this.number
        return a + b;
    }
    sub(a, b) {
        const number = 3;
        return a - b;
    }
    mult(a, b) {
        return a * b;
    }
    div(a, b) {
        return a / b;
    }
}

const calculator2 = new Calculator();
console.log(calculator2);



console.log('____________________________________________________')
//_______________________________________________________________


// //3. criando uma fila com class notation
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    sort() {
        this.queue.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    getQueue() {
        return this.queue;
    }
}

const fila = new Queue();
console.log(fila)
fila.enqueue(5);
fila.enqueue(2);
fila.enqueue(1);
fila.enqueue(4);
fila.enqueue(6);
console.log(fila)
fila.sort();
console.log(fila)
fila.dequeue();
console.log(fila)


console.log('____________________________________________________')
//_______________________________________________________________

//4. criando uma fila com factory notation
const queue = [];

function enqueue(queue, item) {
    queue.push(item);
}

function sort(queue) {
    queue.sort();
}

function dequeue(queue) {
    return queue.shift();
}

function getQueue(queue) {
    return queue;
}

// enqueue(queue, 5);
// enqueue(queue, 2);
// enqueue(queue, 1);
// enqueue(queue, 4);
// enqueue(queue, 6);
// console.log(queue)
// sort(queue);
// console.log(queue)
// dequeue(queue);
// console.log(queue)

// console.log('____________________________________________________')
// //_______________________________________________________________