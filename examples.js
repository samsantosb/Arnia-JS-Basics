const arr = [
    { name: 'Jane', age: 25, gender: 'woman' },
    { name: 'Mary', age: 28, gender: 'woman' },
    { name: 'Peter', age: 28, gender: 'man' },
    { name: 'John', age: 30, gender: 'man' },
    { name: 'John', age: 30, gender: 'man' },
]

const john = arr.find(item => item.name === 'John');

const onlyMan = arr.filter(person => person.gender === 'man')

//sort array by age
const sortAge = arr.sort((a, b) => a.age - b.age);
console.log(sortAge);

const newArrayWithNewAges = arr.map(person => {
    person.age = person.age + 10;
    return person;
})

/*
Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.
Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro,
mas ordenado em relação a todos os outros elementos. Nota: O padrão ECMAscript não garante este 
comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.
Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.
funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos 
a e b como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
*/

const arniaObject = arr.map(person => {
    return {
        name: 'Arnia',
        age: person.age,
        gender: person.gender
    }
});

console.log(arniaObject);

//manipulações de dados em memória


//________________//

const users = Object.freeze([
    {
        name: 'Diego',
        age: 23,
    },
    {
        name: 'Gabriel',
        age: 15,
    },
]);

// const usersWithAdress = users.map((user) => {
//     return {
//         ...user,
//         adress: 'Rua dos bobos, 0',
//         zipcode: `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 1000)}`,
//     }
// });

users = {
    name: 'Diego',
}

//freeze +++
//const ++
//let +
//var -------
