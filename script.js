"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNum = function (value) {
  document.querySelector(".number").textContent = value;
};

const displayScore = function (value) {
  document.querySelector(".score").textContent = value;
};

//Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage("No Number ⛔");
    //when the guess is true
  } else if (guess === secretNumber) {
    displayMessage("Correct Number 🎉🎉🎉");
    displayNum(secretNumber);
    document.querySelector("body").style.background =
      "linear-gradient(to top left,#74E291 , #0D9276)";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📉 Your number is High"
          : "📈 Your number is Low"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost the game 😭");
      displayScore(0);
    }
  }
});

//Again Button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //reset values
  displayScore(score);
  document.querySelector("body").style.background =
    "linear-gradient(to top left, #0f2167, #4cb9e7)";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start Guessing ...🤭");
  displayNum("?");
  document.querySelector(".guess").value = "";
});

//modal window (rules)
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelector(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnShowModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});