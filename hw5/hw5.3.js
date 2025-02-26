let number =  +prompt("Enter a number");
let counter = 1;

do {
    console.log(counter * counter);
    counter++
} while (counter * counter < number)