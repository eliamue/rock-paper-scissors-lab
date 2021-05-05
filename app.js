// import functions and 
import function evaluateGuess
//grab DOM elements
const button = document.getElementById('submit-button');
const currentResultDiv = document.getElementById('rps-button');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');

// initialize state
let totalThrows = 0;
let totalWins = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {

    const randomNumber = Math.random();

    let actualFlip = 'rock';

    if (randomNumber >= 0.75) {

        let actualFlip = 'paper';

    } else if (randomNumber <= 0.25){

        let actualFlip = 'scissors';

    }
    const selectedRadio = document.querySelector('input:checked');
    console.log(selectedRadio.value);

    const userGuess = selectedRadio.value;
});