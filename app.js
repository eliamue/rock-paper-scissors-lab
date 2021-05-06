// import functions and 
import { rpsThrow, rpsCompare } from './utils.js';

//grab DOM elements
const button = document.getElementById('submit-button');
const totalThrowsAndWinsDisplay = document.getElementById('throws-and-wins');
const reset = document.getElementById('reset-button');
const resetsDisplay = document.getElementById('resets-display');

// initialize state
let totalThrows = 0;
let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;
let totalResets = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const rpsSelection = document.querySelector('input:checked');
    const userThrow = rpsSelection.value;
    let randomNumber = Math.random();
    if (rpsCompare(userThrow, rpsThrow(randomNumber)) === 'win') {
        totalThrows ++;
        totalWins ++;
        totalThrowsAndWinsDisplay.style.display = 'block';
        totalThrowsAndWinsDisplay.textContent = `WINNER! Yo you won ${totalWins} out of ${totalThrows} times! Congrats, mate! You've had ${totalDraws} draws and ${totalLosses} losses, so let's hope you keep winning!`;
        reset.style.display = 'none';
    } else if (rpsCompare(userThrow, rpsThrow(randomNumber)) === 'draw') {
        totalThrows ++;
        totalDraws ++;
        totalThrowsAndWinsDisplay.style.display = 'block';
        totalThrowsAndWinsDisplay.textContent = `Aw, that's was a draw. You've had ${totalDraws} draws and still won ${totalWins} out of ${totalThrows} times, so try not to be terrible next time or add to your loss total of ${totalLosses}.`;
        reset.style.display = 'none';
    } else if (rpsCompare(userThrow, rpsThrow(randomNumber)) === 'lose') {
        totalThrows ++;
        totalLosses ++;
        totalThrowsAndWinsDisplay.style.display = 'block';
        totalThrowsAndWinsDisplay.textContent = `Looooooser, you lost. Seriously, just ${totalWins} wins out of ${totalThrows} games? You've lost ${totalLosses} times!? Make better choices. You've even had ${totalDraws} draws, and we are not amused.`;
        reset.style.display = 'block';
    }
});

reset.addEventListener('click', () => {
    totalThrows = 0;
    totalDraws = 0;
    totalWins = 0;
    totalLosses = 0;
    totalResets++;
    totalThrowsAndWinsDisplay.style.display = 'none';
    resetsDisplay.textContent = `You have reset ${totalResets} times.`;
});