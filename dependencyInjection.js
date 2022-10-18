//Dependency Injection
// function car(model, year, owner) {
//     return {
//         model: model,
//         year: year,
//         owner: owner,
//         run: function () {
//             return 'The car ' + this.model + ' is running';
//         }
//     }
// }

// function ferrari(car, turbo) {
//     return {
//         model: car.model,
//         year: car.year,
//         owner: car.owner,
//         turbo: turbo,
//         run: function () {
//             return 'The car ' + this.model + ' is running with' + this.turbo;
//         }
//     }
// }

// const car1 = car('BMW', 2015, 'Pesho');
// console.log(car1);
// console.log(car1.run());
// const ferrari1 = ferrari(car1, 'Turbo');
// console.log(ferrari1);
// console.log(ferrari1.run());




//função impura
//function helloWorldAndMoon() {
//legado -> helloWorld() + ' and Moon';

//string literals
//return `${helloWorld()} and Moon`;
//}

//função pura

// function notificadorFactory() {
//     return {
//         enviar: () => {
//             console.log('-> Notificando usuario! ')
//         }
//     }
// }

// function postFactory(titulo, notificar = notificadorFactory()) {
//     return {
//         titulo: console.log(`Aprendendo: ${titulo}`),
//         publicar: () => {
//             console.log('-> Publicando o Post')
//             notificar.enviar()
//         }

//     }
// }

// const post = postFactory('Factory Function', notificadorFactory())
// post.publicar()



function helloWorld() {
    return 'Hello World';
}

function helloWorldAndMoon(functionHelloWorld) {
    return `${functionHelloWorld()} and Moon`;
}

const hello = helloWorldAndMoon(helloWorld);

//as dependencias da soma são a e b
function sum(a, b) {
    return a + b
}
//o que podem ser parâmetros de uma função
//array, numero, string, objeto, new Map, pode ser uma função, objeto que carrega varias funções


//chaves de objetos podem ser:
//funções, numeros, strings, outros objetos, arrays, new Maps... etc

const cars = {
    model: 'BMW',
    year: 2015,
    speed: function (value) {
        return `The car ${this.model} is running at ${value} km/h`;
    },
    break: function (value) {
        return `The car ${this.model} is breaking at ${value} km/h`;
    }
}

function tuneCar(car) {
    //um objeto do tipo car é o parâmetro da minha função
    //este objeto carrega atributos e métodos/funções que podem ser acessados
    //dentro da minha função
    const tunedCar = {
        ...car,
        turbo: 5000,
        name: 'Ferby',
        price: 1000000
    }
    return tunedCar
}

const car1 = tuneCar(cars);
// console.log(car1);
// console.log(car1.speed(200));


//_______________________________________________________
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    speed(value) {
        return `The car ${this.model} is running at ${value} km/h`;
    }
    break(value) {
        return `The car ${this.model} is breaking at ${value} km/h`;
    }
}

const car = new Car('BMW', 2015);
// console.log(car);
// console.log(car.speed(200));
// console.log(car.break(100));

class Ferrari {
    //parâmetros de um construtor ou de um método podem ser
    //objetos, arrays, números, strings, booleano
    constructor(car) {
        //car pode ser o carro da linha 134
        this.car = car;
    }
    getCarData() {
        return this.car
    }
}

const ferrari = new Ferrari(car);
// console.log(ferrari)


//_______________________________________________________

//Serviços -> São Classes que carregam a nossa regra de negócio
//Repositorios -> São Classes que carregam queries/interações com o banco de dados

class Repositorio {
    constructor() {
        this.data = [];
    }
    salvar(pessoas) {
        this.data.push(pessoas);
    }
    pegarTodos() {
        return this.data;
    }
}

class Servico {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    salvar(pessoas) {
        this.repositorio.salvar(pessoas);
    }
    pegarTodos() {
        return this.repositorio.pegarTodos();
    }
}

const repositorio = new Repositorio();
const servico = new Servico(repositorio);

//O analogo em funções seria:

let data = []
function repository(data) {
    return {
        salvar: (pessoas) => {
            data.push(pessoas);
        },
        pegarTodos: () => {
            return data;
        }
    }
}

function service(repository) {
    return {
        salvar: (pessoas) => {
            repository.salvar(pessoas);
        },
        pegarTodos: () => {
            return repository.pegarTodos();
        }
    }
}

//instancia do repositorio
const repositorio2 = repository();
const servico2 = service(repositorio2);









