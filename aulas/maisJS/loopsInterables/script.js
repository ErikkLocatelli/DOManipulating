// iterable 

// são objetos que possiem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida colm a iteraçã o será defnida

// for of 
// é possível fazer um loop por cada iteracao do objeto iteravel utilizando o for of

// const frutas = ["maça", "banana", "pessêgo"]

// for(const fruta of frutas) {
//     console.log(fruta)
// }

// const frase = "isso é league of legends"
// const letras = []
// for (const char of frase) {
//     if (char == "a") {
//         console.log("parou")
//         break
//     } else {
//         console.log(char)
//     }
// }

const carro = {
    marca: "honda", 
    ano: 2010
}

for(const propriedades in carro) {
    console.log(propriedades)
}
