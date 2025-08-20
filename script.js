console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let sign = prompt("Enter 'rock', 'paper', or 'scissors'");
    return sign;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;