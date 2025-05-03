const URL = 'https://jsonplaceholder.typicode.com';

const cardsContainerElement = document.querySelector('.card-container')
const cardPostForm = document.querySelector('#card-post-form')
const notificationContainer = document.querySelector('.notification-container')


fetch(`${URL}/posts?_limit=10`)
    .then(res => res.json())
    .then(posts => renderPostCard(posts))


function renderPostCard(posts) {
    posts.forEach(post => {
        const markup = `
            <div class="card" data-js-card-id=${post.id}>
                <div class="card__post">
                    <div class="card__content">
                        <div class="card__header">${post.title}</div>
                        <div class="card__body">${post.body}</div>
                    </div>
                    <button class="card__generate-comments-button">Generate comments</button>
                </div>
            </div>
    `
        cardsContainerElement.insertAdjacentHTML('afterbegin', markup)
    })
}


function renderCommentsForPostCard(comments, cardElement) {
    comments.forEach(comment => {
        const markup = `
            <div class="comment-container">
                <div class="comment__card">
                <span class="comment__email">${comment.email}</span>
                    <div class="comment__content">
                        <div class="comment__name">${comment.name}</div>
                        <div class="comment__body">${comment.body}</div>
                    
                    </div>
                </div>
            </div>`
        cardElement.insertAdjacentHTML('beforeend', markup)

    })
}


function createPost(data) {
    fetch(`${URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            if (res.ok) renderPostCreationNotification()
        })
}


function renderPostCreationNotification() {
    const markup = `<span class="card-notification">post created</span>`

    notificationContainer.insertAdjacentHTML('afterbegin', markup)

    setTimeout(() => {
        notificationContainer.removeChild(notificationContainer.lastElementChild)
    }, 3000)
}


cardsContainerElement.addEventListener('click', function(e) {
    const generateCommentsButton = e.target.closest('.card__generate-comments-button')

    if (e.target !== generateCommentsButton) return;

    const postCardElement = generateCommentsButton.closest('.card')
    const postCardId = postCardElement.dataset.jsCardId

    fetch(`${URL}/posts/${postCardId}/comments?_limit=2`)
        .then(res => res.json())
        .then(comments => renderCommentsForPostCard(comments, postCardElement))
})


cardPostForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const formData = new FormData(cardPostForm);
    const formDataObj = {};

    formData.forEach((value, key) => formDataObj[key] = value);

    createPost(formDataObj)
    renderPostCard([formDataObj])
})

