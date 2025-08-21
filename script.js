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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
          console.log("You lose! Paper beats Rock");
          computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
          console.log("You lose! Scissors beats Paper");
          computerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
          console.log("You lose! Rock beats Scissors");
          computerScore++;
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
          console.log("You win! Rock beats Scissors");
          humanScore++;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
          console.log("You win! Paper beats Rock");
          humanScore++;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
          console.log("You win! Scissors beats Paper");
          humanScore++;
      } else if (humanChoice === computerChoice) {
          console.log("Draw!");
      }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final score: Human " + humanScore + " - Computer " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else if (humanScore === computerScore) {
        console.log("Draw!");
    }
}

playGame();
