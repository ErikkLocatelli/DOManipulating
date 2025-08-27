// Slice - Corta a string de acordo com as posiçoes passadas 

// const palavra1 = "Depósito de cliente"

// console.log(palavra1.slice(0,4)) //comeca em 0 e retorna até o 4

// IndexOf('p') - retorna a posicao da letra desejada 
// lastIndexOf('i') retorna a ultima posicao que o valor passado aparece

// replace 

// let listaItens = 'banana maca uva maracuja'
// listaItens = listaItens.replace(/[ ]+/g,', ') // regular expression
// console.log(listaItens)

// transforma uma string lista em um array 

// const arrayLista = listaItens.split(", ")
// console.log(arrayLista)


const trasacoes = [
    {
        descricao: 'camiseta', 
        valor: "R$123"
    },
    {
        descricao: 'camiseta', 
        valor: "R$109"
    },
    {
        descricao: 'camiseta', 
        valor: "R$109"
    },
    {
        descricao: 'camiseta', 
        valor: "R$110"
    }
]

let total = " "

trasacoes.forEach((item)=>{
   total = total + item.valor
})
    
console.log(total)
let novoTotal = total.replace(/[R$]/g, ",");
//console.log(novoTotal)
let arrayTotal = novoTotal.split(",,")
//console.log(arrayTotal)

arrayTotal.forEach((item)=>{
    Number(item)
})

console.log(typeof arrayTotal[1])

// for (let i = 0; i <= numeros.lenght; i++) {
//     soma += numeros[i]
// }

// console.log(soma)
