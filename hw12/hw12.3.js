const todoFrom = document.querySelector('.todo__form')
const todoInputDescription = document.querySelector('.todo__form-input')
const todoList = document.querySelector('.todo__list')


todoFrom.addEventListener('submit', function (e) {
    e.preventDefault()
    const task = todoInputDescription.value
    const markup = `<li class="todo__list-item">${task}
                            <button class="delete-btn">Delete</button>
                            </li>`

    todoList.insertAdjacentHTML('afterbegin', markup)
})


todoList.addEventListener('click', function(e) {
    const el = e.target.closest('.delete-btn')
    el?.parentElement.remove()
})