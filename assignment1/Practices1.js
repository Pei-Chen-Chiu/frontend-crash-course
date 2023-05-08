// Declare two variables and assign them with numerical values
const x = 10;
const y = 5;


// 1. Declare some variable and log the result of variables arithmetic.
console.log(`${'-'.repeat(8)}arithmetic${'-'.repeat(8)}`);
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


// 2. Declare some variable and assign the result of variables arithmetic to another variable and log it.
console.log(`${'-'.repeat(8)}arithmetic${'-'.repeat(8)}`);
let sum=x+y;
let difference = x - y;
let product = x * y;
let quotient = x / y;


console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);


// 3. Declare some variable and log the result to variables comparison.
console.log(`${'-'.repeat(8)}comparison${'-'.repeat(8)}`);


console.log(x < y);
console.log(x > y);
console.log(x == y);
console.log(x != y);


// 4. Declare some variable and log the result of variables logical convertion.
console.log(`${'-'.repeat(8)}logical convertion${'-'.repeat(8)}`);

let a = true;
console.log(a);

let b = !a;
console.log(b);

let c = true;
let d = false;
console.log(c && d);

let e = true;
let f = false;
console.log(e || f);
