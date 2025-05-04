import {createPost, getJSON} from './utills.js'
import {getPostCardComments} from "./views.js";
import {renderPostCardComments, renderPostCards} from "./renders.js";
import {cardPostForm, cardsContainerElement, URL} from "./constants.js";


export function commentsRenderHandler() {
    cardsContainerElement.addEventListener('click', async function (e) {
        const generateCommentsButton = e.target.closest('.card__generate-comments-button')

        if (e.target !== generateCommentsButton) return;

        const postCardElement = generateCommentsButton.closest('.card')
        const postCardId = postCardElement.dataset.jsCardId

        const url = `${URL}/posts/${postCardId}/comments?_limit=2`
        const commentsData = await getJSON(url);

        const commentsMarkup = getPostCardComments(commentsData);
        renderPostCardComments(postCardElement, commentsMarkup)
    })
}


export function postFormHandler() {
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
}

