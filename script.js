let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    let number = Math.floor(Math.random() * 9);
    return number;
}

// console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, secretNumber){
    humanGuess = Math.abs(humanGuess - secretNumber);
    // console.log(humanGuess);
    computerGuess = Math.abs(computerGuess - secretNumber);
    if (humanGuess < computerGuess) {
        console.log(`Human wins`);
        return true;
    } else if (computerGuess < humanGuess){
            console.log('Computer wins')
        return false;
        } else if (humanGuess === computerGuess){
        console.log(`Human wins the tie`);
        return true;
    }


}

function updateScore(winner){
    if (winner === 'human') {
    humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

console.log(compareGuesses(10, 6, 8));
console.log(compareGuesses(4, 18, 29));
console.log(compareGuesses(16, 40, 25));
