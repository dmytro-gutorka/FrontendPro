import './styles.scss';


const todosContainer = document.querySelector('.todos-container')
const todoForm = document.querySelector('.todo-form');


const URL = "http://localhost:3002"


async function getTodos() {
    const data = await fetch(URL)
    return await data.json()
}


function createTodo(todoData) {
    return fetch(URL, {
        method: "POST",
        body: JSON.stringify(todoData),
        headers: {
            "Content-Type": "application/json",
        }
    })
}


function deleteTodo(todoId) {
    return fetch(`${URL}/${todoId}`, {
        method: "DELETE"
    })
}


function updateTodo(todoId, title) {
    return fetch(`${URL}/${todoId}`, {
        method: "PUT",
        body: JSON.stringify(title),
        headers: {
            "Content-Type": "application/json",
        }
    })
}


function renderTodos(todosData) {
    todosData.forEach(todo => {
        const markup = `
            <div class="todo-card" data-js-todo-id=${todo.id}>
                <input class="todo-card__checkbox" type="checkbox">
                <h3 class="todo-card__header">${todo.title}</h3>
                  <div class="todo-card__edit-button">✎</div>
                <div class="todo-card__delete-button">✖</div>
            </div>
        `
        todosContainer.insertAdjacentHTML('beforeend', markup)
    })
}


todoForm.addEventListener('submit', async function (e)  {
    e.preventDefault()

    const formData = new FormData(todoForm)
    const formDataObj = {};

    formData.forEach((value, key) => formDataObj[key] = value)

    formDataObj.id = Date.now()

    await createTodo(formDataObj)
    renderTodos([formDataObj])
})


todosContainer.addEventListener('click', async function(e) {
   if (!e.target.classList.contains('todo-card__delete-button')) return;

   const todoCard = e.target.closest('.todo-card');
   const todoId = +todoCard.dataset.jsTodoId

    await deleteTodo(todoId)
    todosContainer.innerText = ''
    renderTodos(await getTodos())
})


todosContainer.addEventListener('click', async function(e) {
    if (!e.target.classList.contains('todo-card__edit-button')) return;

    const todoCard = e.target.closest('.todo-card');
    const todoId = +todoCard.dataset.jsTodoId;
    const titleElement = todoCard.querySelector('.todo-card__header')
    const currentTitle = titleElement.textContent;

    const newTitle = prompt('Change the task:', currentTitle)

    if (newTitle && newTitle.trim() !== '' && newTitle !== currentTitle) {
        await updateTodo(todoId, { title: newTitle })
        titleElement.textContent = newTitle

    }

})

renderTodos(await getTodos())



