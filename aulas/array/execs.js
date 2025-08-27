const comidas = ['Pizz', 'Frango','Carne', 'Macarrão']

const pizza = comidas.shift()
const ultimo = comidas.pop()
comidas.push('Arroz')
console.log(pizza, ultimo)
console.log(comidas)
comidas.unshift('Peixe', "Batata")
console.log(comidas)

const estudantes = ["Márcio", 'Brenda', 'Brendo', "Felipe", "Erik", "Rayanne"]
console.log(estudantes.sort())
console.log(estudantes.sort().reverse())
console.log(estudantes.includes("Joana"))

const carros = ["Kia", "Gol", "Honda", "Ferrari"]

