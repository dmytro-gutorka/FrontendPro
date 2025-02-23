const number = 10369;
const digit1 = Math.floor(number / 10000);
const digit2 = Math.floor((number % 10000) / 1000); 
const digit3 = Math.floor((number % 1000) / 100); 
const digit4 = Math.floor((number % 100) / 10); 
const digit5 = number % 10; 

console.log(digit1, digit2, digit3, digit4, digit5); 
