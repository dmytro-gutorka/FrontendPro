const URL = 'https://jsonplaceholder.typicode.com';

const cardsContainerElement = document.querySelector('.card-container')
const cardPostForm = document.querySelector('#card-post-form')
const notificationContainer = document.querySelector('.notification-container')


async function getJSON(url) {
    try {
        const result = await fetch(url);

        return await result.json();
    }
    catch (err) {
        console.log(err)
    }
}


function getPostCardMarkup(posts) {
    return posts.map(post => {
        return `
            <div class="card" data-js-card-id=${post.id}>
                <div class="card__post">
                    <div class="card__content">
                        <div class="card__header">${post.title}</div>
                        <div class="card__body">${post.body}</div>
                    </div>
                    <button class="card__generate-comments-button">Generate comments</button>
                </div>
            </div>`
    })
}


async function renderPostCards(postData) {
    try {
        const url = `${URL}/posts?_limit=10`
        const postsData = postData ? postData : await getJSON(url);
        const postsCardsMarkup = getPostCardMarkup(postsData)

        cardsContainerElement.insertAdjacentHTML('afterbegin', postsCardsMarkup.join(''))
    }
    catch (err) {
        console.error(err)
    }
}


function renderPostCardComments(postCardElement, postCardCommentMarkup) {
    postCardElement.insertAdjacentHTML('beforeend', postCardCommentMarkup.join(''))

}


function getPostCardComments(comments) {
    return comments.map(comment => {
        return `
            <div class="comment-container">
                <div class="comment__card">
                <span class="comment__email">${comment.email}</span>
                    <div class="comment__content">
                        <div class="comment__name">${comment.name}</div>
                        <div class="comment__body">${comment.body}</div>
                    </div>
                </div>
            </div>`
    })
}


async function createPost(data) {
        const result = await fetch(`${URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (!result.ok) throw new Error('Could not create a post');

        renderPostCreationNotification()
}


function renderPostCreationNotification() {
    const markup = `<span class="card-notification">post created</span>`

    notificationContainer.insertAdjacentHTML('afterbegin', markup)

    setTimeout(() => {
        notificationContainer.removeChild(notificationContainer.lastElementChild)
    }, 3000)
}


cardsContainerElement.addEventListener('click', async function (e) {
    const generateCommentsButton = e.target.closest('.card__generate-comments-button')

    if (e.target !== generateCommentsButton) return;

    const postCardElement = generateCommentsButton.closest('.card')
    const postCardId = postCardElement.dataset.jsCardId

    const url = `${URL}/posts/${postCardId}/comments?_limit=2`
    const commentsData = await getJSON(url)

    const commentsMarkup = getPostCardComments(commentsData);
    renderPostCardComments(postCardElement, commentsMarkup)
})


cardPostForm.addEventListener('submit', async function (e) {
    e.preventDefault()

    const formData = new FormData(cardPostForm);
    const formDataObj = {};

    formData.forEach((value, key) => formDataObj[key] = value);


    try {
        await createPost(formDataObj);
        await renderPostCards([formDataObj]);
    } catch (err) {
        console.error(err);
        alert('There was an error while creating the post. Please try again later.');
    }
})


renderPostCards()
