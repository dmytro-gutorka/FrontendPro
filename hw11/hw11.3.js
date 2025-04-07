const imgContainer = document.querySelector('.image-container');
const NUMBER_OF_IMAGES = 9

addEventListener('DOMContentLoaded', () => {
    const imageElement = document.createElement('img')
    const randomImageId = ~~(Math.random() * NUMBER_OF_IMAGES + 1)

    imageElement.src = `./images/course-cover-${randomImageId}.png`
    imageElement.width = '500';
    imageElement.height = '300';

    imgContainer.innerHTML = ''
    imgContainer.appendChild(imageElement)

})