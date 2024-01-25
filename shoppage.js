let upgrades = [];

function addUpgrade(name, displayName, cost) {
  const newUpgradeId = name.split(" ").join("_").toLowerCase();
  const newUpgrade = {
    id: newUpgradeId,
    name: name,
    displayName: displayName,
    cost: cost,
  };
  upgrades.push(newUpgrade);
  createUpgradeElement(newUpgrade);
}

function createUpgradeElement(upgrade) {
  // Erstelle ein neues div-Element mit der Klasse "upgrade-box"
  const div = document.createElement("div");
  div.id = upgrade.id;
  div.className = "upgrade-box";

  // Erstelle einen Button innerhalb des div-Elements
  const button = document.createElement("button");
  button.className = "upgrade-button";
  button.innerHTML = upgrade.displayName; // Setze den Anzeigenamen auf dem Button
  button.addEventListener("click", function () {
    upgradeButtonPressed(upgrade);
  });
  div.appendChild(button);

  // Füge das div-Element zum content-box-shop hinzu
  document.querySelector("#content-box-shop").appendChild(div);
}

// Remove Upgrade
function removeUpgrade(upgradeId) {
  upgrades = upgrades.filter((upgrade) => upgrade.id !== upgradeId);
  const upgradeElement = document.querySelector(`#${upgradeId}`);
  upgradeElement.remove();
}

// - - - - - - - - //

function shopUpgrade1(upgrade) {
  pointsPerClick++;
  newcost = Math.round(upgrade.cost * 1.2); // Verwenden Sie Math.round() anstelle von math.round()
  changeUpgradeCost("upgradeone", newcost);
}

function shopUpgrade2(upgrade) {
  newcost = Math.round(upgrade.cost * 1.25); // Verwenden Sie Math.round() anstelle von math.round()
  changeUpgradeCost("upgradetwo", newcost);
  function increaseScoreTwo() {
    score++;
  }
  setInterval(increaseScoreTwo, 1000);
}

function executeUpgradeFunction(upgrade) {
  switch (upgrade.name) {
    case "upgradeone":
      shopUpgrade1(upgrade);
      break;
    case "upgradetwo":
      shopUpgrade2(upgrade);
      break;

    default:
      console.log("Keine Funktion für dieses Upgrade definiert.");
  }
}

function changeUpgradeCost(upgradeName, newCost) {
  // Finden Sie das Upgrade nach Namen
  const upgrade = upgrades.find((upg) => upg.name === upgradeName);

  // Wenn das Upgrade existiert, ändern Sie den Preis
  if (upgrade) {
    upgrade.cost = newCost;
  } else {
    console.log("Upgrade nicht gefunden: " + upgradeName);
  }
}

function upgradeButtonPressed(upgrade) {
  if (score >= upgrade.cost) {
    score -= upgrade.cost;
    executeUpgradeFunction(upgrade);
  }
}

addUpgrade("button3", "Button3", 3);
addUpgrade("button4", "Button4", 4);
addUpgrade("button5", "Button5", 5);
addUpgrade("button6", "Button6", 6);
addUpgrade("button7", "Button7", 7);
addUpgrade("button8", "Button8", 8);
addUpgrade("button9", "Button9", 9);
addUpgrade("button10", "Button10", 10);
addUpgrade("button11", "Button11", 11);
addUpgrade("button12", "Button12", 12);
addUpgrade("button13", "Button13", 13);
addUpgrade("button14", "Button14", 14);
addUpgrade("button15", "Button15", 15);
addUpgrade("button16", "Button16", 16);
addUpgrade("button17", "Button17", 17);
addUpgrade("button18", "Button18", 18);
addUpgrade("button19", "Button19", 19);
addUpgrade("button20", "Button20", 20);
addUpgrade("button21", "Button21", 21);
addUpgrade("button22", "Button22", 22);
addUpgrade("button33", "Button33", 33);

let isClicked = false; // Zustand des Buttons

document.querySelector("#button3").addEventListener("click", function () {
  let descBox = document.querySelector("#descBox");
  let descTitle = document.querySelector("#descTitle");
  let descText = document.querySelector("#descText");

  if (!isClicked) {
    // Wenn der Button das erste Mal geklickt wird
    descBox.style.transform = "translateX(575px)";
    descBox.style.display = "block";
    descTitle.textContent = "Müllbeutel";
    descText.textContent =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
    isClicked = true;
  } else {
    // Wenn der Button ein zweites Mal geklickt wird
    descBox.style.transform = "";
    descBox.style.display = "none";
    descTitle.textContent = "";
    descText.textContent = "";
    isClicked = false;
  }
});

/*
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

// SECOND ARTICLE --- AUTOMATISCH PUNKTE GENERIEREN
let costTwo = 100; // Angenommen, dies ist der anfängliche Preis für 'article2'
let counterTwo = 0;

function increaseScoreTwo() {
  // increaseScore kommt öfter im Code vor, wird in der Artikelfunktion verwendet
  score++;
}

document.getElementById("article2").addEventListener("click", function () {
  if (score >= costTwo) {
    score -= costTwo;
    costTwo = Math.round(costTwo * 1.25);
    setInterval(increaseScoreTwo, 1000);
    counterTwo++;
    document.querySelector("#article2").textContent = costTwo + " $";
    document.querySelector("#counter2").textContent = counterTwo + "x";
  }
});

// ARTICLE 3 --- KLICKSTÄRKE IM GRÖSSEREN AUSMASS
let costThree = 500;
let counterThree = 0;

document.querySelector("#article3").addEventListener("click", function () {
  if (score >= costThree) {
    score -= costThree;
    costThree = Math.round(costThree * 1.3);
    pointsPerClick += 5;
    counterThree++;
    document.querySelector("#article3").textContent = costThree + " $";
    document.querySelector("#counter3").textContent = counterThree + "x";
  }
});

// ARTICLE 4 --- PUNKTE DIE DURCH 2 GENERIERT WERDEN, WERDEN VERDOPPELT
let costFour = 1000;
let counterFour = 0;

document.querySelector("#article4").addEventListener("click", function () {
  if (score >= costFour) {
    score -= costFour;
    costFour = Math.round(costFour * 1.35);
    setInterval(increaseScoreTwo, 500); // Halbiert das Intervall von 'increaseScoreTwo'
    counterFour++;
    document.querySelector("#article4").textContent = costFour + " $";
    document.querySelector("#counter4").textContent = counterFour + "x";
  }
});

// ARTICLE 5 --- GLÜCKSFUNKTION, ZUFÄLLIGE CHANCE DASS ARTIKEL 2 VERDOPPELT WIRD, BEI KAUF HÖHERE CHANCE
let costFive = 2000;
let counterFive = 0;

document.querySelector("#article5").addEventListener("click", function () {
  if (score >= costFive) {
    score -= costFive;
    costFive = Math.round(costFive * 1.4);
    setInterval(function () {
      if (Math.random() < 0.5) {
        // 50% Chance, dass die Punkte verdoppelt werden
        score += 2 * pointsPerClick;
      }
    }, 1000);
    counterFive++;
    document.querySelector("#article5").textContent = costFive + " $";
    document.querySelector("#counter5").textContent = counterFive + "x";
  }
});

// ARTICLE 6 --- BOOST FÜR 30 SEKUNDEN
let costSix = 5000;
let counterSix = 0;

document.querySelector("#article6").addEventListener("click", function () {
  if (score >= costSix) {
    score -= costSix;
    costSix = Math.round(costSix * 1.45);
    let originalPointsPerClick = pointsPerClick;
    pointsPerClick *= 2; // Verdoppelt die Punkte pro Klick
    counterSix++;
    document.querySelector("#article6").textContent = costSix + " $";
    document.querySelector("#counter6").textContent = counterSix + "x";
    setTimeout(function () {
      // Stellt die ursprüngliche Klickrate nach 30 Sekunden wieder her
      pointsPerClick = originalPointsPerClick;
    }, 30000);
  }
});

// ARTICLE 7 --- AUTOMATISIERUNG, ALLE 10 SEKUNDEN KAUFT ES AUTOMATISCH ARTICLE 1 SOLANGE PUNKTE DA SIND
let costSeven = 10000;
let counterSeven = 0;

document.querySelector("#article7").addEventListener("click", function () {
  if (score >= costSeven) {
    score -= costSeven;
    costSeven = Math.round(costSeven * 1.5);
    setInterval(function () {
      if (score >= costOne) {
        score -= costOne;
        costOne = Math.round(costOne * 1.2);
        pointsPerClick++;
        counterOne++;
        document.querySelector("#article1").textContent = costOne + " $";
        document.querySelector("#counter1").textContent = counterOne + "x";
      }
    }, 10000); // Kauft alle 10 Sekunden einen Artikel 1, wenn genug Punkte vorhanden sind
    counterSeven++;
    document.querySelector("#article7").textContent = costSeven + " $";
    document.querySelector("#counter7").textContent = counterSeven + "x";
  }
});
*/
