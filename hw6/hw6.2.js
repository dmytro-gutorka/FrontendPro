function arithmeticMean(array){
    let sum = 0;
    for (let num of array){
        sum += +num
    }
    return sum
}

console.log(arithmeticMean([10,10,100,1]));