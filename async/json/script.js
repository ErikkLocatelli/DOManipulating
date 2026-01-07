fetch('./dados.json')
.then(response => response.json())
.then(response => response.forEach(r => {
    console.log(r)
}))

const configuracoes = {
    player: "Google", 
    tempo: 45.5, 
    aula: "JavaScript JSON"
}

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parse(localStorage.config))