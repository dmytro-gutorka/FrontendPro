const user = {
    name: 'John',
    age: 24,
    whereabouts: 'London',
    hobbies: ['swimming', 'hunting', 'programming'],

    printUserData() {
        console.log(
            `User ${this.name}, ${this.age} years old, currently lives in ${this.whereabouts} and likes 
            ${this.hobbies.slice(0, this.hobbies.length - 1).join(', ')} and ${this.hobbies.at(-1)}`
        )
    }
}


user.printUserData();
