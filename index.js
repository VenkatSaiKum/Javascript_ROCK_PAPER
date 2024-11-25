const rulesBtn = document.querySelectorAll(".rules-btn");
const nextBtn = document.getElementById("next-btn");
const playAgainBtn = document.querySelector("#plyagn");
const replayBtn = document.querySelector("#replay");
const crossBtn = document.getElementById("cross");

const rulesbox = document.getElementById("rulesbox");


const winGame = document.querySelector(".wingame");


const displaybox = document.getElementById("displaybox");


const resultbox = document.getElementById("resultbox");
const userResult = document.querySelector(".userresult");
const pcResult = document.querySelector(".pcresult");
let resultText1 = document.getElementById("resultbox1");
let resultText2 = document.getElementById("resultbox2");
let picked = document.querySelectorAll(".picked");

const computerScore = document.getElementById("computerscore");
const userScore = document.getElementById("userscore");


let score = {
  user: 0,
  computer: 0,
};

if (localStorage.getItem("score")) {
  score = JSON.parse(localStorage.getItem("score"));
}

userScore.innerHTML = score.user;
computerScore.innerHTML = score.computer;


const result = {
  WIN: "YOU WIN",
  LOST: "YOU LOST",
  TIEUP: "TIE UP",
};


rulesBtn.forEach((element) => {
  element.addEventListener("click", () => {
    rulesbox.style.display = "block";
  });
});

crossBtn.addEventListener("click", () => {
  rulesbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  displaybox.style.display = "none";
  resultbox.style.display = "none";
  winGame.style.display = "flex";
});

playAgainBtn.addEventListener("click", playAgain);

replayBtn.addEventListener("click", playAgain);


function playAgain() {
  displaybox.style.display = "grid";
  resultbox.style.display = "none";
  winGame.style.display = "none";
  nextBtn.style.display = "none";
}

const computer = ["rock", "paper", "scissor"];

function computerPicked() {
  let picked = Math.floor(Math.random() * computer.length);
  return computer[picked];
}

function setImg(picked) {
  let img = `<img src="./images/${picked}.png" alt=${picked} width="60px"/>`;
  return img;
}

function setStyles() {
  resultbox.style.marginTop = "3rem";

  picked.forEach((element) => {
    element.style.top = "300px";
  });

  for (let index = 0; index < 3; index++) {
    userResult.classList.remove("rock");
    userResult.classList.remove("paper");
    userResult.classList.remove("scissor");
    pcResult.classList.remove("rock");
    pcResult.classList.remove("paper");
    pcResult.classList.remove("scissor");

    playAgainBtn.style.display = "block";
    resultText2.style.display = "block";
    replayBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}


const startGame = (userPicked) => {
  let pcPicked = computerPicked();

  setStyles();

  let res;

  if (userPicked === pcPicked) {
    res = result.TIEUP;

    removeFocus();

    playAgainBtn.style.display = "none";
    replayBtn.style.display = "block";
    resultText2.style.display = "none";

    picked.forEach((element) => {
      element.style.top = "256px";
    });

    resultbox.style.marginTop = "6rem";
  } else if (
    (userPicked === "rock" && pcPicked === "scissor") ||
    (userPicked === "paper" && pcPicked === "rock") ||
    (userPicked === "scissor" && pcPicked === "paper")
  ) {
    res = result.WIN;

    nextBtn.style.display = "block";

    focusOnUserWinner();

    score.user++;
  } else {
    res = result.LOST;

    focusOnPCWinner();

    score.computer++;
  }
  displaybox.style.display = "none";
  resultbox.style.display = "flex";

  userResult.classList.add(`${userPicked}`);
  pcResult.classList.add(`${pcPicked}`);
  userResult.innerHTML = setImg(userPicked);
  pcResult.innerHTML = setImg(pcPicked);
  resultText1.innerHTML = res;

  userScore.innerHTML = score.user;
  computerScore.innerHTML = score.computer;

  localStorage.setItem("score", JSON.stringify(score));
};



let winUserBox1 = document.querySelector(".ubox1");
let winUserBox2 = document.querySelector(".ubox2");
let winUserBox3 = document.querySelector(".ubox3");
let winPcBox1 = document.querySelector(".pcbox1");
let winPcBox2 = document.querySelector(".pcbox2");
let winPcBox3 = document.querySelector(".pcbox3");

let focusOnUserWinner = () => {
  winPcBox1.classList.remove("winner-box-1");
  winPcBox2.classList.remove("winner-box-2");
  winPcBox3.classList.remove("winner-box-3");

  winUserBox1.classList.add("winner-box-1");
  winUserBox2.classList.add("winner-box-2");
  winUserBox3.classList.add("winner-box-3");
};
let focusOnPCWinner = () => {
  winUserBox1.classList.remove("winner-box-1");
  winUserBox2.classList.remove("winner-box-2");
  winUserBox3.classList.remove("winner-box-3");

  winPcBox1.classList.add("winner-box-1");
  winPcBox2.classList.add("winner-box-2");
  winPcBox3.classList.add("winner-box-3");
};

let removeFocus = () => {
  winUserBox1.classList.remove("winner-box-1");
  winUserBox2.classList.remove("winner-box-2");
  winUserBox3.classList.remove("winner-box-3");

  winPcBox1.classList.remove("winner-box-1");
  winPcBox2.classList.remove("winner-box-2");
  winPcBox3.classList.remove("winner-box-3");
};