const arr = [1, 2, 3, 5];

//1. arr.concat - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// concatena duas arrays
const arrConcat = arr.concat([6, 7, 8, 9, 10]);

//2. arr.every 
//ele verifica se todos os elementos da array passam no teste
arr.every((item) => item > 0);

//3. arr.filter
//ele filtra os elementos da array que passam no teste e os retorna
arr.filter(item => item > 2);

//4. arr.find
//ele retorna o primeiro elemento da array que passa no teste
arr.find(item => item > 2);

//5. arr.findIndex
//ele retorna o primeiro índice do elemento da array que passa no teste
arr.findIndex(item => item > 2);

//6. arr.forEach
//ele executa uma função para cada elemento da array
arr.forEach(item => item);

//7. arr.includes
//ele verifica se um elemento existe na array -> retorna um booleano
arr.includes(3);

//8. arr.map
//ele executa uma função para cada elemento da array e retorna uma nova array com os resultados
const arr3 = arr.map(item => item * 2);

//9 arr.pop
//ele remove o último elemento da array e retorna o elemento removido
arr.pop();

//10. arr.shift
//ele remove o primeiro elemento da array e retorna o elemento removido
arr.shift()

//11. arr.push
//ele adiciona um ou mais elementos no final da array e retorna o tamanho da array
arr.push(4);

//12. arr.splice
//ele adiciona e/ou remove elementos da array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
arr.splice(2, 1);

//13. arr.sort
//ele ordena os elementos da array - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
arr.sort();


const arrayToIntroduceFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // a estrutura de iteração mais veloz
// for (let i = 0; i < arrayToIntroduceFor.length; i++) {
//     console.log(arrayToIntroduceFor[i]);
//     console.log('aqui foi feito um log')
// }

// //itera por valor
// for (const item of arrayToIntroduceFor) {
//     console.log(item);
//     console.log('aqui foi feito um log')
// }

//itera por índice
// for (const index in arrayToIntroduceFor) {
//     console.log(arrayToIntroduceFor[index]);
//     console.log('aqui foi feito um log')
// }

//for, for of, for in, e forEach são estruturas de iteração
//eles iteram cada item de uma array podendo altera-lo


//map - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//map cria uma nova array com os resultados da função de callback para cada elemento da array

// const arrayToIntroduceMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const copyOfUpperArray = arrayToIntroduceMap.map(item => {
//     return item * 2;
// });

// console.log(arrayToIntroduceMap);
// console.log(copyOfUpperArray);


const arrayTointroduceForeach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// for (const item of arrayTointroduceForeach) {
//     newArray.push(item * 2);
// }

const newArray = arrayTointroduceForeach.map(item => {
    return item * 2
});
console.log(newArray);