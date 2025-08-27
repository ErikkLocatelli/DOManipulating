// forEach - funcai de callback que é excutada em cada item do array, ela possui três argumentos, itemAtual (valor do item da array), index (index do valor da array) e array (array original)

const carros = ["Ferrari", "Kia", "Gol"]

// carros.forEach(function(item){
//     console.log(item.toLowerCase())
// })

// carros.forEach((carro) => {
//     console.log(carro.toLocaleUpperCase())
// })

// carros.forEach((carro)=>console.log(carro.toLocaleLowerCase())) // maneira mais simples e fácil de exercer 

// map - faz a mesma coisa que forEach - mas o map sempre vai retornar um array, diferente do forEach

const teste = carros.map((item) => {
    if (!item.startsWith('F')) return item})

console.log(teste)

const numeros = [2,3,4,5,6] 

const numerosDobro = numeros.map((num) => {return num*2 })

console.log(numerosDobro)

const aulas = [
    {
        nome: 'HTML 1',
        min: 12
    }, 
      {
        nome: 'HTML 2',
        min: 17
    }, 
      {
        nome: 'HTML 3',
        min: 14
    }, 
      {
        nome: 'HTML 4',
        min: 134
    }, 
]


const totalMin = aulas.map((aula) => aula.min).reduce((acc, aula) => acc + aula
)
console.log("Esse aqui" + totalMin)

// reduce - executa a funcao de callback para cada item do array. Um valor especial exsite nessa funcao de callbackm ele é chamado de acumulador. mas é na verdade apenas o retorno da interação 

const aulas2 = [10,25,50]
const total1 = aulas2.reduce((acc, atual) => {
    return acc + atual
})

const total2 = aulas2.reduce((acc, atual)=> acc + atual, 100)

console.log(total2)

// Existe a possibilidade de iterar de da direirta pra esquerda com .reduceRight(...) 

// some -- se pelo menos um dos valores dos returns dessa interação for truthy, ele retorna true

const nomes = ["Erik", 'Felipe', "Gabreil"]

const temErik = nomes.some((nome) => {return nome === 'Erik'})

function maiorQue100(num) {
  return num > 100
}

const numeros2 = [10,23,45,6576,34] 
const temMaior = numeros2.some(maiorQue100)
console.log(temMaior)

// .every funciona semelhante, mas todas as iteraçoes devem seguir com truth

const pessoas = [
  {
    nome: "Erik", 
    idade: 21
  },
  {
    nome: "Rayanne", 
    idade: 24
  },
  {
    nome: "Gabriel", 
    idade: 9
  },
  {
    nome: "Felipe", 
    idade: 8
  }
]

 let maiores = []
 let menores = []
// pessoas.map((nome) => {
//   // if(nome.idade > 17) {
//   //   maiores.push(nome)
//   // } else {
//   //   menores.push(nome)
//   // }
//   //nome.idade > 17 ? maiores.push(nome) : menores.push(nome)
// })

console.log(maiores)
console.log("///")
console.log(menores[1])

// ----------------- Find e FindIndex 

//.find() retorna o valor da primeira iteração que retorna true. Já o findIndex, retorna a posição em que foi encontrado

const numeroMaior = numeros.find(x => x > 1)
console.log(numeroMaior)


// filter 

// .filter() vai retornar uma nova array com a lista de valores que durante a sua iteraçao, retornaram um valor true
maiores = pessoas.filter(p => p.idade > 17)
menores = pessoas.filter(p => p.idade < 18)

console.log(maiores[0])