// Practices 5 - events

// 1. Create a text input and button called “add color”, 
//    when user click the button add the color in the text input into the list.
console.log('-'.repeat(15)+'1'+'-'.repeat(15));

const colorInput = document.getElementById('colorInput');
const addColorBtn = document.getElementById('addColorBtn');

addColorBtn.addEventListener('click', function () {
    const newColor = colorInput.value;
    
    if (newColor) {
        const li = document.createElement('li');
        li.textContent = newColor;
        console.log(li.textContent);
        ul.appendChild(li);
        colorInput.value = '';
    }
});
