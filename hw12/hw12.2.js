const buttonsContainer = document.querySelector('.buttons')


buttonsContainer.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.btn')
    if (!clickedBtn) return

    console.log(typeof clickedBtn.textContent)
    alert(`Button ${Number.parseInt(clickedBtn.textContent.match(/\d/))} was clicked`)
})

