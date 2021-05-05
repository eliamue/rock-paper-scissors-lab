// IMPORT MODULES under test here:
import { rpsCompare } from '../utils.js';

const test = QUnit.test;

test('return win if user defeats computer with rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedRock = 'win';
    const expectedPaper = 'win';
    const expectedScissors = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const actualRock = rpsCompare('rock', 'scissors');
    const actualPaper = rpsCompare('paper', 'rock');
    const actualScissors = rpsCompare('scissors', 'paper');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualRock, expectedRock);
    expect.equal(actualPaper, expectedPaper);
    expect.equal(actualScissors, expectedScissors);
});