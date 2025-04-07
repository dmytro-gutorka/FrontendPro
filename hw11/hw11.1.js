const pythagorasContainer = document.querySelector('.pythagoras-container');


for (let i = 1 ; i < 10; i++) {
    const pythagorasRow = document.createElement('div')
    pythagorasRow.classList.add(`pythagoras__row-${i}`)
    pythagorasContainer.appendChild(pythagorasRow)


    for (let j = 1 ; j < 10; j++) {
        const pythagorasItem = document.createElement('div')

        pythagorasItem.classList.add("pythagoras__item")
        pythagorasItem.textContent = `${i * j}`
        pythagorasRow.appendChild(pythagorasItem)


        if (j <= i) pythagorasItem.style.backgroundColor = 'orange';

        if (j > i) pythagorasItem.style.backgroundColor = 'pink';

        if (i === 1 || j === 1) pythagorasItem.style.backgroundColor = 'lightgreen';
    }
}