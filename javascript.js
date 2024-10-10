let getComputerChoice = () => {
    randomNum = Math.random()
    console.log(`random num: ${randomNum}`)

    if (randomNum <= 0.34) {
        return 'rock'
    } else if (randomNum <= 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#computerScore");
const result = document.querySelector("#result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));


function playRound(humanChoice) {
    if (roundsPlayed < totalRounds) {
        const computerChoice = getComputerChoice();
        humanWins = (humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') || 
        (humanChoice == 'scissors') && (computerChoice == 'paper')

        computerWins = (computerChoice == 'rock' && humanChoice == 'scissors') || 
        (computerChoice == 'paper' && humanChoice == 'rock') || 
        (computerChoice == 'scissors') && (humanChoice == 'paper')

        if (humanWins) {
            humanScore++
            console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You won!`)
        } else if (computerWins) {
            computerScore++
            console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You lose :(`)
        } else {
            console.log(`Tied! You both chose ${humanChoice}`)
        }

        roundsPlayed++

        userScore.textContent = humanScore;
        compScore.textContent = computerScore;
        totalRounds.textContent = roundsPlayed;
    }

    if (roundsPlayed === totalRounds) {
        if (humanScore > computerScore) {
            result.textContent = `You've won ${humanScore} to ${computerScore}!`
        } else if (humanScore < computerScore) {
            result.textContent = `You've lost ${humanScore} to ${computerScore} :(`
        } else {
            result.textContent = `You've tied ${humanScore} to ${computerScore}!`
        }
    }
}
