// import functions and 
import { rpsThrow, rpsCompare } from './utils.js';

//grab DOM elements
const button = document.getElementById('submit-button');
const totalThrowsAndWinsDisplay = document.getElementById('throws-and-wins');

// initialize state
let totalThrows = 0;
let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const rpsSelection = document.querySelector('input:checked');
    const userThrow = rpsSelection.value;
    let randomNumber = Math.random();
    if (rpsCompare(userThrow, rpsThrow(randomNumber)) === 'win') {
        totalThrows ++;
        totalWins ++;
        totalThrowsAndWinsDisplay.textContent = `WINNER! Yo you won like ${totalWins} out of ${totalThrows} times! Congrats, mate!`;
    } else if (rpsCompare(userThrow, rpsThrow(randomNumber)) === 'draw') {
        totalThrows ++;
        totalDraws ++;
        totalThrowsAndWinsDisplay.textContent = `Aw, that's was a draw. You've had ${totalDraws} draws and still won ${totalWins} out of ${totalThrows} times, so try not to be terrible next time.`;
    } else if (rpsCompare(userThrow, rpsThrow(randomNumber)) === 'lose') {
        totalThrows ++;
        totalLosses ++;
        totalThrowsAndWinsDisplay.textContent = `Looooooser, you lost. Seriously, just ${totalWins} wins out of ${totalThrows} games? You've lost ${totalLosses} times!? Make better choices.`;
    }
});