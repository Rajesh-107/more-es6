class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'kolimonnesa school'
    }
}
const student1 = new Student(23, 'Raju');
const student2 = new Student(34, 'mahiya');
console.log(student1, student2);