// 1. Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’ if age < 18
// let age = parseInt(prompt('Please enter your age:'), 10);
let age = 20;

if (age >= 18) {
    console.log('can vote');
} else {
    console.log('can\'t vote');
}

// 2. Check if a number is odd or even.
// let num = parseInt(prompt('Please enter a number:'), 10);
let num = 1;
// let num=12;

if (num % 2 === 0) {
    console.log(num + ' is even.');
} else {
    console.log(num + ' is odd.');
}

// 3. Declare two variables and check which one is big or they’re equaled.
// let x = parseInt(prompt('Please enter the value of x:'), 10);
// let y = parseInt(prompt('Please enter the value of y:'), 10);

// let x = 5;
// let y = 10;

// let x = 10;
// let y = 5;

let x = 5;
let y = 5;

if (x > y) {
    console.log('x is bigger than y');
} else if (x < y) {
    console.log('y is bigger than x');
} else {
    console.log('x and y are equal');
}


// 4. Declare three variables and check which one is big or they’re equaled.
// let a = parseInt(prompt('Enter the value of a:'));
// let b = parseInt(prompt('Enter the value of b:'));
// let c = parseInt(prompt('Enter the value of c:'));

let a = 2;
let b = 2;
let c = 2;



if (a === b && b === c) {
    console.log('a, b and c are equal')
} else if (a === c && c > b) {
    console.log('a and c are both the biggest')
} else if (b === c && c > a) {
    console.log('b and c are both the biggest')
} else if (a === b && b > c) {
    console.log('a and b are both the biggest')
} else if (a > b && a > c) {
    console.log('a is the biggest');
} else if (b > a && b > c) {
    console.log('b is the biggest');
} else if (c > a && c > b) {
    console.log('c is the biggest');
}


// 5. Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range
let min = 10;
let max = 100;
let no = 10;

if (no >= min && no <= max) {
    console.log(`${no} is in the range of ${min} and ${max}`);
} else {
    console.log(`${no} is not in the range of ${min} and ${max}`);
}

// 6. Declare a variable called year and check the year is leap year or not.

let year =1900;
// 是 4 非 100 的倍數 閏年
// 是 100 非 400 倍數 平年
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}