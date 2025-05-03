
// Під кожним постом повинна бути кнопка"Завантажити коментарі".
//     Отримання коментарів до постів:
//     Коли користувач натискає на кнопку "Завантажити коментарі" під конкретним постом, виконуйте GET запит для отримання перших 2х коментарів до цього поста.
//     URL для запиту: https://jsonplaceholder.typicode.com/posts/{postId}/comments?_limit=2, де {postId} – ідентифікатор поста.
//     Після завантаження відобразіть коментарі під постом. Кожен коментар повинен містити:
//     Ім'я (name)
// Email (email)
// Текст коментаря (body)
// Створення нового поста:
//     Реалізуйте форму, що дозволяє користувачу створити новий пост. У формі повинні бути два поля:
//     Заголовок (title)
// Текст (body)
// При відправці форми виконуйте POST запит на URL: https://jsonplaceholder.typicode.com/posts.
//     Відправте дані у такому форматі:
//     json
// {
//     "title": "Заголовок поста",
//     "body": "Текст поста",
//     "userId": 1
// }
// Після успішного створення поста відобразьте повідомлення про успіх (наприклад, "Пост створено успішно") і додайте новій пост до списку на екрані.

const URL = 'https://jsonplaceholder.typicode.com';

const cardsContainerElement = document.querySelector('.card-container')


fetch(`${URL}/posts?_limit=10`)
    .then(res => res.json())
    .then(posts => renderPostCard(posts))



function renderPostCard(posts) {
    cardsContainerElement.innerHTML = '';

    const markup = posts.forEach(post => {
        const markup = `
            <div class="card" data-js-card-id=${post.id}>
                <div class="card__inner">
                    <div class="card__header">
                        ${post.title}
                    </div>
                    <div class="card__body">
                        ${post.body}
                    </div>
                </div>
                <button class="card__generate-comments-button">Generate comments</button>
            </div>
    `
        cardsContainerElement.insertAdjacentHTML('afterbegin', markup)
    })
}




function renderCommentsForPostCard() {

}



cardsContainerElement.addEventListener('click', function(e) {
    const generateCommentsButton = e.target.closest('.card__generate-comments-button')

    if (e.target !== generateCommentsButton) return;

    const postCardId = generateCommentsButton.closest('.card').dataset.jsCardId

    fetch(`${URL}/posts/${postCardId}/comments?_limit=2`)
        .then(res => res.json())
        .then(comments => renderCommentsForPostCard(comments))
})


