let num = [5, 2, 1, 9]
num[5] = 3
num.push(6) // adiciona um novo valor no array 
num.length // mostra o tamanho do vetor
num.sort() // Deixa o vetor em forma crescente

console.log(`O nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor é ${num}`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
let pos = num.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)

//Buscar valores em vetor

// indexOf(7) // ele procura se tem o valor que está entre os parenteses