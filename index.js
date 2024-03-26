let playerScore = 0;
let computerScore = 0;
const displayChoices = document.createElement("p");
const outcomeText = document.createElement("p");
const currentScore = document.createElement("p");
const winner = document.createElement("p");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");

function getComputerChoice() {
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "It's a tie!";
            outcomeDiv.appendChild(displayChoices);
            outcomeDiv.appendChild(outcomeText);
        }
        else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "You lose the round! Paper beats Rock!";
            outcomeDiv.appendChild(displayChoices); 
            outcomeDiv.appendChild(outcomeText);
            computerScore++;
        }
        else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "You win the round! Rock beats Scissors!";
            outcomeDiv.appendChild(displayChoices);
            outcomeDiv.appendChild(outcomeText);
            playerScore++;
        }
        else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "You win the round! Paper beats Rock!";
            outcomeDiv.appendChild(displayChoices);
            outcomeDiv.appendChild(outcomeText);
            playerScore++;
        }
        else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "You lose the round! Scissors beats Paper!";
            outcomeDiv.appendChild(displayChoices);
            outcomeDiv.appendChild(outcomeText);
            computerScore++;
        }
        else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "You lose the round! Rock beats Scissors!";
            outcomeDiv.appendChild(displayChoices);
            outcomeDiv.appendChild(outcomeText);
            computerScore++;
        }
        else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            document.querySelector(".outcome");
            displayChoices.textContent = `Player: ${playerSelection} | Computer: ${computerSelection}`;
            outcomeText.textContent = "You win the round! Scissors beats Paper!";
            outcomeDiv.appendChild(displayChoices);
            outcomeDiv.appendChild(outcomeText);
            playerScore++;
        }
        document.querySelector(".outcome");
        currentScore.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;;
        outcomeDiv.insertBefore(currentScore, displayChoices);
    }

    if (playerScore === 5) {
        winner.textContent = "Congratulations! You win the game!";
        outcomeDiv.insertBefore(winner, currentScore);    }
    else if (computerScore === 5) {
        winner.textContent = "Better luck next time! The computer wins!";
        outcomeDiv.insertBefore(winner, currentScore);
    }   
}

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





/*
function getPlayerChoice() {
    let playerChoice = prompt("Do you pick Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}
*/

/*
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
*/


