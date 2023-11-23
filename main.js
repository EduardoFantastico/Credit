"use strict";

let score = 0;
let pointsPerClick = 1; // Punkte pro Klick

document.querySelector("#clicker").addEventListener("click", function () {
  score += pointsPerClick; // Erhöht den Score um die Anzahl der Punkte pro Klick
  document.querySelector("#score").textContent = score;
});

let costOne = 10;

document.querySelector("#article1").addEventListener("click", function () {
  if (score >= costOne) {
    score -= costOne;
    costOne = Math.round(costOne * 1.2);
    pointsPerClick++; // Erhöht die Punkte pro Klick jedes Mal, wenn ein Artikel gekauft wird
    document.querySelector("#score").textContent = score; // Aktualisiert den Score sofort nach dem Kauf
  }
});
let costTwo;

let costThree;

let costFour;

let costFive;
