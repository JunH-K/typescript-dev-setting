export default function main() {
    greeter({firstName: '첫번째이름', lastName: '라스트네임'});
    return 1;
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    console.log(person);
}

class Student {
    fullName: string; //public 속성을 자동으로 생성
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

}

const student = new Student('a', 'b', 'c');
console.log(student.firstName);

