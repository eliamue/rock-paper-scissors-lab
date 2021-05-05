export function rpsThrow(randoNumber) {
    if (randoNumber >= 0.75) {
        return 'paper';
    } else if (randoNumber <= 0.25){
        return 'scissors';
    } else {
        return 'rock';
    }
}
export function rpsCompare(userThrow, computerThrow) {
    if (
        (userThrow === 'rock' && computerThrow === 'scissors')
        || (userThrow === 'scissors' && computerThrow === 'paper')
        || (userThrow === 'paper' && computerThrow === 'rock')
    ) {
        return 'win';
    } else if (userThrow === computerThrow) {
        return 'draw';
    } else {
        return 'lose';
    }
}
