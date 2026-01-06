
// const content = document.querySelector('.content')

// function calculaBtc() {
//     const btc = fetch("https://blockchain.info/ticker")
//     btc.then(response => response.json())
//    .then(data => content.innerText = data.BRL.buy)
// }

// const interval = setInterval(calculaBtc, 1000)
// calculaBtc()

const img = document.querySelector('img')
const phrase = document.querySelector('.phrase')
const button = document.querySelector('.butao')

button.addEventListener('click', nextJoke)

function nextJoke() {
    const joke = fetch("https://api.chucknorris.io/jokes/random")
    joke
        .then(response => response.json())
        .then(jokeData => {
            img.src = jokeData.icon_url
            phrase.innerText = jokeData.value
        })
}