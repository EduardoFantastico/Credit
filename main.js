"use strict";

let level = 0;
let score = 0;
let pointsPerClick = 1; // Punkte pro Klick

// BIG BUTTON
document.querySelector("#clicker").addEventListener("click", function () {
  score += pointsPerClick; // Erhöht den Score um die Anzahl der Punkte pro Klick
});

// FIRST ARTICLE
let costOne = 10;
let counterOne = 0;

document.querySelector("#article1").addEventListener("click", function () {
  if (score >= costOne) {
    score -= costOne;
    costOne = Math.round(costOne * 1.2);
    pointsPerClick++; // Erhöht die Punkte pro Klick jedes Mal, wenn ein Artikel gekauft wird
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
  score++;}

document.getElementById("article2").addEventListener("click", function () {
  if (score >= costTwo) {
    score -= costTwo;
    costTwo = Math.round(costTwo * 1.2);
    setInterval(increaseScoreTwo, 1000);
    counterTwo++;
    document.querySelector("#article2").textContent = costTwo + " $";
    document.querySelector("#counter2").textContent = counterTwo + "x";
  }
});

// THIRD ARTICLE
let costThree = 1;
let counterThree = 0;

function increaseScoreThree() {
  score = score + 5;}

document.getElementById("article3").addEventListener("click", function () {
  if (score >= costThree) {
    score -= costThree;
    costThree = Math.round(costThree * 1.2);
    setInterval(increaseScoreThree, 1000);
    counterThree++;
    document.querySelector("#article3").textContent = costThree + " $";
    document.querySelector("#counter3").textContent = counterThree + "x";
  }
});

// FOURTH ARTICLE
let costFour = 100000;
let counterFour = 0;

function increaseScoreFour() {
  score = score + 20;}

document.getElementById("article4").addEventListener("click", function () {
  if (score >= costFour) {
    score -= costFour;
    costFour = Math.round(costFour * 1.2);
    setInterval(increaseScoreFour, 1000);
    counterFour++;
    document.querySelector("#article4").textContent = costFour + " $";
    document.querySelector("#counter4").textContent = counterFour + "x";
  }
});

// FIFTH ARTICLE
let costFive = 1;
let counterFive = 0;

function increaseScoreFive() {
  score = score + 100;}

document.getElementById("article5").addEventListener("click", function () {
  if (score >= costFive) {
    score -= costFive;
    costFive = Math.round(costFive * 1.2);
    setInterval(increaseScoreFive, 1000);
    counterFive++;
    document.querySelector("#article5").textContent = costFive + " $";
    document.querySelector("#counter5").textContent = counterFive + "x";
  }
});

// SIXTH ARTICLE
let costSix = 1;
let counterSix = 0;

function increaseScoreSix() {
  score = score + 100;}

document.getElementById("article6").addEventListener("click", function () {
  if (score >= costSix) {
    score -= costSix;
    costSix = Math.round(costSix * 1.2);
    setInterval(increaseScoreSix, 1000);
    counterSix++;
    document.querySelector("#article6").textContent = costSix + " $";
    document.querySelector("#counter6").textContent = counterSix + "x";
  }
});

// SEVENTH ARTICLE
let costSeven = 1;
let counterSeven = 0;

function increaseScoreSeven() {
  score = score + 100;}

document.getElementById("article7").addEventListener("click", function () {
  if (score >= costSeven) {
    score -= costSeven;
    costSeven = Math.round(costSeven * 1.2);
    setInterval(increaseScoreSeven, 1000);
    counterSeven++;
    document.querySelector("#article7").textContent = costSeven + " $";
    document.querySelector("#counter7").textContent = counterSeven + "x";
  }
});

// New Research Section
document.getElementById("shop-research").addEventListener("click", function () {
  var newField = document.getElementById("new-field");
  newField.innerHTML = '<input type="text" placeholder="Research">';
});

let scorechecker = setInterval(() => {
  if (score > 100 && level < 1) {
    score = 100;  }
}, 1);

let costLevel = 1;
let progressLevel = 0;
let timerLevel = 0;

document.querySelector("#research1").addEventListener("click", function () {
  if (score >= costLevel){
    score = score - costLevel;
    let countdownTimerLevel = setInterval(function() {
      timerLevel++;
      let progressLevel = (timerLevel / 1000) * 100 +"%";
      document.querySelector("#researchbar1").style.width = progressLevel;
      // Änderung: Überprüfe, ob timerLevel gleich 1000 ist
      if (timerLevel === 1000) {
        clearInterval(countdownTimerLevel);
        level++;
        document.querySelector("#level").textContent = "LEVEL " + level;
        document.querySelector("#researchbar1").style.width = 0;
        document.documentElement.style.setProperty("--research1-color", "rgb(51, 221, 85)");
    document.querySelector("#research1").style.backgroundColor = "var(--research1-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research1-color", "rgb(144, 247, 247)");
      document.querySelector("#research1").style.backgroundColor = "var(--research1-color)";
    }, 400);
      }
    }, 5);
  } else {
    document.documentElement.style.setProperty("--research1-color", "red");
    document.querySelector("#research1").style.backgroundColor = "var(--research1-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research1-color", "rgb(144, 247, 247)");
      document.querySelector("#research1").style.backgroundColor = "var(--research1-color)";
    }, 1500);
  }
});

let costGoldRush      = 1;
let progressGoldRush  = 0;
let timerGoldRush     = 0;

document.querySelector("#research2").addEventListener("click", function () {  
  if (score >= costGoldRush){   
    score = score - costGoldRush;  
    let countdownTimerGoldRush = setInterval(function() {
      timerGoldRush++;
      let progressGoldRush = (timerGoldRush / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar2").style.width = progressGoldRush;
      
      if (timerGoldRush === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerGoldRush);
        timerGoldRush = 0;
        // Ziel Hierrein //





        /*              */   
        document.querySelector("#researchbar2").style.width = 0;
        document.documentElement.style.setProperty("--research2-color", "rgb(51, 221, 85)");
    document.querySelector("#research2").style.backgroundColor = "var(--research2-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research2-color", "rgb(144, 247, 247)");
      document.querySelector("#research2").style.backgroundColor = "var(--research2-color)";
    }, 400);
      }
    }, 5);  
  } else {
    document.documentElement.style.setProperty("--research2-color", "red");
    document.querySelector("#research2").style.backgroundColor = "var(--research2-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research2-color", "rgb(144, 247, 247)");
      document.querySelector("#research2").style.backgroundColor = "var(--research2-color)";
    }, 1500);
  }
});

let wiederholung = setInterval(() => {
  document.querySelector("#score").textContent = score + " $";
}, 1);
