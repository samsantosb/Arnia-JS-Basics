//____A palavra This_____//
function test() {
    return {
        a: 1,
        b: 2,
        c: function () {
            return this.a
        },
        d: () => {
            return {
                a: 'arnia',
                b: function () {
                    return this.a
                }
            }
        }
    }
}
const tests = test()

console.log(tests.c(), ' ---> nesse caso o this é o objeto da função externa')
console.log(tests.d(), ' ---> nesse caso o this refere-se a arrow function')

console.log('__________________________________________________________')

//___arr.map vs For___//
const users = [
    { name: 'Lee', age: 29 }, //user
    { name: 'Arnia', age: 25 }, //user
    { name: 'Arnia', age: 25 } //user
]

console.log(users, 'antes do for')

//nesse caso users não são imutaveis - for, for in, for each, for of

for (const user of users) {
    user.age = user.age * 4
}
console.log(users, 'depois do for')



//utilizamos map para criar uma nova array
//nesse caso temos imuabilidade
const newUsers = users.map(user => {
    return {
        name: user.name,
        age: user.age * 2,
        id: 'd89e9e38i9049i30'
    }
})
console.log(users, 'depois do map')
console.log(newUsers, 'nova array de users')

// //___Shadow copy vs deep copy___//
// console.log('__________________________________________________________')

// const fordCar = {
//     name: 'Ford',
//     model: 'Ka',
// }

// const fordCar2 = fordCar

// const fordCar3 = {
//     ...fordCar
// }

// delete fordCar2.name
// console.log(fordCar2,
//     'essa é uma shadow copy, pois o objeto fordCar2 aponta para o mesmo endereço de memoria do objeto fordCar')

// console.log(fordCar3,
//     'essa é uma deep copy, pois o objeto fordCar3 aponta para um novo endereço de memoria')




