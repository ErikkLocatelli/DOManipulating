export function initModal() {
    const abrirModal = document.querySelector('[data-modal="login"]');
    abrirModal.addEventListener("click", (e) => {
        e.preventDefault(); 
        const modalContainer = document.querySelector('[data-modal="modal-container"]');
        modalContainer.classList.add("active");
    });    
}

export function closeModal()  {
    const modalContainer = document.querySelector('[data-modal="modal-container"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    fecharModal.addEventListener("click", () => {
        modalContainer.classList.remove("active");
    });

    modalContainer.addEventListener("click", (e) => {
        if (e.target === modalContainer) {
            modalContainer.classList.remove("active");
        }
    })
}
