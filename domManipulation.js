// Go Live, inspector, then Console- to see selected elements logged.

// Selecting elements by ID:
const mainTitle = document.getElementById('main-title');
console.log(mainTitle);

const subtitle = document.getElementById('subtitle');
console.log(subtitle);

const paragraphTitle = document.getElementById('paragraph-title');
console.log(paragraphTitle);

// Selecting elements by class:
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    console.log(box);
});

// Selecting elements by tag:
const divs = document.getElementsByTagName("div");
console.log(divs);