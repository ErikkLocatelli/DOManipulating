// alguns metodos presentes nas funçoes 

// carro = {


//     marca: "Ferrai", 
//     ano: 2010
// }

// const descricaoCarro = () => {
//     console.log(this.marca + "" + this.ano)
// }

// descricaoCarro.call(carro)

// console.log(carro)

const frutas = ['maca', 'banana', 'pera']

Array.prototype.pop.call(frutas)

console.log(frutas)