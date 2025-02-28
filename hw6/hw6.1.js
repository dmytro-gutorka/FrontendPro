function removeLetter(string, letters){
    let newString = ""

    for (let i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) newString += string[i];
    }
    return newString;
}

console.log(removeLetter("hello world",['l', 'd']));