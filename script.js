let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    let number = Math.floor(Math.random() * 9);
    return number;
}

console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, SecretNumber){
    let humanGuessToSecret = Math.abs(humanGuess - SecretNumber);
    let computerGuessToSecret = Math.abs(computerGuess - SecretNumber);
    if (humanGuessToSecret < computerGuessToSecret) {
        console.log(`Human wins`);
        return true;
    } else if (computerGuessToSecret < humanGuessToSecret){
            console.log('Computer wins')
        return false;
        } else if (humanGuessToSecret === computerGuessToSecret){
        console.log(`Human wins`);
        return true;
    }


}

console.log(compareGuesses());
console.log(generateTarget());
