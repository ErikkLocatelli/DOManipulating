// Permite a destruturação de arrays e objetos. Atribuindo suas propriedades à novas variáveris 

class Moto {
    constructor (marca, ano, porta) {
        this.marca = marca, 
        this.ano = ano, 
        this.porta = porta
    }
}

const carro = {
    marca: "fiat", 
    ano: 2015, 
    portas: 4
}


const moto = new Moto("honda", 2016, 0)

//const { marca, ano} = carro 
const { marca, ano } = moto

// console.log(marca)
// console.log(moto)

const cliente = {
    nome: "Erik", 
    compras: {
        digitais: {
            livros: [{item: "livro 1", preço: 23.50},{item: "livro 2", preço: 10.50}], 
            musicas: ["musica 1", "musica 2"]
        }, 
        físicas: {
            cadernos: ["caderno1"]
        }
    }
}

console.log(cliente.compras.digitais)

const { nome, compras} = cliente 

// posso usar das duas formas caso queira - melhor para trabalhar e mais claro quando necessário 

const { livros: livrosComprados } = cliente.compras.digitais

console.log(nome)
console.log(compras)
console.log(livrosComprados)

let total = 0; 
livrosComprados.forEach(c => {
    total += c.preço 
})

const calculaICMS = (total) => total + total*0.10

const finalPrice = calculaICMS(total)

console.log(finalPrice)


const btn = document.querySelector('button')

const btnStyles = getComputedStyle(btn)

const { backgroundColor, color, margin } = btnStyles

