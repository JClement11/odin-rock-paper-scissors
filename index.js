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
        console.log("You lose the round! Paper beats Rock!");
        computerScore++;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You win the round! Rock beats Scissors!");
        playerScore++;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You win the round! Paper beats Rock!");
        playerScore++;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You lose the round! Scissors beats Paper!");
        computerScore++;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You lose the round! Rock beats Scissors!");
        computerScore++;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You win the round! Scissors beats Paper!");
        playerScore++;
    }
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
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
        console.log("It's a tie! Play again?");
    }
}

playGame();
