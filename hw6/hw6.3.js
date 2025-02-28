let array = [1, 3, 4, 6, 2, 5, 7]

function removeElement(array, item){
    let indexElement = array.indexOf(item);
    if (indexElement > -1) array.splice(indexElement, 1);
    return array;
}

console.log(removeElement(array,4));