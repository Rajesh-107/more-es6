const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const part = numbers.slice(2, 5);

const removed = numbers.splice(2, 4);
console.log(part);

const together = numbers.join(' ');
console.log(together);