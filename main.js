"use strict";
/* document.getElementById("startButton").addEventListener("click", function () {
  var name = document.getElementById("nameInput").value;
  if (name) {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    // Ihr Spielstartcode geht hier, z.B. initGame(name);
  } else {
    alert("Bitte geben Sie Ihren Namen ein");
  }
}); */

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




function folieShop() {
  document.getElementById("research").style.marginLeft = "-300px";
  document.getElementById("Leaderboard").style.marginLeft = "-300px";
  document.getElementById("shop").style.marginLeft = "20px";
}

function folieLeaderboard(){
  document.querySelector("#research").style.marginLeft = "-300px";
  document.querySelector("#Leaderboard").style.marginLeft = "20px";
  document.querySelector("#shop").style.marginLeft = "-300px";
}

function folieResearch(){
  document.querySelector("#research").style.marginLeft = "20px";
  document.querySelector("#Leaderboard").style.marginLeft = "-300px";
  document.querySelector("#shop").style.marginLeft = "-300px";
}




let folie = 1;

document.getElementById("shop-left").addEventListener("click", function () {
  if(folie === 3) {
    folie = 1; // Shop
    folieShop();
  }else if (folie === 1){
    folie = 2; // Research
    folieResearch();
  }else if (folie === 2) {
    folie = 3; // Leaderboard
    folieLeaderboard();
  }
});

document.getElementById("shop-right").addEventListener("click", function () {
  if(folie === 3) {
    folie = 2;
    folieResearch();
  }else if (folie === 1){
    folie =3; 
    folieLeaderboard();
  }else if (folie === 2) {
    folie = 1; 
    folieShop();
  }
});


document.getElementById("research-left").addEventListener("click", function () {
  if(folie === 3) {
    folie = 1; // Shop
    folieShop();
  }else if (folie === 1){
    folie = 2; // Research
    folieResearch();
  }else if (folie === 2) {
    folie = 3; // Leaderboard
    folieLeaderboard();
  }
});

document.getElementById("research-right").addEventListener("click", function () {
  if(folie === 3) {
    folie = 2;
    folieResearch();
  }else if (folie === 1){
    folie =3; 
    folieLeaderboard();
  }else if (folie === 2) {
    folie = 1; 
    folieShop();
  }
});

document.getElementById("leaderboard-left").addEventListener("click", function () {
  if(folie === 3) {
    folie = 1; // Shop
    folieShop();
  }else if (folie === 1){
    folie = 2; // Research
    folieResearch();
  }else if (folie === 2) {
    folie = 3; // Leaderboard
    folieLeaderboard();
  }
});

document.getElementById("leaderboard-right").addEventListener("click", function () {
  if(folie === 3) {
    folie = 2;
    folieResearch();
  }else if (folie === 1){
    folie =3; 
    folieLeaderboard();
  }else if (folie === 2) {
    folie = 1; 
    folieShop();
  }
});









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
  score = score + 1000;}

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




let costLevel = 1;
let progressLevel = 0;
let timerLevel = 0;
let wirdGeupgradedLevel = false;

document.querySelector("#research1").addEventListener("click", function () {
  if (wirdGeupgradedLevel === false){
  if (score >= costLevel) {
    wirdGeupgradedLevel = true;
    score = score - costLevel;
    let countdownTimerLevel = setInterval(function() {
      timerLevel++;
      let progressLevel = (timerLevel / 1000) * 100 +"%";
      document.querySelector("#researchbar1").style.width = progressLevel;
      // Änderung: Überprüfe, ob timerLevel gleich 1000 ist
      if (timerLevel === 1000) {
        wirdGeupgradedLevel = false;
        document.querySelector("#researchbar1").style.width = 0;
        timerLevel = 0;
        clearInterval(countdownTimerLevel);
        level++;
        document.querySelector("#level").textContent = "LEVEL " + level;
    document.documentElement.style.setProperty("--research1-color", "rgb(51, 221, 85)");
    document.querySelector("#research1").style.backgroundColor = "var(--research1-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research1-color", "rgb(144, 247, 247)");
      document.querySelector("#research1").style.backgroundColor = "var(--research1-color)";
    }, 400);
      };
    }, 5);
  } else {
    document.documentElement.style.setProperty("--research1-color", "red");
    document.querySelector("#research1").style.backgroundColor =
      "var(--research1-color)";
    document.documentElement.style.setProperty("--my-color", "red");
    document.querySelector("#research1").style.backgroundColor =
      "var(--my-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty(
        "--research1-color",
        "rgb(144, 247, 247)"
      );
      document.querySelector("#research1").style.backgroundColor =
        "var(--research1-color)";
    }, 1500);
  }
}});

let costGoldRush      = 1;
let progressGoldRush  = 0;
let timerGoldRush     = 0;
let wirdGeupgradedGoldRush = false;

document.querySelector("#research2").addEventListener("click", function () {  
  if (wirdGeupgradedGoldRush === false){
  if (score >= costGoldRush){   
    wirdGeupgradedGoldRush = true;
    score = score - costGoldRush;  
    let countdownTimerGoldRush = setInterval(function() {
      timerGoldRush++;
      let progressGoldRush = (timerGoldRush / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar2").style.width = progressGoldRush;
      
      if (timerGoldRush === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerGoldRush);
        timerGoldRush = 0;
        wirdGeupgradedGoldRush = false;
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
}});


let costDouble      = 1;
let progressDouble  = 0;
let timerDouble     = 0;
let wirdGeupgradedDouble = false;

document.querySelector("#research3").addEventListener("click", function () { 
  if (wirdGeupgradedDouble === false){ 
  if (score >= costDouble){   
    wirdGeupgradedDouble = true;
    score = score - costDouble;  
    let countdownTimerDouble = setInterval(function() {
      timerDouble++;
      let progressDouble = (timerDouble / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar3").style.width = progressDouble;
      
      if (timerDouble === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerDouble);
        timerDouble = 0;
        wirdGeupgradedDouble = false;
        // Ziel Hierrein //





        /*              */   
        document.querySelector("#researchbar3").style.width = 0;
        document.documentElement.style.setProperty("--research3-color", "rgb(51, 221, 85)");
    document.querySelector("#research3").style.backgroundColor = "var(--research3-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research3-color", "rgb(144, 247, 247)");
      document.querySelector("#research3").style.backgroundColor = "var(--research3-color)";
    }, 400);
      }
    }, 5);  
  } else {
    document.documentElement.style.setProperty("--research3-color", "red");
    document.querySelector("#research3").style.backgroundColor = "var(--research3-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research3-color", "rgb(144, 247, 247)");
      document.querySelector("#research3").style.backgroundColor = "var(--research3-color)";
    }, 1500);
  }
}});

let costRandomizer      = 1;
let progressRandomizer  = 0;
let timerRandomizer     = 0;
let wirdGeupgradedrandomizer = false;

document.querySelector("#research4").addEventListener("click", function () {
  if (wirdGeupgradedrandomizer === false){  
  if (score >= costRandomizer){ 
    wirdGeupgradedrandomizer = true;  
    score = score - costRandomizer;  
    let countdownTimerRandomizer = setInterval(function() {
      timerRandomizer++;
      let progressRandomizer = (timerRandomizer / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar4").style.width = progressRandomizer;
      
      if (timerRandomizer === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerRandomizer);
        timerRandomizer = 0;
        wirdGeupgradedrandomizer = false;
        // Ziel Hierrein //





        /*              */   
        document.querySelector("#researchbar4").style.width = 0;
        document.documentElement.style.setProperty("--research4-color", "rgb(51, 221, 85)");
    document.querySelector("#research4").style.backgroundColor = "var(--research4-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research4-color", "rgb(144, 247, 247)");
      document.querySelector("#research4").style.backgroundColor = "var(--research4-color)";
    }, 400);
      }
    }, 5);  
  } else {
    document.documentElement.style.setProperty("--research4-color", "red");
    document.querySelector("#research4").style.backgroundColor = "var(--research4-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research4-color", "rgb(144, 247, 247)");
      document.querySelector("#research4").style.backgroundColor = "var(--research4-color)";
    }, 1500);
  }
}});


let costGoofyAh      = 1;
let progressGoofyAh  = 0;
let timerGoofyAh     = 0;
let wirdGeupgradedGoofyAh = false;

document.querySelector("#research5").addEventListener("click", function () { 
  if (wirdGeupgradedGoofyAh === false) { 
  if (score >= costGoofyAh){ 
    wirdGeupgradedGoofyAh = true;  
    score = score - costGoofyAh;  
    let countdownTimerGoofyAh = setInterval(function() {
      timerGoofyAh++;
      let progressGoofyAh = (timerGoofyAh / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar5").style.width = progressGoofyAh;
      
      if (timerGoofyAh === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerGoofyAh);
        timerGoofyAh = 0;
        wirdGeupgradedGoofyAh = false;
        // Ziel Hierrein //





        /*              */   
        document.querySelector("#researchbar5").style.width = 0;
        document.documentElement.style.setProperty("--research5-color", "rgb(51, 221, 85)");
    document.querySelector("#research5").style.backgroundColor = "var(--research5-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research5-color", "rgb(144, 247, 247)");
      document.querySelector("#research5").style.backgroundColor = "var(--research5-color)";
    }, 400);
      }
    }, 5);  
  } else {
    document.documentElement.style.setProperty("--research5-color", "red");
    document.querySelector("#research5").style.backgroundColor = "var(--research4-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research5-color", "rgb(144, 247, 247)");
      document.querySelector("#research5").style.backgroundColor = "var(--research5-color)";
    }, 1500);
  }
}});

let costTest      = 1;
let progressTest  = 0;
let timerTest     = 0;
let wirdGeupgradedTest = false;

document.querySelector("#research6").addEventListener("click", function () {  
  if (wirdGeupgradedTest === false) {
  if (score >= costTest){   
    wirdGeupgradedTest = true;
    score = score - costTest;  
    let countdownTimerTest = setInterval(function() {
      timerTest++;
      let progressTest = (timerTest / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar6").style.width = progressTest;
      
      if (timerTest === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerTest);
        timerTest = 0;
        wirdGeupgradedTest = false;
        // Ziel Hierrein //





        /*              */   
        document.querySelector("#researchbar6").style.width = 0;
        document.documentElement.style.setProperty("--research6-color", "rgb(51, 221, 85)");
    document.querySelector("#research6").style.backgroundColor = "var(--research6-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research6-color", "rgb(144, 247, 247)");
      document.querySelector("#research6").style.backgroundColor = "var(--research6-color)";
    }, 400);
      }
    }, 5);  
  } else {
    document.documentElement.style.setProperty("--research6-color", "red");
    document.querySelector("#research6").style.backgroundColor = "var(--research6-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research6-color", "rgb(144, 247, 247)");
      document.querySelector("#research6").style.backgroundColor = "var(--research6-color)";
    }, 1500);
  }
}});



let costSabotageHouse      = 1;
let progressSabotageHouse  = 0;
let timerSabotageHouse     = 0;
let wirdGeupgradedSabotageHouse = false;

document.querySelector("#research7").addEventListener("click", function () {  
 if (wirdGeupgradedSabotageHouse === false) { 
  if (score >= costSabotageHouse){   
    wirdGeupgradedSabotageHouse = true;
    score = score - costSabotageHouse;  
    let countdownTimerSabotageHouse = setInterval(function() {
      timerSabotageHouse++;
      let progressSabotageHouse = (timerSabotageHouse / 1000 /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */) * 100 +"%";
      document.querySelector("#researchbar7").style.width = progressSabotageHouse;
      
      if (timerSabotageHouse === 1000) {   //Hier Zeit in 5/1000 einer Sekunde eingeben :)
        clearInterval(countdownTimerSabotageHouse);
        timerSabotageHouse = 0;
        wirdGeupgradedSabotageHouse = false;
        // Ziel Hierrein //





        /*              */   
        document.querySelector("#researchbar7").style.width = 0;
        document.documentElement.style.setProperty("--research7-color", "rgb(51, 221, 85)");
    document.querySelector("#research7").style.backgroundColor = "var(--research7-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research7-color", "rgb(144, 247, 247)");
      document.querySelector("#research7").style.backgroundColor = "var(--research7-color)";
    }, 400);
      }
    }, 5);  
  } else {
    document.documentElement.style.setProperty("--research7-color", "red");
    document.querySelector("#research7").style.backgroundColor = "var(--research7-color)";
    setTimeout(() => {
      document.documentElement.style.setProperty("--research7-color", "rgb(144, 247, 247)");
      document.querySelector("#research7").style.backgroundColor = "var(--research7-color)";
    }, 1500);
  }
}});

















let scorechecker = setInterval(() => {
  if (score > levelLimits[level]) {
    score = levelLimits[level];  }
}, 1);


let wiederholung = setInterval(() => {
  document.querySelector("#score").textContent = score + " $";
}, 1);
