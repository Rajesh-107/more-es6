class Parent {
    constructor() {
        this.fatherName = 'Schwernegger';
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}
const name1 = new Child('Tom');
const name2 = new Child('Arnoald');
console.log(name1.getFullName(), name2.getFullName());