const students = [
    { id: 21, name: 'Sunny' },
    { id: 31, name: 'Manna' },
    { id: 41, name: 'Purnima' },
    { id: 51, name: 'deepjol' }
];
const names = students.map(n => n.name);
console.log(names);
const ids = students.map(ids => ids.id);
console.log(ids);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);