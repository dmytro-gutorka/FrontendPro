const number = prompt("Enter your Number");


for(let i = 2; i < number; i++){

    if (number % i === 0) {
        console.log("This number is not prime");
        break;
    }
    else if(i === number - 1) {
        // if it's the last iteration
        console.log("This number is prime");
        break;
    }
}