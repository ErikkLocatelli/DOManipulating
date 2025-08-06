

const menu = document.querySelector(".menu") 
/*
menu.className // string 
menu.classList // lista de classes 
menu.classList.add ("ativo") 
menu.classList.add("ativo", "mobile") // adiciona duas classes 
menu.classList.remove("ativo") 
menu.classList.toggle("ativo") //adicona ou remove a classe 
menu.classList.contains("ativo") // retorna true ou false 
menu.classList.replace("ativo","inativo")
*/

// ----------- Tratando sobre Inner ---------------
// menu.innerText = '<p>Texto</p>'
// menu.innerHTML = '<p>Texto</p>'


// Falando sobre inner etc 

menu.outerHTML // pega todo o HTML do elemento 
menu.innerHTML // html interno 
menu.innerText // altera o texto, mas sem alteracao de tags


// --- Teste apenas ---- 

const tittle = document.querySelector('.titulo')

tittle.addEventListener('click', ()=> {
    tittle.innerText = 'Esse é o novo título'
})


const img = document.querySelector("img")

img.addEventListener(`click`, () => {
    console.log(img)
})



tittle.addEventListener(`click`, function() {
    console.log(tittle.className)
    tittle.classList.toggle('titulo')
})

 // console.log(img)

// forEach dentro de um addEventListener - para adicionar a todas os elemtentos que devem ser afetados 

// const imgs = document.querySelectorAll('img')

//imgs.forEach((img)=> {
//    img.addEventListener('click', function() {
//       console.log(imgs)
//    }) 
//})


const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleClick(event) {
    event.preventDefault(); 
    linksInternos.forEach((item) => {
        item.classList.remove('ativo')
    })
    event.currentTarget.classList.add("ativo")
}

linksInternos.forEach((links)=>{
    links.addEventListener('click', handleClick)
})



// ----- Tranversing ----------
// Um meio de navegar pelo DOM, utilizando suas propriedades e métodos 

const lista = document.querySelector('.animais-lista') 

lista.parentElement // pai 
lista.parentElement.parentElement // pai do pai 
lista.previousElementSibling // o elemento q está acima do selecionado 
lista.nextElementSibling // elemento que está abaixo do selecionado 

lista.children; // retorna um html colection com todos os filhos diretos desse elemento 
lista.children[0] // primeiro filho e sucessivamente  
lista.children[--lista.children.length] //dessa forma é possível retornar o útlimo filho, caso n se saiba o tamanho trabalhado 

lista.querySelectorAll('li') //seleciona os LI (por exemplo, diretos da tag lista)
lista.querySelector('li:last-child') // retorna o último filho 

// ------------------ Manipulando elementos ----------------------

const contato = document.querySelector('.contato')
const titulo = contato.querySelector('titulo')

contato.appendChild(lista)
contato.insertBefore(lista, titulo) // primeiro argumento é o que eu quero mover, o segundo é o elemento que ficará antes do elemento colocado 
//contato.removeChild(titulo)
//contato.replaceChild(lista, titulo)

// ------------------- Criando elementos HTML que não estão originalmente no HTML -------------

const animais = document.querySelector('.animais')
const listaAnimais = document.querySelector('.animais-lista')

const novoh1 = document.createElement('h1')
novoh1.innerText = 'Esses são os animais'
novoh1.classList.add('titulo')

animais.appendChild(novoh1)
// animais.insertBefore(novoh1, listaAnimais)

// -- Execs 

const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true)
const body = document.querySelector('body')

body.replaceChild(cloneMenu, copy)

const dt = document.querySelector('.faq-lista') 
console.log(dt.children[0].innerText)