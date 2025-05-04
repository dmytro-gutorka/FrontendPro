import { renderPostCards } from './renders.js';
import { commentsRenderHandler, postFormHandler } from "./eventHandlers.js";


async function init() {
    renderPostCards()
    commentsRenderHandler()
    postFormHandler()
}


 init();