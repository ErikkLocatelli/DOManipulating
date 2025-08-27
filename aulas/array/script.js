const intrumentos = ["bateria", "piano", "violão"]
console.log(intrumentos)
intrumentos[20] = 'violao'
console.log(intrumentos)

console.log("A posição atual é: " +  intrumentos[1])

const teste = 'banana batata'

const teste2 = Array.from(teste)
console.log(teste2) // legal usando para nodeLists
instrumentosOrdem = intrumentos.sort() //organiza a array de strings por ordem alfabética
console.log(instrumentosOrdem) 
idades = [1,2,3,434,23,5350,9] 
idadesOrdem = idades.sort()
console.log(idadesOrdem) //ordena conforme a ordem de caracter e n necessariamente a ordem numérica
idadesOrdem.unshift(12,34,667) //.push() para adicionar ao fim - shift e pop seguem o mesmo funcionamento, mas retirando 
console.log(idadesOrdem)
// reverse reverte toda a ordem do array 
const carros = ['KIA', "Honda", "GOL", "Ford"]
carros.splice(1,carros.length, "Celta", "Dodge") // aqui ajuda na inserção de novos elementos no array a partir de determinada posição (indicada pelo numerador da frente na chamada. Já o segundo, chama quantos elementos devem ser removidos a partir dali para a entrada dos demais)

const array1 = ['mamcaco', 12, 23]
const array2 = ['lalala', 123,323]
const array3 = array1.concat(array2.concat(carros)) // junta duas ou mais arraya
console.log(array3)

// array.includes //procura se tem - boolean
// array.indexOf // procura onde aparece primeiro e se aparece 
// array.lastIndexOf // procura onde aparece por íulirmi
novosCarros = carros.slice(0,3) // o array é clonado apenas com os valores que deseja-se cortar do array original, indicando as suas posicoes
console.log(novosCarros) 