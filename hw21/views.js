export function getPostCardComments(comments) {
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


export function getPostCardMarkup(posts) {
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