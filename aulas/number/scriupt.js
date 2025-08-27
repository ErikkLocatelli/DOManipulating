number = 109 

console.log(Number.isInteger(number))

teste = '55.4934234234324234234'
console.log(parseFloat(teste))

// toFixed = arredonda para o decimal mais próximo (dentro do (), eu passo o valor de quantas casas eu quero)

//testeNumber = Number(teste)
testeNumber = +teste // mesma coisa que o role comentado acima
console.log(testeNumber.toFixed(2))

//.toLocaleString 

console.log(testeNumber.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}))

// math - SÓ COISAS PADRAO, MAS BASICAS
// E = 2.71 
// PI = 3.14 
// LN10 = 2.3 

Math.abs() //
Math.ceil() //arredonda para um valor intero, mas sempre p cima 
Math.floor() // para baixo 
Math.floor() //arredonda
Math.random() //numero quebrado entre 0 - 100

let sorteio = Math.round(Math.random()* 100)
console.log(sorteio)

let aleatorio = Math.round(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(aleatorio)

const numeros = '3,4,56,8'
const arrayNumeros = numeros.split(",")

