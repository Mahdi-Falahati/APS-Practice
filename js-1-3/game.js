// game time
const min = parseInt(prompt("Please Enter a Min Number :"));
const max = parseInt(prompt("Please Enter a Max Number :"));

const Random = Math.ceil(Math.random() * (max - min) + min);

let guess = parseInt(prompt("Please Enter Your Guess :"));

let counter = 1;
let isValid = true;

while (isValid) {
    counter++
    guess = parseInt(prompt("Please Enter Your Guess :"));
    if (guess === Random) {
        isValid = false;
        // break;
    }
}

console.log(`wooowww your are find a random number
(random number is ${Random} your guess count ${counter}) `);
