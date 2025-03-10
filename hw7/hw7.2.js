function sum(a) {
    return function(b){
        return a + b
    }
}


console.log(sum(10)(10))