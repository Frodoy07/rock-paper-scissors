"use strict";

let humanScore = 0;
let computerScore = 0;
const choice = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

// Function returns "Rock", "Paper", "Scissors" at random.
const getComputerChoice = function () {
  return choice[Math.floor(Math.random() * 3) + 1];
};

// Function returns human score
const getHumanChoice = function () {
  const choice = prompt("Choose between Rock, Paper and Scissors.")
    .toLowerCase()
    .trim();

  return choice;
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beat Rock");
      computerScore++;
    } else {
      console.log("No winner!!!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beat Rock");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beat Paper");
      computerScore++;
    } else {
      console.log("No winner!!!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beat Paper");
      humanScore++;
    } else if (computerChoice == "rock") {
      console.log("You lose! Rock beat Scissors");
      computerScore++;
    } else {
      console.log("No winner!!!");
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.group();
    console.log("You are the winner of this Round! 🍾");
    console.log(`You won ${humanScore} - ${computerScore}`);
    console.groupEnd();
  } else if (computerScore > humanScore) {
    console.group();
    console.log("You are the looser of this Round! 😈");
    console.log(`You lost ${humanScore} - ${computerScore}`);
    console.groupEnd();
  } else {
    console.log("This round ends in a tie 🤝");
  }
}

//init
playGame();
