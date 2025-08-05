

const menu = document.querySelector(".menu") 

menu.className // string 
menu.classList // lista de classes 
menu.classList.add ("ativo") 
menu.classList.add("ativo", "mobile") // adiciona duas classes 
menu.classList.remove("ativo") 
menu.classList.toggle("ativo") //adicona ou remove a classe 
menu.classList.contains("ativo") // retorna true ou false 
menu.classList.replace("ativo","inativo")

const img = document.querySelector("img")
const tittle = document.querySelector('.titulo')

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

