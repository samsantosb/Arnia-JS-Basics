//nesse caso a classe funciona como um namespace
//para agrupar funções

const array = [1, 2, 3, 4, 5];

class ArrayOperators {
    constructor() {
    }
    //soma todos os elementos do array
    sumArrayElements(array) {
        let sum = 0;
        for (const item of array) {
            sum = sum + item
        }
        //array.reduce((sum, item) => sum + item)
        return sum
    }
    //ordenar essa array numerica em ordem crescente
    sortArray(array) {
        return array.sort()
    }

    //deletar o ultimo elemento do array
    deleteLastElement(array) {
        return array.pop();
    }

    //deletar o primeiro elemento do array
    deleteFirstElement(array) {
        return array.shift();
    }

    //retornar o primeiro elemento da array
    firstArrayElement(array) {
        return array[0];
    }

    //retornar o ultimo elemento da array
    lastArrayElement(array) {
        return array[array.length - 1];
    }
}

//comporta-se de maneira parecida com o método, mas não está atrelado a um objeto
function sumArrayElements(array) {
    let sum = 0;
    for (const item of array) {
        sum = sum + item
    }
    //array.reduce((sum, item) => sum + item)
    return sum
}
sumArrayElements(array)

//já os métodos estão atrelados a um objeto
const arrayOperators = new ArrayOperators();
// console.log(arrayOperators.sumArrayElements(array));
// console.log(arrayOperators.sortArray(array));
// console.log(arrayOperators.deleteLastElement(array));
// console.log(arrayOperators.deleteFirstElement(array));
// console.log(arrayOperators.firstArrayElement(array));
// console.log(arrayOperators.lastArrayElement(array));

//_______________________________________________________________


//nesse caso a classe funciona como um namespace
//porem ela trabalha a array como algo que pertence a ela
//e não como um parametro de função
//dessa forma podemos usar o this para referenciar a array
//e armaenar o estado da array no objeto instanciado


//Isso é uma fila
//first in first out -> se você é o primeiro a entrar, você é o primeiro a sair
//last in last out -> se você é o último a entrar, você é o último a sair
class Queue {
    //Esta é uma fila do tipo LIFO
    constructor() {
        this.queue = [];
    }

    //adicionar a fila na última posição
    enqueue(item) {
        this.queue.push(item);
    }

    //ordena os dados da fila
    sort() {
        this.queue.sort();
    }

    //remove o primeiro da fila
    dequeue() {
        return this.queue.shift();
    }

    //retorna tudo que tiver na fila
    getQueue() {
        return this.queue;
    }
}

const queue = new Queue();
console.log(queue, 'estado inicial')
queue.enqueue(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getQueue(), 'após adicionar 4, 1, 2, 3');
//estamos armazenando o estado da fila no objeto instanciado
queue.sort();
console.log(queue.getQueue(), 'após ordenar');
queue.dequeue();
console.log(queue.getQueue(), 'após remover o primeiro elemento');
//um objeto consegue carrega metodos que alteram o estado dele mesmo
console.log(queue, 'estado final');

//_______________________________________________________________

const arrayFila = [1, 2, 3, 4, 5];

function sortFila(array) {
    array.sort();
}

function removeLastFromFila(array) {
    array.pop();
}

function removeFirstFromFila(array) {
    array.shift();
}
