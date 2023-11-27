"use strict";

let score = 0;
let pointsPerClick = 1; // Punkte pro Klick

// BIG BUTTON
document.querySelector("#clicker").addEventListener("click", function () {
  score += pointsPerClick; // Erhöht den Score um die Anzahl der Punkte pro Klick

  document.querySelector("#score").textContent = score + " $";
});

// FIRST ARTICLE
let costOne = 10;
let counterOne = 0;

document.querySelector("#article1").addEventListener("click", function () {
  if (score >= costOne) {
    score -= costOne;
    costOne = Math.round(costOne * 1.2);
    pointsPerClick++; // Erhöht die Punkte pro Klick jedes Mal, wenn ein Artikel gekauft wird
    document.querySelector("#score").textContent = score + " $"; // Aktualisiert den Score sofort nach dem Kauf
    counterOne++;
    document.querySelector("#article1").textContent = costOne + " $";
    document.querySelector("#counter1").textContent = counterOne + "x";
  }
});

// SECOND ARTICLE
let costTwo = 100; // Angenommen, dies ist der anfängliche Preis für 'article2'
let counterTwo = 0;

function increaseScoreTwo() {
  // increaseScore kommt öfter im Code vor, wird in der Artikelfunktion verwendet
  score++;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article2").addEventListener("click", function () {
  if (score >= costTwo) {
    score -= costTwo;
    costTwo = Math.round(costTwo * 1.2);
    setInterval(increaseScoreTwo, 1000);
    document.querySelector("#score").textContent = score + " $"; // Aktualisiert den Score sofort nach dem Kauf
    counterTwo++;
    document.querySelector("#article2").textContent = costTwo + " $";
    document.querySelector("#counter2").textContent = counterTwo + "x";
  }
});

// THIRD ARTICLE
let costThree = 1;
let counterThree = 0;

function increaseScoreThree() {
  score = score + 5;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article3").addEventListener("click", function () {
  if (score >= costThree) {
    score -= costThree;
    costThree = Math.round(costThree * 1.2);
    setInterval(increaseScoreThree, 1000);
    document.querySelector("#score").textContent = score + " $"; // Aktualisiert den Score sofort nach dem Kauf
    counterThree++;
    document.querySelector("#article3").textContent = costThree + " $";
    document.querySelector("#counter3").textContent = counterThree + "x";
  }
});

let costFour = 100000;
let counterFour = 0;

function increaseScoreFour() {
  score = score + 20;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article4").addEventListener("click", function () {
  if (score >= costFour) {
    score -= costFour;
    costFour = Math.round(costFour * 1.2);
    setInterval(increaseScoreFour, 1000);
    document.querySelector("#score").textContent = score + " $"; // Aktualisiert den Score sofort nach dem Kauf
    counterFour++;
    document.querySelector("#article4").textContent = costFour + " $";
    document.querySelector("#counter4").textContent = counterFour + "x";
  }
});

let costFive = 1;
let counterFive = 0;

function increaseScoreFive() {
  score = score + 100;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article5").addEventListener("click", function () {
  if (score >= costFive) {
    score -= costFive;
    costFive = Math.round(costFive * 1.2);
    setInterval(increaseScoreFive, 1000);
    document.querySelector("#score").textContent = score; // Aktualisiert den Score sofort nach dem Kauf
    counterFive++;
    document.querySelector("#article5").textContent = costFive + " $";
    document.querySelector("#counter5").textContent = counterFive + "x";
  }
});

let costSix = 1;
let counterSix = 0;

function increaseScoreSix() {
  score = score + 100;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article6").addEventListener("click", function () {
  if (score >= costSix) {
    score -= costSix;
    costSix = Math.round(costSix * 1.2);
    setInterval(increaseScoreSix, 1000);
    document.querySelector("#score").textContent = score; // Aktualisiert den Score sofort nach dem Kauf
    counterSix++;
    document.querySelector("#article6").textContent = costSix + " $";
    document.querySelector("#counter6").textContent = counterSix + "x";
  }
});

let costSeven = 1;
let counterSeven = 0;

function increaseScoreSeven() {
  score = score + 100;
  document.querySelector("#score").textContent = score;
}

document.getElementById("article7").addEventListener("click", function () {
  if (score >= costSeven) {
    score -= costSeven;
    costSeven = Math.round(costSeven * 1.2);
    setInterval(increaseScoreSeven, 1000);
    document.querySelector("#score").textContent = score; // Aktualisiert den Score sofort nach dem Kauf
    counterSeven++;
    document.querySelector("#article7").textContent = costSeven + " $";
    document.querySelector("#counter7").textContent = counterSeven + "x";
  }
});
