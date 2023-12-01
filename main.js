"use strict";
let level = 0;
let score = 0;
let pointsPerClick = 1; // Punkte pro Klick
let levelLimits = [
  100,
  500,
  1000,
  2500,
  5000,
  10000,
  25000,
  50000,
  100000,
  1000000,
  Infinity,
];

// Change Interface | Switch between Shop, Leaderboard, Research, etc

// Function | Change to Shop
function changeInterfaceShop() {
  document.getElementById("research").style.marginLeft = "-300px";
  document.getElementById("leaderboard").style.marginLeft = "-300px";
  document.getElementById("shop").style.marginLeft = "20px";
}
// Function | Change to Leaderboard
function changeInterfaceLeaderboard() {
  document.querySelector("#research").style.marginLeft = "-300px";
  document.querySelector("#leaderboard").style.marginLeft = "20px";
  document.querySelector("#shop").style.marginLeft = "-300px";
}
// Function | Change to Research
function changeInterfaceResearch() {
  document.querySelector("#research").style.marginLeft = "20px";
  document.querySelector("#leaderboard").style.marginLeft = "-300px";
  document.querySelector("#shop").style.marginLeft = "-300px";
}  
// Shop | Left Button | Change to Leaderboard
document.getElementById("shop-left").addEventListener("click", function () {
  changeInterfaceLeaderboard();
});
// Shop | Right Button | Change to Research
document.getElementById("shop-right").addEventListener("click", function () {
  changeInterfaceResearch();
});
// Research | Left Button | Change to Shop
document.getElementById("research-left").addEventListener("click", function () {
  changeInterfaceShop();
});
// Research | Right Button | Change to Leaderboard
document
  .getElementById("research-right")
  .addEventListener("click", function () {
    changeInterfaceLeaderboard();
  });
// Leaderboard | Left Button | Change to Research
document
  .getElementById("leaderboard-left")
  .addEventListener("click", function () {
    changeInterfaceResearch();
  });
// Leaderboard | Right Button | Change to Shop
document
  .getElementById("leaderboard-right")
  .addEventListener("click", function () {
    changeInterfaceShop();
  });

// BIG BUTTON
document.querySelector("#clicker").addEventListener("click", function () {
  score += pointsPerClick; // Erhöht den Score um die Anzahl der Punkte pro Klick
});

let scorechecker = setInterval(() => {
  if (score > levelLimits[level]) {
    score = levelLimits[level];
  }
}, 1);

let repeatend = setInterval(() => {
  document.querySelector("#score").textContent = score + " $";
}, 1);
