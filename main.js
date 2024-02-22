"use strict";
let noLevelLimit = false;
let level = 0;
let score = 0;
let pointsPerClick = 1;
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

let BonusCap = 0;
let maxScoreCap = 0;

let dropchance90 = 0;
let dropchance80 = 0;
let dropchance50 = 0;
let dropchance20 = 0;
let dropchance01 = 0;

// Hole die Fortschritts- und Symbol-Elemente
let limitContainer = document.getElementById("limitContainer");
let limit = document.getElementById("limit");
let iconContainer = document.getElementById("icon-container");

// Funktion zur Aktualisierung der Fortschrittsleiste und der Symbolposition
function updateLimitBar() {
  if(noLevelLimit == false){
    // Berechnet Score basierend auf Levellimit
    maxScoreCap = levelLimits[level] + BonusCap;
    let progress = (score / maxScoreCap) * 100;

    // Aktualisiere die Breite der Fortschrittsleiste
    limit.style.width = progress + "%";

    // Setze die Position des Symbols entsprechend dem Fortschritt
    iconContainer.style.left = progress - 1 + "%";

    // Ändere die Farbe der Fortschrittsleiste basierend auf dem Fortschritt
    if (progress < 50) {
      let percent = progress * 2;
      limit.style.backgroundColor = "rgb(" + percent + "%, 100%, 0%)";
    } else if (progress < 75) {
      let percent = (progress - 50) * 4;
      limit.style.backgroundColor = "rgb(100%, " + (100 - percent) + "%, 0%)";
    } else {
      let percent = (progress - 75) * 4;
      limit.style.backgroundColor = "rgb(100%, 0%, " + percent + "%)";
    }
  } else {
    limit.style.width = "0%";
    iconContainer.style.left = -1 + "%";
  }
}


// Change Interface | Switch between Shop, Leaderboard, Research, etc

// Function | Change Interface
function changeInterface(show, hide1, hide2) {
  document.getElementById(show).style.display = "block";
  document.getElementById(hide1).style.display = "none";
  document.getElementById(hide2).style.display = "none";
}

// Shop | Left Button | Change to Sabotage
document.getElementById("shop-left").addEventListener("click", function () {
  changeInterface("sabotage", "research", "shop");
});
// Shop | Right Button | Change to Research
document.getElementById("shop-right").addEventListener("click", function () {
  changeInterface("research", "sabotage", "shop");
});

// Research | Left Button | Change to Shop
document.getElementById("research-left").addEventListener("click", function () {
  changeInterface("shop", "research", "sabotage");
});
// Research | Right Button | Change to Sabotage
document.getElementById("research-right").addEventListener("click", function () {
  changeInterface("sabotage", "shop", "research");
});

// Sabotage | Left Button | Change to Research
document.getElementById("sabotage-left").addEventListener("click", function () {
  changeInterface("research", "shop", "sabotage");
});
// Sabotage | Right Button | Change to Shop
document.getElementById("sabotage-right").addEventListener("click", function () {
  changeInterface("shop", "sabotage", "research");
});

// Chat | Left Button | Change to Leaderboard
document.getElementById("chat-left").addEventListener("click", function () {
  changeInterface("leaderboard", "friends", "chat");
});
// Chat | Right Button | Change to Friends
document.getElementById("chat-right").addEventListener("click", function () {
  changeInterface("friends", "leaderboard", "chat");
});

// Friends | Left Button | Change to Chat
document.getElementById("friends-left").addEventListener("click", function () {
  changeInterface("chat", "friends", "leaderboard");
});
// Friends | Right Button | Change to Leaderboard
document.getElementById("friends-right").addEventListener("click", function () {
  changeInterface("leaderboard", "chat", "friends");
});

// Leaderboard | Left Button | Change to Friends
document.getElementById("leaderboard-left").addEventListener("click", function () {
  changeInterface("friends", "leaderboard", "chat");
});
// Leaderboard | Right Button | Change to Chat
document.getElementById("leaderboard-right").addEventListener("click", function () {
  changeInterface("chat", "friends", "leaderboard");
});

        // TRASH CAN (Clicker Functions)

// Rate, mit der der Fortschrittsbalken abnimmt
let decreaseRate = 0.1;

// Intervall für die setInterval-Funktion in Millisekunden
let interval = 10;
let progressBar = document.getElementById("clickprogress");
let clicker = document.getElementById("clicker");

// Fügen Sie dem Clicker einen Event-Listener für das 'click'-Event hinzu
clicker.addEventListener("click", function (event) {
  // Wenn der Clicker nicht bereits die Klasse 'wackeln' hat, fügen Sie sie hinzu
  if (!this.classList.contains("wackeln")) {
    this.classList.add("wackeln");
    setTimeout(() => this.classList.remove("wackeln"), 100);
  }
  if (event.isTrusted) {
    progressBar.value += 5;
    dropGarbageBasedOnChance();
  }
  // Funktion um Müll fallen zu lassen
  dropGarbage();
});

// Setzen Sie ein Intervall, um den Wert des Fortschrittsbalkens im Laufe der Zeit zu verringern
setInterval(function () {
  if (progressBar.value > 0) {
    // Verringern Sie den Wert des Fortschrittsbalkens um die Abnahmerate
    progressBar.value -= decreaseRate;
  }
}, interval);

// Funktion, um Müll auf Basis von Zufall fallen zu lassen
function dropGarbageBasedOnChance() {
  // Wenn der Wert des Fortschrittsbalkens größer als 0 ist
  if (progressBar.value > 0) {
    // Holen Sie sich die Drop-Chance basierend auf dem Wert des Fortschrittsbalkens
    let dropChance = getDropChance(progressBar.value);
    // Wenn eine zufällige Zahl kleiner ist als die Drop-Chance
    if (Math.random() * 10000 < dropChance) {
      // Rufen Sie die Funktion auf, um Müll fallen zu lassen
      dropGarbage();
    }
  }
}

// Funktion, um die Drop-Chance basierend auf dem Wert des Fortschrittsbalkens zu erhalten
function getDropChance(value) {
  // Geben Sie die entsprechende Drop-Chance zurück, basierend auf dem Wert des Fortschrittsbalkens
  if (value >= 90) return dropchance90;
  if (value >= 80) return dropchance80;
  if (value >= 50) return dropchance50;
  if (value >= 20) return dropchance20;
  if (value >= 1) return dropchance01;
  return 0;
}



// Definieren Sie die verschiedenen Arten von Müll
let garbageTypes = [
  {
    image: "url('source/Müll/PaperBall1.png')",
    width: "39px",
    height: "36px",
    tag: "PapierBall",
    importance: 2,
    pointsWorth: 1,
  },
  {
    image: "url('source/Müll/PaperBall2.png')",
    width: "39px",
    height: "36px",
    tag: "PaperBall2",
    importance: 2,
    pointsWorth: 1,
  },
  {
    image: "url('source/Müll/Notiz1.png')",
    width: "52px",
    height: "46px",
    tag: "Notiz1",
    importance: 2,
    pointsWorth: 1,
  },
  {
    image: "url('source/Müll/Notiz2.png')",
    width: "30px",
    height: "50px",
    tag: "Notiz2",
    importance: 2,
    pointsWorth: 1,
  }
];

function setImportance(tag, newValue) {
  for (let i = 0; i < garbageTypes.length; i++) {
    if (garbageTypes[i].tag === tag) {
      garbageTypes[i].importance = newValue;
      break;
    }
  }
}

function increaseImportance(tag, number) {
  let currentImportance = garbageTypes.find(item => item.tag === tag).importance;
  setImportance(tag, currentImportance + number);
}

function addGarbageType(newGarbageType, element) {
  garbageTypes.push(newGarbageType);
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

function addplastic(){
  addGarbageType({
    image: "url('source/Müll/plastikbottle1.png')",
    width: '30px',
    height: '54px',
    tag: 'plastikbottle1',
    importance: 2,
    pointsWorth: 2,
  });
  addGarbageType({
    image: "url('source/Müll/plastikbottle2.png')",
    width: '24px',
    height: '54px',
    tag: 'plastikbottle2',
    importance: 2,
    pointsWorth: 2,
  });
  addGarbageType({
    image: "url('source/Müll/plastikbottle3.png')",
    width: '24px',
    height: '54px',
    tag: 'plastikbottle3',
    importance: 2,
    pointsWorth: 2,
  });
}

function addfood(){
  addGarbageType({
    image: "url('source/Müll/AlterApfel1.png')",
    width: '37px',
    height: '57px',
    tag: 'AlterApfel1',
    importance: 2,
    pointsWorth: 3,
  });
  addGarbageType({
    image: "url('source/Müll/Bananenschale1.png')",
    width: '64',
    height: '36px',
    tag: 'Bananenschale1',
    importance: 2,
    pointsWorth: 3,
  });
  addGarbageType({
    image: "url('source/Müll/Pizza.png')",
    width: '62px',
    height: '44px',
    tag: 'Pizza',
    importance: 2,
    pointsWorth: 3,
  });
  addGarbageType({
    image: "url('source/Müll/meat.png')",
    width: '60px',
    height: '63px',
    tag: 'meat',
    importance: 2,
    pointsWorth: 3,
  });
  addGarbageType({
    image: "url('source/Müll/SchimmelToast1.png')",
    width: '42px',
    height: '39px',
    tag: 'SchimmelToast1',
    importance: 2,
    pointsWorth: 3,
  });
}

function addGlass(){
  addGarbageType({
    image: "url('source/Müll/winebottle1.png')",
    width: '16px',
    height: '56px',
    tag: 'winebottle1',
    importance: 2,
    pointsWorth: 5,
  });
}

function addMetal(){
  addGarbageType({
    image: "url('source/Müll/Nagel1.png')",
    width: '15px',
    height: '25px',
    tag: 'Nagel1',
    importance: 2,
    pointsWorth: 7,
  });
  addGarbageType({
    image: "url('source/Müll/Nagel2.png')",
    width: '26px',
    height: '23px',
    tag: 'Nagel2',
    importance: 2,
    pointsWorth: 7,
  });
  addGarbageType({
    image: "url('source/Müll/Spoon.png')",
    width: '45px',
    height: '45px',
    tag: 'Spoon',
    importance: 2,
    pointsWorth: 7,
  });
  addGarbageType({
    image: "url('source/Müll/TinCan1.png')",
    width: "60px",
    height: "60px",
    tag: "TinCan",
    importance: 2,
    pointsWorth: 7,
  });
  addGarbageType({
    image: "url('source/Müll/TinCan2.png')",
    width: "32px",
    height: "60px",
    tag: "TinCan2",
    importance: 2,
    pointsWorth: 7,
  });
}

// Elementreferenzen und Anfangsvariablen
let trashTruckElement = document.getElementById('trashTruck');
let currentPosition = window.innerWidth;
let speed = 0;
let isBraking = false;
let isMoving = false;
let isPaused = false;
let pauseDuration = 0;
let isTruckClicked = false; // Variable zum Verfolgen, ob der Truck angeklickt wurde
let stopSigns = []; // Array zum Speichern der Stoppschilder

// Konstanten
const BRAKE_SPEED = 0.1;
const MAX_SPEED = 5;
const STOP_SIGN_WIDTH = 150;
const STOP_SIGN_GAP = 145;

// Funktion zum Erstellen eines Stoppschilds
function createStopSign() {
    let stopSign = document.createElement('div');
    stopSign.style.position = 'absolute';
    stopSign.style.bottom = '0px';
    stopSign.style.width = '50px';
    stopSign.style.height = '50px';
    stopSign.style.top = "250px";
    stopSign.style.backgroundColor = 'red';
    document.body.appendChild(stopSign);
    stopSigns.push(stopSign);

    // Zufällige Position für das Stoppschild
    let position = Math.random() < 0.5 ? 400 : window.innerWidth - 450;
    stopSign.style.left = position + 'px';
}

// Funktion zum Überprüfen, ob der Truck vor einem Stoppschild ist
function checkForStopSign() {
    if (!isTruckClicked) { // Überprüfe nur auf Stoppschilder, wenn der Truck nicht angeklickt wurde
        for (let i = 0; i < stopSigns.length; i++) {
            let stopSign = stopSigns[i];
            let stopSignPosition = parseInt(stopSign.style.left);
            if (currentPosition - stopSignPosition < STOP_SIGN_WIDTH && currentPosition - stopSignPosition > STOP_SIGN_GAP) {
                let stopSignCount = stopSigns.filter(sign => parseInt(sign.style.left) === stopSignPosition).length;
                pauseAndResume(3000 * stopSignCount); // Haltefunktion ausführen
                break;
            }
        }
    }
}

// Funktion zum Anhalten und Neustarten des Trucks
function pauseAndResume(x) {
  isPaused = true;
  pauseDuration = x;

  setTimeout(function() {
      isPaused = false;
      isBraking = false;
  }, pauseDuration);
}

// Funktion zum Bewegen des Müllwagens
function moveTrashTruck() {
  // Überprüfe auf Stoppschilder
  checkForStopSign();

  // Wenn der Truck das Ende des Bildschirms erreicht hat, setze die Werte zurück
  if (currentPosition < -trashTruckElement.offsetWidth) {
      currentPosition = window.innerWidth;
      isBraking = false;
      speed = 0;
      isMoving = false;
  } else {
      // Aktualisiere die Position und Geschwindigkeit des Trucks
      currentPosition -= speed;
      trashTruckElement.style.left = currentPosition + 'px';
      
      // Kontrolliere die Geschwindigkeit basierend auf dem Bremszustand und dem Pausenzustand
      if ((isBraking || isPaused) && speed > 0) {
          speed -= BRAKE_SPEED;
          if (speed < 0) speed = 0;
      } else if (!isBraking && !isPaused && speed < MAX_SPEED) {
          speed += BRAKE_SPEED;
      }
  }
  
  // Fordere den nächsten Frame an, wenn der Truck sich bewegt
  if (isMoving) {
      requestAnimationFrame(moveTrashTruck);
  }
}

// Event-Listener zum Starten der Bewegung des Trucks
document.getElementById('menu-tab2').addEventListener('click', function() {
    isMoving = true;
    requestAnimationFrame(moveTrashTruck);
});

// Event-Listener zum Bremsen des Trucks
trashTruckElement.addEventListener('click', function() {
    isTruckClicked = !isTruckClicked; // Wechselt den Zustand von isTruckClicked bei jedem Klick
    if (!isTruckClicked) {
        isBraking = true;
        setTimeout(function() {
            isBraking = false;
        }, 5000);
    }
});


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
  garbage.style.bottom = 300 + 50 + "px"; // Sie können den Wert ändern, um die Position anzupassen

  // Berechnen Sie die linke Position und verschieben Sie sie um 50%
  let leftPosition = Math.floor(Math.random() * (105 - 60 + 1)) + 60;
  garbage.style.left = leftPosition + window.innerWidth * 0.5 - 125 + "px";

  garbage.style.zIndex = "3"; // Setzen Sie den z-index auf 5
  garbage.dataset.tag = garbageType.tag; // Setzen Sie den zusätzlichen Tag
  garbage.dataset.pointsWorth = garbageType.pointsWorth; // Setzen Sie den Punktwert
  score += garbageType.pointsWorth;

  // Fügen Sie eine zufällige Drehung hinzu
  let rotation = Math.floor(Math.random() * 360); // Zufälliger Winkel zwischen 0 und 360
  garbage.style.transform = "rotate(" + rotation + "deg)";
  garbage.style.animation = "spin 2s linear infinite";

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
  if(noLevelLimit == false){
    maxScoreCap = levelLimits[level] + BonusCap;
    if (score > maxScoreCap) {
      score = maxScoreCap;
    }
  }
}, 1);



let repeatend = setInterval(() => {
  document.querySelector("#score").textContent = score + " Trash";
  updateLimitBar();
}, 1);

changeInterface("research", "sabotage", "shop");
changeInterface("chat", "friends", "leaderboard");
