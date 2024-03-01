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
        console.log("You lose! Paper beats Rock!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You win! Rock beats Scissors!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You win! Paper beats Rock!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You lose! Scissors beats Paper!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You lose! Rock beats Scissors!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You win! Scissors beats Paper!");
    }
}


