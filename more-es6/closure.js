//function stopWatch() {
//let count = 0;
// return function() {
//    count++;
//      return count;
//    }
//}
//const clock1 = stopWatch();
//console.log(clock1());
//console.log(clock1());
//console.log(clock1());
//console.log(clock1());

function makeAdd(x) {
    return function(y) {
        return x + y;
    };
}
var add5 = makeAdd(5);
var add10 = makeAdd(10);

console.log(add5(2));
console.log(add10(2));