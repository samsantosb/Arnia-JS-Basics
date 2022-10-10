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




