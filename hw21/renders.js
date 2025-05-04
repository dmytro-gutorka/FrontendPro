import { getJSON } from './utills.js'
import { getPostCardMarkup } from './views.js'
import {cardsContainerElement, notificationContainer, URL} from "./constants.js";


export async function renderPostCards(postData) {
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


export function renderPostCardComments(postCardElement, postCardCommentMarkup) {
    postCardElement.insertAdjacentHTML('beforeend', postCardCommentMarkup.join(''))
}


export function renderPostCreationNotification() {
    const markup = `<span class="card-notification">post created</span>`

    notificationContainer.insertAdjacentHTML('afterbegin', markup)

    setTimeout(() => {
        notificationContainer.removeChild(notificationContainer.lastElementChild)
    }, 3000)
}
