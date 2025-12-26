export default function animaNumeros() {
    function animaNumeros() {
    const numeros =  document.querySelectorAll('[data-numero]')
    numeros.forEach((num) => {
        const numText = +num.innerText; 
        const incremento = numText / 100
        let contador = 0
        const timer = setInterval(() => {
           contador = contador + incremento
           num.innerText = contador.toFixed(0)
           if (contador > numText) {
            num.innerText = numText; 
            clearInterval(timer)
           }
        }, 50 * Math.random())
    })
}

    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo'))
            observer.disconnect()
            animaNumeros()
    }

    const observer = new MutationObserver(handleMutation)
    const observerTarget = document.querySelector('.numeros')
    observer.observe(observerTarget, {attributes:true})
}