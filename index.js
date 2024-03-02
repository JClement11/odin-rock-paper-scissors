let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Do you pick Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
    }
}

function playGame() {
    for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
        playRound();
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (playerScore < computerScore) {
        console.log("Better luck next time! You lost the game!");
    }
    else {
        console.log("It's a tie! Try again?");
    }
}

