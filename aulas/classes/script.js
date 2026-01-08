// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome; 
//         this.idade = idade; 
//     }

//     selfHello() {
//         console.log('Olá meu nome é ' + this.nome + " e tenho " + this.idade + " anos")
//     }
// }

// const pessoa = new Pessoa("erik", 21)
// pessoa.selfHello()
// const pessoa2 = new Pessoa('ray', 22)
// pessoa2.selfHello()

// class Button {
//     constructor(options) {
//         this.options = options
//     }
// }

// // usando um objeto como valor unico da classe 

// const optionsButton = {
//     backgroundColor: 'blue', 
//     color: "white", 
//     margin: '2px'
// }

// const button = new Button(optionsButton)
// console.log(button.options.color)

const form = document.querySelector('.form')
const checks = document.querySelectorAll('.cargo')
const div = document.querySelector('.content')
let clients; 

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

   checks.forEach(check => {
      if(check.checked) {
        const value = check.value
        const newP = separeByRole(value)
        createNewP(newP)
      }
    })

    form.reset()
}

function createNewP(newP) {
    newP.forEach((n) => {
        const p = document.createElement('p')
        p.innerText = " "
        p.innerText = `${n.name} - ${n.role}`; 
        div.appendChild(p)
    })
}

async function getClients() {
    const clients = await fetch("./db.json")
    const clientsGroup = await clients.json()
    return clientsGroup
}

function separeByRole(selected) {
    const clientsArray = clients.clients
    const clientsByRole = clientsArray.filter(r => r.role === selected).map(m => {return {name: m.nome, role: m.role}})
    return clientsByRole
}

class Clients {
    constructor() {
        this.clients = []
    }

    async init() {
        this.clients = await getClients()
    }
}

(async () => {
  clients = new Clients()
  await clients.init()
})()
