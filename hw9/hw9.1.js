let company = {

    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 2000
        },
    ],
    development: {
        web: [
            {
                name: 'Peter',
                salary: 3000,
            },
            {
                name: 'Alex',
                salary: 4000
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 5000
            }
        ],
    }
}


function calcOverallSalary(obj) {
    let sum = 0

    for (let key of Object.keys(obj)) {

        if (Array.isArray(obj[key])) {
            obj[key].forEach(key => sum += key.salary)
        }

        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            console.log(obj[key])
            return sum += calcOverallSalary(obj[key])
        }
    }

    return sum;
}


calcOverallSalary(company);