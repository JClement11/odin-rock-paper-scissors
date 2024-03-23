let playerScore = 0;
let computerScore = 0;
const text = document.createElement("p");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}

/*
function getPlayerChoice() {
    let playerChoice = prompt("Do you pick Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}
*/

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        document.querySelector(".outcome");
        text.textContent = "It's a tie!";
        outcomeDiv.appendChild(text);
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        document.querySelector(".outcome");
        text.textContent = "You lose the round! Paper beats Rock!";
        outcomeDiv.appendChild(text);
        computerScore++;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        document.querySelector(".outcome");
        text.textContent = "You win the round! Rock beats Scissors!";
        outcomeDiv.appendChild(text);
        playerScore++;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        document.querySelector(".outcome");
        text.textContent = "You win the round! Paper beats Rock!";
        outcomeDiv.appendChild(text);
        playerScore++;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        document.querySelector(".outcome");
        text.textContent = "You lose the round! Scissors beats Paper!";
        outcomeDiv.appendChild(text);
        computerScore++;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        document.querySelector(".outcome");
        text.textContent = "You lose the round! Rock beats Scissors!";
        outcomeDiv.appendChild(text);
        computerScore++;
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        document.querySelector(".outcome");
        text.textContent = "You win the round! Scissors beats Paper!";
        outcomeDiv.appendChild(text);
        playerScore++;
    }
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
}

/*
*function playGame() {
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
*/

rockButton.addEventListener("click", () => {
    playerSelection = "ROCK";
    playRound(playerSelection);
});
paperButton.addEventListener("click", () => {
    playerSelection = "PAPER";
    playRound(playerSelection);
});
scissorsButton.addEventListener("click", () => {
    playerSelection = "SCISSORS";
    playRound(playerSelection);
});
