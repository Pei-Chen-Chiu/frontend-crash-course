// Practices 3 - access dom node
// 1. Create a simple html with some tags.

// 2. Using getElementById to get a element and print it.
console.log('-'.repeat(15)+'2'+'-'.repeat(15));

let ul_id = document.getElementById("ul_id")
console.log(ul_id.textContent)


// 3. Using getElementsByClassName to get elements and print all.
console.log('-'.repeat(15)+'3'+'-'.repeat(15));

let ul_class = document.getElementsByClassName("ul_class")
// console.log(ul_class)
for (let i = 0; i < ul_class.length; i++) {
    // console.log(ul_class[i]);
    console.log(ul_class[i].textContent);
}


// 4. Using querySelector to get a element by id and print it.
console.log('-'.repeat(15)+'4'+'-'.repeat(15));

let ul_qid = document.querySelector("#ul_id");
console.log(ul_qid.textContent);


// 5. Using querySelector to get a element by class and print it.
console.log('-'.repeat(15)+'5'+'-'.repeat(15));

let ul_qcl1 = document.querySelector('.ul_class');
console.log(ul_qcl1.textContent);


// 6. Using querySelectorAll to get elements by class and print all.
console.log('-'.repeat(15)+'6'+'-'.repeat(15));

let ul_qclA = document.querySelectorAll('.ul_class');
// console.log(ul_qclA);
for (let i = 0; i < ul_qclA.length; i++) {
    console.log(ul_qclA[i].textContent);
    // console.log(ul_class[i].textContent);
}
