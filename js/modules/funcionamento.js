export default function workingTime() {
    const funcionamento = document.querySelector('[data-week]')
    const msg = document.querySelector('[data-msg]')
    const diasSemana = funcionamento.dataset.week.split(',').map(Number); 
    const horarioSemana = funcionamento.dataset.time.split(',').map(Number); 

    const dataAgora = new Date(); 
    const diaAgora = dataAgora.getDay(); 
    const horarioAgora = dataAgora.getHours(); 

    const dayOpen = diasSemana.includes(diaAgora); 
    const timeOpen = horarioSemana[0] <= horarioAgora && horarioSemana[1] > horarioAgora; 

    const isOpen = dayOpen && timeOpen; 
    funcionamento.classList.toggle('aberto', isOpen)
    funcionamento.classList.toggle('fechado', !isOpen)

    msg.innerText = isOpen ? "Aberto" : "Fechado"

}