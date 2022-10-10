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


console.log(Object.keys(obj))
//volta todas as chaves de um objeto em uma array

