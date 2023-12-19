"use strict";
let level = 0;
let score = 0;
let pointsPerClick = 1; // Punkte pro Klick
let levelLimits = [
  1000,
  5000,
  10000,
  25000,
  50000,
  100000,
  250000,
  500000,
  1000000,
  10000000,
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

document.getElementById('clicker').addEventListener('click', function() {
  dropGarbage();
});



// Definieren Sie die verschiedenen Arten von Müll
var garbageTypes = [
  {
    image: "url('source/Müll/AlterApfel1.png')",  //Bild
    width: '37px',
    height: '57px',
    tag: 'AlterApfel',
    importance: 10000,
    pointsWorth: 2,
  },
  {
    image: "url('source/Müll/PaperBall1.png')",
    width: '39px',
    height: '36px',
    tag: 'PapierBall',
    importance: 5000,
    pointsWorth: 5,
  }
];

function addGarbageType(newGarbageType) {
  this.classList.add("wackeln");
  garbageTypes.push(newGarbageType);
  setTimeout(() => this.classList.remove("wackeln"), 500);
}

/*

addGarbageType({
  image: "url('source/Müll/NeuesElement.png')",
  width: '30px',
  height: '46px',
  tag: 'NeuesElement',
  importance: 5,
  pointsWorth: 2,
});

*/

function dropGarbage() {
  
  // Berechnen Sie die Gesamtwichtigkeit
  var totalImportance = 0;  
  for (var i = 0; i < garbageTypes.length; i++) {
    totalImportance += garbageTypes[i].importance;
  }

  // Berechnen Sie die Dropchance für jedes Element
  for (var i = 0; i < garbageTypes.length; i++) {
    garbageTypes[i].dropChance = garbageTypes[i].importance / totalImportance;
  }

  // Wählen Sie zufällig eine Art von Müll aus basierend auf der Drop-Chance
  var random = Math.random();
  var cumulativeChance = 0;
  var garbageType;
  for (var i = 0; i < garbageTypes.length; i++) {
    cumulativeChance += garbageTypes[i].dropChance;
    if (random < cumulativeChance) {
      garbageType = garbageTypes[i];
      break;
    }
  }

  // Wenn kein Mülltyp ausgewählt wurde (z.B. wegen Rundungsfehlern), wählen Sie den letzten Mülltyp
  if (!garbageType) {
    garbageType = garbageTypes[garbageTypes.length - 1];
  }

  // Erstellen Sie ein neues Div-Element für den Müll
  var garbage = document.createElement('div');
  garbage.id = 'garbage';
  garbage.style.width = garbageType.width;
  garbage.style.height = garbageType.height;
  garbage.style.background = garbageType.image;
  garbage.style.backgroundSize = 'cover';
  garbage.style.position = 'absolute';
  garbage.style.bottom = '300px';
  garbage.style.left = Math.floor(Math.random() * (105 - 60 + 1)) + 60 + 'px';
  garbage.style.zIndex = '5';  // Setzen Sie den z-index auf 5
  garbage.dataset.tag = garbageType.tag;  // Setzen Sie den zusätzlichen Tag
  garbage.dataset.pointsWorth = garbageType.pointsWorth;  // Setzen Sie den Punktwert
  score += garbageType.pointsWorth;

  // Fügen Sie das neue Müll-Element zum Mülleimer hinzu
  document.getElementById('clicker').appendChild(garbage);

  // Generieren Sie eine zufällige Richtung
  var velocityX = (Math.random() < 0.5 ? 1 : -1) * Math.random();
  var velocityY = 1;  // Anfangsgeschwindigkeit in der y-Richtung
  var gravity = 10;  // Schwerkraft
  var time = 0;  // Startzeit

  // Setzen Sie die Position des Elements in regelmäßigen Abständen
  var intervalId = setInterval(function() {
    time += 0.001;  // Erhöhen Sie die Zeit

    // Berechnen Sie die neuen Positionen
    var newY = -0.5 * Math.pow(gravity, 2) * Math.pow(time, 2) + velocityY + parseFloat(garbage.style.bottom);
    var newX = velocityX + parseFloat(garbage.style.left);

    // Überprüfen Sie, ob das Element den Rand des Bildschirms erreicht hat
    if (newX > window.innerWidth || newY < 100) {
      clearInterval(intervalId);  // Stoppen Sie das Intervall
      garbage.remove();  // Entfernen Sie das Element
      return;
    }

    // Aktualisieren Sie die Positionen des Elements
    garbage.style.bottom = newY + 'px';
    garbage.style.left = newX + 'px';
  }, 1);  // Aktualisieren Sie die Position alle 1 Millisekunde
}


let scorechecker = setInterval(() => {
  if (score > levelLimits[level]) {
    score = levelLimits[level];
  }
}, 1);

let repeatend = setInterval(() => {
  document.querySelector("#score").textContent = score + " Trash";
}, 1);

changeInterfaceShop();
