const obj = {
    name: 'Lee',
    age: 29,
    zip: '12345',
    city: 'Seoul',
    country: 'Korea',
}

const arrayOfObj = Object.entries(obj)
//console.log(arrayOfObj[1][1]);
//transforma um objeto em um array de arrays
//subset

//tansformar um array de arrays em um objeto
const obj2 = Object.fromEntries(arrayOfObj);

const obj3 = Object.keys(obj)
//volta todas as chaves de um objeto em uma array

const obj4 = Object.values(obj)
//volta todos os valores de um objeto em uma array

const objeto1 = {
    name: 'Lee',
    age: 29,
} //armazenado em um endereço de memoria X

const objeto2 = {
    name: 'Lee',
    age: 29,
} //armazenado em um endereço de memoria Y

//como comparar 
JSON.stringify(objeto1) === JSON.stringify(objeto2)

//jeitos de criar um objeto

const objLee = {
    name: 'Lee',
    age: 29,
}

// delete objLee.age
// console.log(objLee)
// objLee.zip = '12345'
// console.log(objLee)

const objLee2 = new Object({
    name: 'Lee',
    age: 29,
})

const objLee3 = Object.create({
    name: 'Lee',
    age: 29,
})

const objLeeSpread = {
    ...objLee,
}


const target = {}
const source = {
    name: 'Lee',
    age: 29,
}
const objLee4 = Object.assign(target, source)

//target -> 1o parametro
//source -> 2o parametro na substituição de propriedades, o source sobrescreve o target

//em casos de chaves iguais, realiza um substituição
//em caso de chaves diferentes, comporta-se de modo semelhante ao array.concat
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//combinar dois elementos
// const dog = {
//     name: 'Mango',
//     age: 2,
// }

// const westie = {
//     name: 'westie-Mango',
//     color: 'white',
// }

//design pattern - Factory Function
function objectFactory(name, age) {
    return {
        nameOfUser: name,
        ageOfUser: age,
    }
}

//instanciar objetos
const lee = objectFactory('Lee', 29)
const kim = objectFactory('Kim', 30)

//parâmetros da função são os valores
function carFactory(model, year, color) {
    return {
        model: model,
        year: year,
        color: color,
    }
}

const car1 = carFactory('Audi', 2019, 'black')
//console.log(car1)
console.log(car1.color)
console.log(car1['color'])

//Constructor Function - Factory Function
function Car(model, year, color) {
    this.model = model
    //Car.model
    this.year = year
    this.color = color
}

const car2 = new Car('Audi', 2019, 'black')
console.log((car2))
console.log((car1))

JSON.stringify() //transforma um objeto javascript em notação JSON

JSON.parse() // transforma uma notação JSON em um objeto javascript


