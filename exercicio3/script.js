const array1 = [07, 01]

const array1Copia = array1.slice()

array1Copia.push(22)

console.log("array1 original:", array1)
console.log("array1 com push:", array1Copia)

//

const array2 = ["Cabos", "Fonte", "Keyboard"]
const array2Copia = array2.slice()

array2Copia.pop()

console.log("array2 original:", array2)
console.log("array2 com pop():", array2Copia)

//

const array3 = ["TLOU2", "RDR2", "TW3", "APEX"]
const array3copia =  array3.slice()

array3copia.splice(2,1)

console.log("array3 original:", array3)
console.log("array3 com splice, segundo item removido:", array3copia)

// ex. 3 finalizado.

