// Practices 2 - Object

// 1. Create an object called person with properties for name, age, and gender. 
//    Assign values to these properties and then display the name and age of the person.
console.log('-'.repeat(15)+'1'+'-'.repeat(15));

const person = {
    name: "Meow",
    age: 2,
    gender: "Male"
};

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);


// 2. Add a method to the person object created in the previous assignment called greet. 
//    The method should display a greeting message “Hello”. 
//    Invoke the greet method to see the greeting message.
console.log('-'.repeat(15)+'2'+'-'.repeat(15));

person.greet = function () {
    console.log("Hello");
}

// console.log(person);
person.greet();


// 3. Add a properties called friends to the person which contains several names and print it.
console.log('-'.repeat(15)+'3'+'-'.repeat(15));

person.friends = ["Pei", "Pee", "Paa"];
console.log(person.friends);
