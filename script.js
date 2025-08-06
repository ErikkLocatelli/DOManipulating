const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
const accordingContent = document.querySelectorAll('.faq-lista dd')
const accordingTittle = document.querySelectorAll('.faq-lista dt')

tabContent[0].classList.add('ativo')


function activeTab(index) {
    tabContent.forEach((item) => {
        item.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
}

tabMenu.forEach((item, index)=>{
    item.addEventListener('click', () => {
        activeTab(index)
    })
})

// -- According list 

function activeAccord(index) {
    accordingContent[index].classList.toggle('ativo')
}

accordingTittle.forEach((item,index)=>{
    item.addEventListener('click', () => {
        activeAccord(index)
    } )
})

