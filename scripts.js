"use strict";

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const choice = {
    1: "rock",
    2: "paper",
    3: "scissors",
  };

  return choice[Math.floor(Math.random() * 3) + 1];
};

const getHumanChoice = function () {
  const choice = prompt("Choose between Rock, Paper and Scissors.")
    .toLowerCase()
    .trim();

  return choice;
};

const rock = function (rival) {
  if (rival === "scissors") {
    console.log("You win! Rock beat Scissors");
    humanScore++;
  } else if (rival === "paper") {
    console.log("You Lose! Paper beat Rock");
    computerScore++;
  } else {
    console.log("Rock equals Rock");
  }
};

const paper = function (rival) {
  if (rival === "rock") {
    console.log("You win! Paper beat Rock");
    humanScore++;
  } else if (rival === "scissors") {
    console.log("You lose! Scissors beat Paper");
    computerScore++;
  } else {
    console.log("Paper equals Paper");
  }
};

const scissors = function (rival) {
  if (rival === "paper") {
    console.log("You win! Scissors beat Paper");
    humanScore++;
  } else if (rival == "rock") {
    console.log("You lose! Rock beat Scissors");
    computerScore++;
  } else {
    console.log("Scissors equals Scissors");
  }
};

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      rock(computerChoice);
    } else if (humanChoice === "paper") {
      paper(computerChoice);
    } else if (humanChoice === "scissors") {
      scissors(computerChoice);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You are the winner of this Round! 🍾");
    console.log(`You won ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log("You are the looser of this Round! 😈");
    console.log(`You lost ${humanScore} - ${computerScore}`);
  } else {
    console.log("This round ends in a tie 🤝");
  }
}

//init
playGame();
