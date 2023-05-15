// Practices 4 - create dom node

// 1. create a simple html like example

// 2. Append a p tag with “My first DOM created.” into container.
console.log('-'.repeat(15) + '2' + '-'.repeat(15));

const container = document.getElementsByClassName("container")[0];
if (container !== null) {
    // console.log("container !== null");
    const p = document.createElement("p");
    const text = document.createTextNode("My first DOM created.");
    p.appendChild(text);
    console.log(p);
    container.appendChild(p);
    // console.log(container);
}


// 3. Append a ul tag.
console.log('-'.repeat(15) + '3' + '-'.repeat(15));

const ul = document.createElement("ul");
container.appendChild(ul);
console.log(ul);


// 4. Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop. 
console.log('-'.repeat(15) + '4' + '-'.repeat(15));

const items = ["red", "blue", "yellow"];
for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    const text = document.createTextNode(items[i]);
    li.appendChild(text);
    ul.appendChild(li);
    console.log(li);
}
