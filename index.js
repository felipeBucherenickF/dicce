const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const player1 = getRandom(1, 6);
const player2 = getRandom(1, 6);

if (player1 === player2) {
  document.querySelector("h1").textContent = "Draw !";
}
if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 wins !";
}
if (player2 > player1) {
  document.querySelector("h1").textContent = "Player 2 wins !";
}

// =======================================================================

const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

if (player1 === 1) {
  dice1.querySelector(".dot5").classList.add("show");
}
if (player2 === 1) {
  dice2.querySelector(".dot5").classList.add("show");
}
// ---------------------------------------------------------------

if (player1 === 2) {
  dice1.querySelector(".dot3").classList.add("show");
  dice1.querySelector(".dot7").classList.add("show");
}
if (player2 === 2) {
  dice2.querySelector(".dot3").classList.add("show");
  dice2.querySelector(".dot7").classList.add("show");
}
// ---------------------------------------------------------------

if (player1 === 3) {
  dice1.querySelector(".dot3").classList.add("show");
  dice1.querySelector(".dot5").classList.add("show");
  dice1.querySelector(".dot7").classList.add("show");
}
if (player2 === 3) {
  dice2.querySelector(".dot3").classList.add("show");
  dice2.querySelector(".dot5").classList.add("show");
  dice2.querySelector(".dot7").classList.add("show");
}
// ---------------------------------------------------------------

if (player1 === 4) {
  dice1.querySelector(".dot1").classList.add("show");
  dice1.querySelector(".dot3").classList.add("show");
  dice1.querySelector(".dot7").classList.add("show");
  dice1.querySelector(".dot9").classList.add("show");
}
if (player2 === 4) {
  dice2.querySelector(".dot1").classList.add("show");
  dice2.querySelector(".dot3").classList.add("show");
  dice2.querySelector(".dot7").classList.add("show");
  dice2.querySelector(".dot9").classList.add("show");
}
// ---------------------------------------------------------------

if (player1 === 5) {
  dice1.querySelector(".dot1").classList.add("show");
  dice1.querySelector(".dot3").classList.add("show");
  dice1.querySelector(".dot5").classList.add("show");
  dice1.querySelector(".dot7").classList.add("show");
  dice1.querySelector(".dot9").classList.add("show");
}
if (player2 === 5) {
  dice2.querySelector(".dot1").classList.add("show");
  dice2.querySelector(".dot3").classList.add("show");
  dice2.querySelector(".dot5").classList.add("show");
  dice2.querySelector(".dot7").classList.add("show");
  dice2.querySelector(".dot9").classList.add("show");
}
// ---------------------------------------------------------------

if (player1 === 6) {
  dice1
    .querySelectorAll(".dot1,.dot3,.dot4,.dot6,.dot7,.dot9")
    .forEach((dot) => dot.classList.add("show"));
}
if (player2 === 6) {
  dice2
    .querySelectorAll(".dot1,.dot3,.dot4,.dot6,.dot7,.dot9")
    .forEach((dot) => dot.classList.add("show"));
}
// ---------------------------------------------------------------

console.log(player1);
console.log(player2);
