const userNumber = +prompt('Enter your number');

const d3 = Math.floor(userNumber % 100 % 10)
const d2 = Math.floor(userNumber % 100 / 10)
const d1 = Math.floor(userNumber / 100)

if (d1 === d2 && d2 === d3){
    console.log("All three digits are the same!")
} else if (d1 === d2 || d1 === d3 || d2 === d3){
    console.log("Two digits are the same!")
} else{
    console.log("All three digits are different!")
}

