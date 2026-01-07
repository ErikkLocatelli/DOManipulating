export default function animaNumeros() {
    async function animaNumerosInit() {
    const containeres = document.querySelectorAll('.numeros-animal')
    const dataAnimal = await getPopulation()
    containeres.forEach((num, index) => {
        const h3 = num.querySelector('[data-animal]')
        const span = num.querySelector('[data-numero]')
        h3.innerText = dataAnimal[index].especie.toUpperCase();  
        const numText = dataAnimal[index].population;
        
        const incremento = numText / 100
        let contador = 0
        const timer = setInterval(() => {
           contador = contador + incremento
           span.innerText = contador.toFixed(0)
           if (contador > numText) {
            span.innerText = numText; 
            clearInterval(timer)
           }
        }, 150 * Math.random())
    })
}

    async function getPopulation() {
        const population = await fetch("./data-animal.json")
        return population.json()
    }

    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('ativo'))
            observer.disconnect()
            animaNumerosInit()
    }

    const observer = new MutationObserver(handleMutation)
    const observerTarget = document.querySelector('.numeros')
    observer.observe(observerTarget, {attributes:true})
}