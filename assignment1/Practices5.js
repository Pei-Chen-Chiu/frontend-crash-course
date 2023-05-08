// // function

// // 1. Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
// const isEven = (number) => {
//     if (number % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(isEven(3));

// // 2. Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
// const isLeapYear = (year) => {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(isLeapYear(1900))
// // 3. Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true
// const isPrime = (num) => {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// };

// console.log(isPrime(4))

// 4. Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
const findMix = (a, b, c)=> {
    let num = a;
    if (b > num) {
        num = b;
    }
    if (c > num) {
        num = c;
    }
    return num
}

console.log(findMix(111, 7, 2))