// Practices 1 - Array

// 1. Declare a array called fruits with some fruits in default.
console.log('-'.repeat(15)+'1'+'-'.repeat(15));

fruits = ["apple", "banana", "orange"]


// 2. Print every element in the fruits array declared above.
console.log('-'.repeat(15)+'2'+'-'.repeat(15));

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


// 3. Modify the third fruit to Durian and print the fruits array.
console.log('-'.repeat(15)+'3'+'-'.repeat(15));

fruits[2] = "Durian"
console.log(fruits)


// 4. Using push method to add two fruits into array.
console.log('-'.repeat(15)+'4'+'-'.repeat(15));
fruits.push("kiwi", "lemon");
console.log(fruits);


// 5. Remove the first fruit from the array.
console.log('-'.repeat(15)+'5'+'-'.repeat(15));

fruits.splice(0, 1);
// fruits.shift();
console.log(fruits);


// 6. Using for, while loop to print the element in the fruits array.
console.log('-'.repeat(15)+'6'+'-'.repeat(15));

console.log("Use a for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

console.log("\nUse a while loop:");
let j = 0;
while (j < fruits.length) {
    console.log(fruits[j]);
    j++;
}


// 7. Declare a array called numbers and set each element to its squared using map.
console.log('-'.repeat(15)+'7'+'-'.repeat(15));

const numbers = [2, 4, 6, 8, 10];
const squaredNum = numbers.map(num => num ** 2);

console.log(squaredNum);


// 8. Declare a array called numbers and filter the prime number using filter.
console.log('-'.repeat(15)+'8'+'-'.repeat(15));

const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNum = numbers.filter(isPrime);
console.log(primeNum);


// 9. Declare a array called numbers and computed the sum of the elements using reduce.
console.log('-'.repeat(15)+'9'+'-'.repeat(15));
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);