let primeNumber = prompt("Enter your Number");


for(let i = 2; i < primeNumber; i++){

    if (primeNumber % i === 0) {
        console.log("This number is not prime");
        break;
    }
    else if(i === primeNumber - 1) {
        // if it's the last iteration
        console.log("This number is prime");
        break;
    }
}