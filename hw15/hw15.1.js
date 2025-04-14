const todoFrom = document.querySelector('.todo__form')
const todoInputDescription = document.querySelector('.todo__form-input')
const todoList = document.querySelector('.todo__list')


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];



todoFrom.addEventListener('submit', function (e) {
    e.preventDefault()

    const task = todoInputDescription.value

    createTask(task)

    tasks.unshift(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    todoInputDescription.value = ''
})


todoList.addEventListener('click', function(e) {
    if (!e.target.classList.contains('delete-btn')) return;

    const item = e.target.closest('.todo__list-item');
    const index = Array.from(todoList.children).indexOf(item);
    console.log(index)
    console.log('arr', tasks)

    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('arr', tasks)

    item.remove();
})


function createTask(task) {
    if (!task) return;

    const markup = `
        <li class="todo__list-item">${task}
        <button class="delete-btn">Delete</button>
        </li>`

    todoList.insertAdjacentHTML('afterbegin', markup)
}


function renderTodoList() {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(localStorageTasks)

    localStorageTasks.forEach(task => {
        const markup = `
        <li class="todo__list-item">${task}
        <button class="delete-btn">Delete</button>
        </li>`

        todoList.insertAdjacentHTML('afterbegin', markup)
    })
}


renderTodoList()