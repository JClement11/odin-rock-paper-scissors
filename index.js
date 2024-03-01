function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}
function getPlayerChoice() {
    let playerChoice = prompt("Do you pick Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

