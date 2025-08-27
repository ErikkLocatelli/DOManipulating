const section = document.querySelectorAll('.curso')  
console.log(section) // nodeList
const sectionArray = Array.from(section)
console.log(sectionArray[0])

arrays = sectionArray.map(elemento => {
    // const filhos = elemento.children
    // return Array.from(filhos)
    const titulo = document.querySelector('h1').innerText; 
    const paragrafo = document.querySelector('p').innerText
    const span1 = document.querySelector('.aulas').innerText
    const span2 = document.querySelector('.horas').innerText    
    return {
        titulo, 
        paragrafo,
        span1,
        span2
    }
 })

 console.log(arrays[0].titulo)

const numeros = [3, 44, 333, 23, 122, 322, 33]; 

const maiorQue = numeros.filter(num => num > 100)
console.log(maiorQue)

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valores = compras.map(compra => +(compra.preco.replace("R$", "").replace(/\./g, "").replace(",", ".")))

const total = valores.reduce((acc, soma) => acc + soma)
console.log(total)
