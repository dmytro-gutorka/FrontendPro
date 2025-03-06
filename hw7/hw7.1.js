function totalSum() {
    let sum = 0;
    return function(number){
       return sum+=number
   }
}

let sumNumbers = totalSum()

console.log(sumNumbers(2))
console.log(sumNumbers(2))

