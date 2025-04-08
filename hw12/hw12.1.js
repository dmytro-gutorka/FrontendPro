const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')

let promptValue


btn1.addEventListener('click', () => {
    promptValue = prompt('Enter any url')
})


btn2.addEventListener('click', () => {
    window.location.href = promptValue;
})