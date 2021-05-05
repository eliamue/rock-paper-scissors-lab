// IMPORT MODULES under test here:
import { evaluateGuess } from '../utils.js'

const test = QUnit.test;

test('return win if user defeats computer with rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedRock = true;
    const expectedPaper = true;
    const expectedScissors = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actualRock = didUserGuessCorrect('rock', 'scissors');
    const actualPaper = didUserGuessCorrect('paper', 'rock');
    const actualScissors = didUserGuessCorrect('scissors', 'paper');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualRock, expectedRock);
    expect.equal(actualPaper, expectedPaper);
    expect.equal(actualScissors, expectedScissors);
});