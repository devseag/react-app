// const rndSum = a => Math.random() + a;
// const rndSum = (a, b) => b + a;

// console.log(rndSum(5));
// console.log(rndSum(5));
// console.log(rndSum(5));

// const sum = (a, b) => b + a;

// console.log(sum(5, 10));
// console.log(sum(5, 10));
// console.log(sum(5, 10));

// pure function - same result, depends on the arguments

let num = 10;

const sum = a => num += a;

console.log(sum(5));
console.log(sum(5));
console.log(sum(5));