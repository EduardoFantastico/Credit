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

// Folienwechsel | Thomas ändert noch die Namen (Er macht das gerne)
function folieShop() {
  document.getElementById("research").style.marginLeft = "-300px";
  document.getElementById("Leaderboard").style.marginLeft = "-300px";
  document.getElementById("shop").style.marginLeft = "20px";
}

function folieLeaderboard() {
  document.querySelector("#research").style.marginLeft = "-300px";
  document.querySelector("#Leaderboard").style.marginLeft = "20px";
  document.querySelector("#shop").style.marginLeft = "-300px";
}

function folieResearch() {
  document.querySelector("#research").style.marginLeft = "20px";
  document.querySelector("#Leaderboard").style.marginLeft = "-300px";
  document.querySelector("#shop").style.marginLeft = "-300px";
}

let folie = 1;

document.getElementById("shop-left").addEventListener("click", function () {
  if (folie === 3) {
    folie = 1; // Shop
    folieShop();
  } else if (folie === 1) {
    folie = 2; // Research
    folieResearch();
  } else if (folie === 2) {
    folie = 3; // Leaderboard
    folieLeaderboard();
  }
});

document.getElementById("shop-right").addEventListener("click", function () {
  if (folie === 3) {
    folie = 2;
    folieResearch();
  } else if (folie === 1) {
    folie = 3;
    folieLeaderboard();
  } else if (folie === 2) {
    folie = 1;
    folieShop();
  }
});

document.getElementById("research-left").addEventListener("click", function () {
  if (folie === 3) {
    folie = 1; // Shop
    folieShop();
  } else if (folie === 1) {
    folie = 2; // Research
    folieResearch();
  } else if (folie === 2) {
    folie = 3; // Leaderboard
    folieLeaderboard();
  }
});

document
  .getElementById("research-right")
  .addEventListener("click", function () {
    if (folie === 3) {
      folie = 2;
      folieResearch();
    } else if (folie === 1) {
      folie = 3;
      folieLeaderboard();
    } else if (folie === 2) {
      folie = 1;
      folieShop();
    }
  });

document
  .getElementById("leaderboard-left")
  .addEventListener("click", function () {
    if (folie === 3) {
      folie = 1; // Shop
      folieShop();
    } else if (folie === 1) {
      folie = 2; // Research
      folieResearch();
    } else if (folie === 2) {
      folie = 3; // Leaderboard
      folieLeaderboard();
    }
  });

document
  .getElementById("leaderboard-right")
  .addEventListener("click", function () {
    if (folie === 3) {
      folie = 2;
      folieResearch();
    } else if (folie === 1) {
      folie = 3;
      folieLeaderboard();
    } else if (folie === 2) {
      folie = 1;
      folieShop();
    }
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

let wiederholung = setInterval(() => {
  document.querySelector("#score").textContent = score + " $";
}, 1);
