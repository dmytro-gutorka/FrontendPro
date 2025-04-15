function Student(name, birthYear, ARRAY_LIMIT = 5) {
    this.ARRAY_LIMIT = ARRAY_LIMIT
    this.name = name;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendanceLog = []
}


Student.prototype.getAge = function (currentYear) {
    return currentYear - this.birthYear
}


Student.prototype.getAverageGrade = function () {
    return this.grades.reduce((acc, cur) => acc + cur, 0) / this.grades.length
}


Student.prototype.getAvgAttendance = function() {
    return this.attendanceLog.filter(isAttended => isAttended).length / this.attendanceLog.length
}


Student.prototype.present = function () {
    this.isArrayLimitExceeded() ?
        this.arrayLimitExceededError() :
        this.attendanceLog.push(true)
}


Student.prototype.absent = function () {
    this.isArrayLimitExceeded() ?
        this.arrayLimitExceededError() :
        this.attendanceLog.push(false)
}


Student.prototype.isArrayLimitExceeded = function() {
 return this.attendanceLog.length  >= this.ARRAY_LIMIT
}


Student.prototype.arrayLimitExceededError = function (){
    console.log('Sorry, attendance log is full, there are no available slots :(')
}


Student.prototype.summary = function() {
    const avgPassingGrade = this.getAverageGrade() > 90;
    const avgPassingAttendance =  this.getAvgAttendance() > 0.9;

    if (!avgPassingGrade && !avgPassingAttendance) return 'Редиска :('
    if ((!avgPassingGrade && avgPassingAttendance) || avgPassingGrade && !avgPassingAttendance) return 'Добре :|'

    return 'Молодець :)'
}


//Student 1
// Passing avg grades | Passing avg attendance
const student1 = new Student('Dima', 2000)

student1.grades = [100, 100, 90, 95, 95]

student1.present()
student1.present()
student1.present()
student1.present()
student1.present()

console.log(student1.summary()) // Молодець


//Student 2
// Passing avg grades | Not passing avg attendance

const student2 = new Student('Dima', 2000)

student2.grades = [100, 100, 90, 95, 95]

student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()

console.log(student2.summary()) // Добре



//Student 3
// Not passing avg grades | Passing avg attendance

const student3 = new Student('Dima', 2000)

student3.grades = [11, 1, 2, 33, 44]

student3.present()
student3.present()
student3.present()
student3.present()
student3.present()

console.log(student3.summary()) // Добре



//Student 4
// Not passing avg grades | Not passing avg attendance

const student4 = new Student('Dima', 2000)

student4.grades = [44, 33, 22, 11, 11]

student4.absent()
student4.absent()
student4.absent()
student4.absent()
student4.absent()

console.log(student4.summary()) // Редиска



// Add item in attendance log array when it's full
student4.absent() // Sorry, attendance log is full, there are no available slots :(


