const carro = {
    marca: 'carro', 
    preco: 0
}

function Camiseta(marca, cor) {
    this.marca = marca,
    this.cor = cor; 
}

const nike = new Camiseta()
nike.marca = 'nike'
nike.cor = 10
nike.preco = 12
console.log(nike)

function Financiamento(preco, taxa) {
    this.preco = preco
    this.taxa = taxa
    const precoFinal = preco*taxa
    console.log(precoFinal)
}

new Financiamento(12000, 1.2)

// Exemplo Real


// function Dom(seletor) { 
//    this.element = function() {
//     return document.querySelector(seletor)
// }
//     this.ativar = function() {
//         this.element().classList.add('ativo')
//     }

// }
// const teste = new Dom('ul')

// function Pessoa(nome, idade) {
//     this.nome = nome, 
//     this.idade = idade;

//     this.andar = function(){
//         console.log(`${this.nome} andou`)
//     }
 
// }

// const pessoa1 = new Pessoa('erik', 20)
// console.log(pessoa1)
// console.log(pessoa1.andar())

// function Dom(seletor) {
//     const elemento = document.querySelectorAll(seletor)   
//     this.element = elemento


//     this.ativar = function(classe) {
//         elemento.forEach((element) => {
//             element.classList.add('ativo')
//             console.log(classe)
//         })
//     } 

//     this.desativar = function(){
//         element.forEach((element) => {
//             element.classList.remove('ativo')
//         })
//     }
// }

// const lista = new Dom('ul')
// lista.ativar('ativo')

