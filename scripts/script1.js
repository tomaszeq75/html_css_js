const per = {
    firsName:  "Jan",
    lastName:  'Kowal'
}

console.log(per.firsName);

class Person {
    constructor(firsName, lastName){
        this.firsName = firsName;
        this.lastName = lastName;
        this.grades = [];
    }

    get fullName(){
        return `${this.firsName} ${this.lastName}`
    }

    set grade(grade) {
        this.grades.push(grade)
    }
    grade2 = (grade) => {
        this.grades.push(grade)
    }

}

const person = new Person("firsName", 'lastName');

console.log(person.fullName);
person.grade = '1';
person.grade = '2';

person.grade2('aaa')
console.log(person.grades);

person.grades.push('3');
console.log(person.grades);

