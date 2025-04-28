class Calculator {


    lengthOfNumberValidation(...numbers) {
        if (numbers.length <= 1) {
            console.log('Enter at least 2 numbers')
            return;
        }
    }


    isNumberValidation(...numbers) {
        numbers.forEach(number => {
            if (typeof number !== 'number') {
                console.log('Please, enter only numbers')
                return;
            }
        })
    }


    initValidations(...numbers) {
        this.lengthOfNumberValidation(...numbers)
        this.isNumberValidation(...numbers)
    }


    add(...numbers) {
        this.initValidations(...numbers)
        return numbers.reduce((acc, curr) => acc + curr, 0)
    }


    subtract(...numbers) {
        this.initValidations(...numbers)
        return numbers.reduce((acc, curr) => acc - curr)
    }


    multiply(...numbers) {
        this.initValidations(...numbers)
        return numbers.reduce((acc, curr) => acc * curr, 1)
    }


    divide(...numbers) {
        this.initValidations(...numbers)
        return numbers.reduce((acc, curr) => acc / curr)
    }
}


const calc = new Calculator();

console.log(calc.add(5, 10, 15))
console.log(calc.divide(100, 10, 2))
console.log(calc.multiply(10, 2, 10))
console.log(calc.subtract(100, 50, 25))