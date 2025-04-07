function arithmeticMean(array){
    let sum = 0;
    for (let num of array){
        if (typeof num === 'number') sum += +num
    }
    return sum
}

console.log(arithmeticMean([10,10,100,1]));