export default function initToolTip() {
    const toolTips = document.querySelectorAll("[data-tooltip]");
    toolTips.forEach((tooltip) => {
        tooltip.addEventListener("mouseover", (e)=> {
            const toolTipBox = createToolTipBox(e.currentTarget)
            toolTipBox.style.top = e.pageY + 'px'; 
            toolTipBox.style.left = e.pageX + 'px'; 

            toolTipBox.addEventListener('mouseleave', () => {
                toolTipBox.remove(); 
            })
        });
       
    });

    function createToolTipBox(element) {
        const toolTipBox = document.createElement('div')
        const toolTipText = element.getAttribute('aria-label')
        toolTipBox.classList.add('tooltip')
        toolTipBox.innerText = toolTipText
        document.body.appendChild(toolTipBox)
        return toolTipBox
    }
}