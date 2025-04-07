const textParagraph = document.querySelector('.text');
const changeColorBtn =  document.querySelector('.change-color-btn');


changeColorBtn.addEventListener('click', () =>  {
    textParagraph.classList.toggle('color-change');
})

