//// Falando sobre timeOuts e afin

// método assincrono que ativa callback após o tempo 

// numeros = [1,2,3,4,5,6,7,8,9,10]
// contador = 0

// const achado = numeros.find((n, i) => {
//     setTimeout(espera, 1000 * i, n, contador)
//     contador++
//     return n === 8
// })
 

// // numeros.forEach((n) => {
// //     setTimeout(espera, 1000 * n, n)
// // })

//  function espera(msg, contador) {
//      console.log(msg, contador)
// }

// let i = 0

// const meuLoop = setInterval(() => {
//     console.log(i++); 
//     if (i > 20) {
//         clearInterval(meuLoop)
//     } 
// }, 300)

// const body = document.querySelector('body')
// const meuLoop = setInterval(()=>{
//     body.classList.toggle('red')
// }, 2000)


const btnStart = document.querySelector('.timer_start')
const btnStop = document.querySelector('.timer_stop')
const btnReset = document.querySelector('.timer_reset')
const display = document.querySelector('.timer_display')

let meuLoop; 
let contador = 0
function timer() {
    if (meuLoop) return
    else { 
    meuLoop =  setInterval(()=> {
        contador++
        display.innerHTML = formatarTempo(contador)
    }, 1000)
}
}

btnStart.addEventListener('click', () => {
    timer()
})

btnStop.addEventListener('click', ()=> {
    clearInterval(meuLoop)
    meuLoop = null
})

btnReset.addEventListener('click', ()=> {
    clearInterval(meuLoop)
    meuLoop = null
    contador = 0
    display.innerHTML = formatarTempo(contador)
})

function formatarTempo(segundosTotais) {
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    // O padStart(2, '0') garante que sempre existam 2 dígitos (ex: "05" em vez de "5")
    const h = String(horas).padStart(2, '0');
    const m = String(minutos).padStart(2, '0');
    const s = String(segundos).padStart(2, '0');

    return `${h}:${m}:${s}`;
}


