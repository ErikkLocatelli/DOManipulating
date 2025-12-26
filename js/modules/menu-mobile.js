export default function initMenuMobile () {
    const mobileMenuBtn = document.querySelector('[data-menu="button"]'); 
    const mobileMenuList = document.querySelector('[data-menu="list"]')
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuList.classList.toggle('active')
        mobileMenuBtn.classList.toggle('active')
    })
}