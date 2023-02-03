function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose, paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player Win, rocks beat scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose scissors beats paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player Win, paper beats  rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player win, scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose rocks beat scissors"
    }
    
}
   
let playerSelection = prompt("Say something");
const computerSelection = getComputerChoice();


function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    const choice = pick[Math.floor(Math.random() * pick.length)];
    return choice
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
     }
}