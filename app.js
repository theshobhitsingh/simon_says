let gameSequence = [];
let userSequence = [];
let colors = ["red", "yellow", "green", "blue"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (!start) {
    console.log("Game started");
    start = true;
    levelUp();
  }
});

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}

function levelUp() {
  userSequence = [];
  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = colors[randomIndex];
  let randomButton = document.querySelector(`.${randomColor}`);
  gameSequence.push(randomColor);
  console.log(gameSequence);
  h2.innerText = `Level ${level}`;
  buttonFlash(randomButton);
  level++;
}

function checkAnswer(indx) {
  if (gameSequence[indx] === userSequence[indx]) {
    console.log("The sequence was same");
    if (gameSequence.length === userSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    console.log("Game Over!");
    h2.innerHTML = `GAME OVER! Your score was <b>${level}.</b><br>
    Press any key to restart`;
    start = false;
    level = 0;
    gameSequence = [];
    userSequence = [];
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.classList[1];
  userSequence.push(userColor);
  console.log(userSequence);
  checkAnswer(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
