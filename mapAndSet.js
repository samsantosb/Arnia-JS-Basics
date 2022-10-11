// //convert map to object
// const obj = Object.fromEntries(map);

// //convert object to map
// const map2 = new Map(Object.entries(obj));

//size
// (map.size);

// //get
// (map.get('name'));

// //has
// (map.has('name'));

//delete
// map.delete('name');
// console.log(map)

const map = new Map(
    [
        ['name', 'Lee'],
        ['age', 29]
    ]
);

for (let [key, value] of map) {
    console.log(key, value);
}

//remover duplicados usando o spread do set
const duplicatedArray = [1, 1, 2, 2, 3, 3]

const removeDuplicates = [...new Set(duplicatedArray)]
console.log(removeDuplicates)

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


