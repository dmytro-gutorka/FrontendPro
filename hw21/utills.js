import {renderPostCreationNotification} from "./renders.js";
import {URL} from './constants.js'


export async function getJSON(url) {
    try {
        const result = await fetch(url);

        return await result.json();
    }
    catch (err) {
        console.log(err)
    }
}


export async function createPost(data) {
    const result = await fetch(`${URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })

    if (!result.ok) throw new Error('Could not create a post');

    renderPostCreationNotification()
}

