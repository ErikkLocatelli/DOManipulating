const controls = document.querySelector(".controls")
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controls.addEventListener('input', handleChange)

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    height(value) {
        this.element.style.height = value + 'px'
    },
    width(value) {
        this.element.style.width = value + 'px'
    }, 
    text(value) {
        this.element.innerText = value
    }, 
    color(value) {
        this.element.style.color = value
    },
    border(value) {
        const valueFormatado = value.toLowerCase()
        this.element.style.border = valueFormatado
    }, 
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px'
    }, 
    fontFamily(value) {
        this.element.style.fontFamily = value
    }, 
    fontSize(value) {
        this.element.style.fontSize = value + 'rem'
    }

}

function saveData(name, value) {
    localStorage[name] = value
}

function setData() {
    const properties = Object.keys(localStorage)
    properties.forEach((item) => {
        handleStyle[item](localStorage[item])
        controls.elements[item].value = localStorage[item]
    })
}

function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    handleStyle[name](value)
    saveData(name, value)
    showCss()
}

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('</span><span>'); 
}

setData()