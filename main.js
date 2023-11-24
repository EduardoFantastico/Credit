"use strict";

let score = 0;
let pointsPerClick = 1; // Punkte pro Klick

// BIG BUTTON
document.querySelector("#clicker").addEventListener("click", function () {
  score += pointsPerClick; // Erhöht den Score um die Anzahl der Punkte pro Klick

  document.querySelector("#score").textContent = score;
});

// FIRST ARTICLE
let costOne = 10;
let counterOne = 0;

document.querySelector("#article1").addEventListener("click", function () {
  if (score >= costOne) {
    score -= costOne;
    costOne = Math.round(costOne * 1.2);
    pointsPerClick++; // Erhöht die Punkte pro Klick jedes Mal, wenn ein Artikel gekauft wird
    document.querySelector("#score").textContent = score; // Aktualisiert den Score sofort nach dem Kauf
    counterOne++;
    document.querySelector("#article1").textContent = costOne;
    document.querySelector("#counter1").textContent = counterOne + "x";
  }
});

// SECOND ARTICLE
let costTwo = 100; // Angenommen, dies ist der anfängliche Preis für 'article2'
let counterTwo = 0;

function increaseScore() {
  score++;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article2").addEventListener("click", function () {
  if (score >= costTwo) {
    score -= costTwo;
    costTwo = Math.round(costTwo * 1.2);
    setInterval(increaseScore, 500);
    document.querySelector("#score").textContent = score; // Aktualisiert den Score sofort nach dem Kauf
    counterTwo++;
    document.querySelector("#article2").textContent =
      "Clicking Tommy" + costTwo + " $";
    document.querySelector("#counter2").textContent = counterTwo + "x";
  }
});

// THIRD ARTICLE
let costThree;
let counterThree = 0;

let costFour;
let counterFour = 0;

let costFive;
let counterFive = 0;
