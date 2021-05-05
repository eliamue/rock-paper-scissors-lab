export function rockPaperScissors(userThrow, computerThrow) {
    if (
        (userThrow === 'rock' && computerThrow === 'scissors')
        || (userThrow === 'scissors' && computerThrow === 'paper')
        || (userThrow === 'paper' && computerThrow === 'rock')
    ) {
        return 'userWin';
    } else if (userThrow === computerThrow) {
        return 'draw';
    } else {
        return 'computerWin';
    }
}
// const rockButton = document.getElementById('rock-button');
// const paperButton = document.getElementById('paper-button');
// const scissorsButton = document.getElementById('scissors-button');
// const playButton = document.getElementById('play-button');