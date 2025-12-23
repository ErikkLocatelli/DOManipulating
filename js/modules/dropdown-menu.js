export default function initDropDownMenu() {
    const dropDown = document.querySelector('[data-drop-down]')
    dropDown.addEventListener('click', (e)=> {
        e.preventDefault()
        dropDown.classList.toggle('active')
    })

}