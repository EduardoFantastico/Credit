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

// TRASH CAN (Clicker Functions)

let decreaseRate = 0.1; // Die Rate, mit der der Fortschrittsbalken abgebaut wird
let interval = 10; // Die Zeit in Millisekunden zwischen jedem Abbau

document.getElementById("clicker").addEventListener("click", function () {
  // Füge die Wackelanimation hinzu
  this.classList.add("wackeln");

  updateProgressBar();
  dropGarbageBasedOnChance(); // Führen Sie dropGarbage() bei jedem Klick aus
  dropGarbage();

  // Entferne die Wackelanimation nach der Animation
  setTimeout(() => {
    this.classList.remove("wackeln");
  }, 100); // Die Dauer sollte der Animationsdauer entsprechen
});

function updateProgressBar() {
  let progressBar = document.getElementById("clickprogress");
  progressBar.value += 5;
}

// Starten Sie einen Interval-Timer, um den Fortschrittsbalken stetig abzubauen
setInterval(function () {
  let progressBar = document.getElementById("clickprogress");
  if (progressBar.value > 0) {
    progressBar.value -= decreaseRate;
  }
}, interval);

// Erstellen Sie eine Funktion, die dropGarbage() basierend auf dem Wert der Fortschrittsleiste aufruft
function dropGarbageBasedOnChance() {
  let progressBar = document.getElementById("clickprogress");
  if (progressBar.value > 0) {
    // Generieren Sie eine zufällige Zahl zwischen 0 und 100
    let randomChance = Math.random() * 100;

    // Erhöhen Sie die Chance, dass dropGarbage() aufgerufen wird, wenn der Wert der Fortschrittsleiste bestimmte Schwellenwerte erreicht
    let dropChance = 0;
    if (progressBar.value >= 90) {
      dropChance = 50;
      setImportance("Bananenschale", 5);
    } else if (progressBar.value >= 80) {
      dropChance = 34;
      setImportance("Bananenschale", 1);
    } else if (progressBar.value >= 50) {
      dropChance = 23;
      setImportance("Bananenschale", 0);
    } else if (progressBar.value >= 20) {
      dropChance = 8;
      setImportance("Bananenschale", 0);
    } else if (progressBar.value >= 1) {
      dropChance = 5;
      setImportance("Bananenschale", 0);
    }

    // Wenn die zufällige Zahl kleiner als die Chance ist, rufen Sie dropGarbage() auf
    if (randomChance < dropChance) {
      dropGarbage();
      // Wenn die zufällige Zahl kleiner als die Hälfte der Chance ist, rufen Sie dropGarbage() ein zweites Mal auf
    }
  }
}

// Definieren Sie die verschiedenen Arten von Müll
let garbageTypes = [
  {
    image: "url('source/Müll/PaperBall1.png')",
    width: "39px",
    height: "36px",
    tag: "PapierBall",
    importance: 80000,
    pointsWorth: 1,
  },
  {
    image: "url('source/Müll/AlterApfel1.png')", //Bild
    width: "37px",
    height: "57px",
    tag: "AlterApfel",
    importance: 20000,
    pointsWorth: 2,
  },
  {
    image: "url('source/Müll/Bananenschale1.png')",
    width: "64px",
    height: "36px",
    tag: "Bananenschale",
    importance: 1,
    pointsWorth: 500,
  },
];

function setImportance(tag, newValue) {
  for (let i = 0; i < garbageTypes.length; i++) {
    if (garbageTypes[i].tag === tag) {
      garbageTypes[i].importance = newValue;
      break;
    }
  }
}


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
  let totalImportance = 0;
  for (let i = 0; i < garbageTypes.length; i++) {
    totalImportance += garbageTypes[i].importance;
  }

  // Berechnen Sie die Dropchance für jedes Element
  for (let i = 0; i < garbageTypes.length; i++) {
    garbageTypes[i].dropChance = garbageTypes[i].importance / totalImportance;
  }

  // Wählen Sie zufällig eine Art von Müll aus basierend auf der Drop-Chance
  let random = Math.random();
  let cumulativeChance = 0;
  let garbageType;
  for (let i = 0; i < garbageTypes.length; i++) {
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
let garbage = document.createElement("div");
garbage.id = "garbage";
garbage.style.width = garbageType.width;
garbage.style.height = garbageType.height;
garbage.style.background = garbageType.image;
garbage.style.backgroundSize = "cover";
garbage.style.position = "absolute";

// Setzen Sie die Position des Mülls
garbage.style.bottom = (300 + 50) + "px"; // Sie können den Wert ändern, um die Position anzupassen

// Berechnen Sie die linke Position und verschieben Sie sie um 50%
let leftPosition = Math.floor(Math.random() * (105 - 60 + 1)) + 60;
garbage.style.left = (leftPosition + window.innerWidth * 0.5 - 125) + "px";

garbage.style.zIndex = "3"; // Setzen Sie den z-index auf 5
garbage.dataset.tag = garbageType.tag; // Setzen Sie den zusätzlichen Tag
garbage.dataset.pointsWorth = garbageType.pointsWorth; // Setzen Sie den Punktwert
score += garbageType.pointsWorth;

// Fügen Sie eine zufällige Drehung hinzu
let rotation = Math.floor(Math.random() * 360); // Zufälliger Winkel zwischen 0 und 360
garbage.style.transform = "rotate(" + rotation + "deg)";

// Fügen Sie das neue Müll-Element zum body hinzu
document.body.appendChild(garbage);


  // Generieren Sie eine zufällige Richtung
  let velocityX = (Math.random() < 0.5 ? 1 : -1) * Math.random();
  let velocityY = 1; // Anfangsgeschwindigkeit in der y-Richtung
  let gravity = 10; // Schwerkraft
  let time = 0; // Startzeit

  // Setzen Sie die Position des Elements in regelmäßigen Abständen
  let intervalId = setInterval(function () {
    time += 0.001; // Erhöhen Sie die Zeit

    // Berechnen Sie die neuen Positionen
    let newY =
      -0.5 * Math.pow(gravity, 2) * Math.pow(time, 2) +
      velocityY +
      parseFloat(garbage.style.bottom);
    let newX = velocityX + parseFloat(garbage.style.left);

    // Überprüfen Sie, ob das Element den Rand des Bildschirms erreicht hat
    if (newX > window.innerWidth || newY < 100) {
      clearInterval(intervalId); // Stoppen Sie das Intervall
      garbage.remove(); // Entfernen Sie das Element
      return;
    }

    // Aktualisieren Sie die Positionen des Elements
    garbage.style.bottom = newY + "px";
    garbage.style.left = newX + "px";
  }, 1); // Aktualisieren Sie die Position alle 1 Millisekunde
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
