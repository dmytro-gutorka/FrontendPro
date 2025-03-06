
// попросити ввести ще раз, і таке інше. 
//     Якщо користувач вводить більше ста, 
//     текст або цикл закінчує всі ітерації, 
//     то функція виводить в консоль останній 
// введення користувача і завершує функцію.
//
//


function aa() {
    let userChoice =  +prompt("Type any number grater than 100");

    if (userChoice > 100) return userChoice

    for (let i = 0; i < 10; i++) {
        userChoice = +prompt("Try one more time");
        if (userChoice > 100) return userChoice
    }

}
