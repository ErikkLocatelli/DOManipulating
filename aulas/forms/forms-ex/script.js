const contato = document.querySelector('#contato')
const texto = document.querySelector('.texto') 


function handleKeyUp(event) {
    // const target = event.target
    // const warnMsg = document.querySelector('.warnMsg')
    // if(!target.checkValidity()) {
    //     target.classList.add('invalido')
    //     warnMsg.innerText = target.validationMessage;
    // } else {
    //     target.classList.remove('invalido');
    //     warnMsg.innerText = ' ';
    // }
    // warnMsg.innerText = target.validationMessage;
    // texto.innerText = target.value
    if (event.target.checked) {
        document.body.style.color = 'red'
    } else {
        document.body.style.color = 'black'
    }
    ; 
}

contato.addEventListener('change', handleKeyUp)
const select = document.querySelector('#cores')
const color = document.querySelector('#color')
