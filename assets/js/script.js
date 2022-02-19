// console.log('hello from js. I hope you are having fun');
const myButton = document.querySelector('#superCoolButton');
const myName = 'Phil'; // string
const age = 22; // number
const likesSoccer = true; // boolean

let firstName = null;
firstName = "Phil";

// console.log(firstName);

function addDate() {
    const dateContainer = document.getElementById('demo').innerHTML = Date();
}

function greet(firstName, age) {
    // console.log('Hello ' + firstName + '. You are ' + age + ' years old');
    console.log(`Hello ${firstName}. You are ${age} years old`);
}
greet('Phil', 23);
greet('James', 24);
greet('Devin', 25);

myButton.addEventListener('click', addDate);