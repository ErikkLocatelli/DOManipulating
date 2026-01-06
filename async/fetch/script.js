// const doc = fetch('./doc.txt')

// const text = doc.then(resolucao => {
//     return resolucao.text()
// }).then(body => {
//     document.body.innerText = body
// })

//fetch('https://viacep.com.br/ws/01001000/json/')

const form = document.querySelector('.conteudo')
const div = document.querySelector('.holder')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const cep = form.name.value
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json()
        )
        .then(data => div.innerText = data.logradouro
        ) 
         .catch(err => {
        div.innerText = "Erro ao carregar dados";
        });


    form.reset()
})