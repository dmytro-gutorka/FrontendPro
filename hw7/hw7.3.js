function numbersMoreHundred() {
    let userChoice =  +prompt("Type any number grater than 100");

    if (userChoice > 100) return userChoice

    for (let i = 0; i < 10; i++) {
        userChoice = +prompt("Try one more time");
        if (userChoice > 100) return userChoice
    }
}

// numbersMoreHundred();