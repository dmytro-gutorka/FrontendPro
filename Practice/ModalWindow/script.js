'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const buttonsOpenModal = document.querySelectorAll('.show-modal');


function closeModal(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

function openModal(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


for (let i = 0; i < buttonsOpenModal.length; i++) {
   buttonsOpenModal[i].addEventListener("click", openModal)
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)


document.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal()
})