const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine() {
    let newObject = {}

    for (let i = 0; i < arguments.length; i++){
        for (let j in arguments[i]){
            newObject[j] = !newObject[j] ? arguments[i][j] :newObject[j] + arguments[i][j]
        }
    }
    return newObject;
}


console.log(combine(objA, objB, objC));




