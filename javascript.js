let getComputerChoice = () => {
    randomNum = Math.random()
    console.log(`random num: ${randomNum}`)
    let choice

    if (randomNum <= 0.34) {
        return 'rock'
    } else if (randomNum <= 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let choice = window.prompt("Which do you choose: Rock, Paper, or Scissors?");
    return choice.toLowerCase()
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanWins = (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors') && (computerChoice == 'paper')
        computerWins = (computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors') && (humanChoice == 'paper')
    
        if (humanWins) {
            humanScore++
            console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You won!`)
        } else if (computerWins) {
            computerScore++
            console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You lose :(`)
        } else {
            console.log(`Tied! You both chose ${humanChoice}`)
        }
    }

    for (let round = 0; round < 5; round++) {
        playRound(humanChoice=getHumanChoice(), computerChoice=getComputerChoice())
    }
    
    if (humanScore > computerScore) {
        console.log(`You scored ${humanScore} and the computer scored ${computerScore}. You won!`)
    } else if (humanScore < computerScore) {
        console.log(`You scored ${humanScore} and the computer scored ${computerScore}. You lost :(`)
    } else {
        console.log(`You and the computer scored ${humanScore}. You've tied!`)
    }
}

playGame()