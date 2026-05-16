"use strict";

const selectionButtons = document.querySelectorAll(".selection-button");
const humanSelectionDisplay = document.querySelector(".human");
const computerSelectionDisplay = document.querySelector(".computer");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset");
let computerScore = 0;
let humanScore = 0;

const getComputerChoice = function () {
  const choice = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
  };

  return choice[Math.floor(Math.random() * 3) + 1];
};

const playRound = function (humanChoice, computerChoice) {
  humanSelectionDisplay.textContent = humanChoice;
  computerSelectionDisplay.textContent = computerChoice;

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    message.textContent = `You win! ${humanChoice} beat ${computerChoice} 😁`;
    humanScore++;
    humanScoreDisplay.textContent = humanScore;
    endGame();
  } else if (humanChoice === computerChoice) {
    message.textContent = "Oops choices are the same, Try again!";
  } else {
    message.textContent = `You lose! ${computerChoice} beat ${humanChoice} 😁`;
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    if (computerScore) endGame();
  }
};

resetButton.addEventListener("click", function () {
  computerScore = 0;
  humanScore = 0;

  selectionButtons.forEach((e) => {
    e.disabled = false;
  });

  message.textContent = "";
  humanSelectionDisplay.textContent = "";
  computerSelectionDisplay.textContent = "";
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  this.style.display = "none";
});

const newRound = function () {
  selectionButtons.forEach((e) => {
    e.disabled = true;
  });

  resetButton.style.display = "block";
};

selectionButtons.forEach((e) => {
  e.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound(e.dataset.selection, computerSelection);
  });
});

function endGame() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      message.textContent = "You win! 🏆. Start another round 👍";
      newRound();
    } else {
      message.textContent = "You lose! 😆🫵. Start another round 😈";
      newRound();
    }
  } else {
    return;
  }
}
