let upgrades = [];

function addUpgrade(name, displayName, cost) {
  const newUpgradeId = name.split(" ").join("_").toLowerCase();
  const newUpgrade = {
    id: newUpgradeId,
    name: name,
    displayName: displayName,
    cost: cost,
    locked: true, // Fügen Sie diese Zeile hinzu
  };
  upgrades.push(newUpgrade);
  createUpgradeElement(newUpgrade);
}

function createUpgradeElement(upgrade) {
  // Erstelle ein neues div-Element mit der Klasse "upgrade-box"
  const div = document.createElement("div");
  div.id = upgrade.id;
  div.className = "upgrade-box";

  // Wenn das Upgrade gesperrt ist, setzen Sie display auf none
  if (upgrade.locked) {
    div.style.display = "none";
  }

  // Erstelle einen Button innerhalb des div-Elements
  const button = document.createElement("button");
  button.className = "upgrade-button";
  button.innerHTML = upgrade.displayName; // Setze den Anzeigenamen auf dem Button

  adjustFontSize(button);
  div.appendChild(button);

  // Füge das div-Element zum content-box-shop hinzu
  document.querySelector("#content-box-shop").appendChild(div);
}

function unlockUpgrade(upgradeId) {
  // Finden Sie das Upgrade in der Liste
  const upgrade = upgrades.find((upg) => upg.id === upgradeId);

  // Wenn das Upgrade existiert und noch nicht freigeschaltet wurde
  if (upgrade && upgrade.locked) {
    // Setzen Sie die Eigenschaft "locked" auf false
    upgrade.locked = false;

    // Machen Sie das Element sichtbar
    let upgradeBox = document.querySelector(`#${upgradeId}`);
    upgradeBox.style.display = "block";
  }
}

function adjustFontSize(button) {
  const maxLength = 15; // Maximale Textlänge, bei der die Schriftgröße reduziert wird

  // Wenn der Text zu lang ist, erzwingen Sie einen Zeilenumbruch
  if (button.innerHTML.length > maxLength) {
    button.style.wordWrap = "break-word";
    button.style.whiteSpace = "normal";
    button.style.lineHeight = "1.5"; // Setzen Sie dies auf den gewünschten Zeilenabstand
    button.style.hyphens = "auto";
  } else {
    // Wenn der Text nicht zu lang ist, setzen Sie word-wrap und white-space auf normal und die Höhe auf den ursprünglichen Wert
    button.style.wordWrap = "normal";
    button.style.whiteSpace = "nowrap";
    button.style.lineHeight = "normal"; // Setzen Sie dies auf den ursprünglichen Zeilenabstand
  }
}

// Remove Upgrade
function removeUpgrade(upgradeId) {
  upgrades = upgrades.filter((upgrade) => upgrade.id !== upgradeId);
  const upgradeElement = document.querySelector(`#${upgradeId}`);
  upgradeElement.remove();
}

<<<<<<< HEAD
document.querySelector("#buyItem").addEventListener("click", function () {
  if (aktuellerButton) {
    // Finden Sie das Upgrade nach Namen
    const upgrade = upgrades.find((upg) => upg.name === aktuellerButton);

    // Wenn das Upgrade existiert und der score größer ist als der Preis des Upgrades
    if (upgrade && score >= upgrade.cost) {
      // Reduzieren Sie den score um den Preis des Upgrades
      score -= upgrade.cost;

      // Führen Sie die Funktion executeUpgradeFunction aus
      executeUpgradeFunction(upgrade);

      // Aktualisieren Sie den Kaufzähler und die Anzeige
      kaufZähler[aktuellerButton]++;
      counterBox.textContent = kaufZähler[aktuellerButton] + "x";
    }
  }
});

// - - - - - - - - //

// button1 - Mülleimer Rütteln//
function shopUpgradeButton1(upgrade) {
  document.getElementById("clickprogress").style.display = "block";
  if (kaufZähler["button1"] < 5) {
    dropchance90 = dropchance90 + 120;
    newcost = Math.round(upgrade.cost * 1.05 + 7); // Verwenden Sie Math.round() anstelle von math.round()
  } else if (kaufZähler["button1"] < 10) {
    dropchance90 = dropchance90 + 95;
    dropchance80 = dropchance80 + 100;
    newcost = Math.round(upgrade.cost * 1.04 + 12);
  } else if (kaufZähler["button1"] < 20) {
    dropchance90 = dropchance90 + 80;
    dropchance80 = dropchance80 + 80;
    dropchance50 = dropchance50 + 100;
    newcost = Math.round(upgrade.cost * 1.12) + 19;
  } else if (kaufZähler["button1"] < 40) {
    dropchance90 = dropchance90 + 75;
    dropchance80 = dropchance80 + 70;
    dropchance50 = dropchance50 + 80;
    dropchance20 = dropchance20 + 60;
    newcost = Math.round(upgrade.cost * 1.18) + 41;
  } else if (kaufZähler["button1"] < 100) {
    dropchance90 = dropchance90 + 120;
    dropchance80 = dropchance80 + 80;
    dropchance50 = dropchance50 + 80;
    dropchance20 = dropchance20 + 50;
    dropchance01 = dropchance01 + 40;
    newcost = Math.round(upgrade.cost * 1.18) + 41;
  } else if (kaufZähler["button1"] < 250) {
  } else if (kaufZähler["button1"] < 500) {
  } else if (kaufZähler["button1"] < 10) {
  }
  changeUpgradeCost("button1", newcost);
  console.log("Neuer Preis: " + newcost);
  console.log(
    "Dropchances: [90%: " +
      dropchance90 / 100 +
      "] [80%: " +
      dropchance80 / 100 +
      "] [50%: " +
      dropchance50 / 100 +
      "]"
  );
}

// button2 -  Pfandflaschensammler//
function shopUpgradeButton2(upgrade) {
  newcost = Math.round(upgrade.cost * 1.25); // Verwenden Sie Math.round() anstelle von math.round()

  if (kaufZähler["button2"] < 5) {
  } else if (kaufZähler["button2"] < 5) {
  } else if (kaufZähler["button2"] < 5) {
  } else if (kaufZähler["button2"] < 5) {
  } else if (kaufZähler["button2"] < 5) {
  } else if (kaufZähler["button2"] < 5) {
  }
  changeUpgradeCost("button2", newcost);
}

=======
>>>>>>> 1aba1127281e464cd49de0e9d46c968f55f9ca37
function executeUpgradeFunction(upgrade) {
  switch (upgrade.name) {
    case "button1":
      shopUpgradeButton1(upgrade);
      break;
    case "button2":
      shopUpgradeButton2(upgrade);
      break;
    case "button3":
      shopUpgradeButton3(upgrade);
      break;
    case "button4":
      shopUpgradeButton4(upgrade);
      break;
    case "button5":
      shopUpgradeButton5(upgrade);
      break;
    case "button6":
      shopUpgradeButton6(upgrade);
      break;
    case "button7":
      shopUpgradeButton7(upgrade);
      break;
    case "button8":
      shopUpgradeButton8(upgrade);
      break;
    case "button9":
      shopUpgradeButton9(upgrade);
      break;
    case "button10":
      shopUpgradeButton10(upgrade);
      break;
    case "button11":
      shopUpgradeButton11(upgrade);
      break;
    case "button12":
      shopUpgradeButton12(upgrade);
      break;
    case "button13":
      shopUpgradeButton13(upgrade);
      break;
    case "button14":
      shopUpgradeButton14(upgrade);
      break;
    case "button15":
      shopUpgradeButton15(upgrade);
      break;
    case "button16":
      shopUpgradeButton16(upgrade);
      break;
    case "button17":
      shopUpgradeButton17(upgrade);
      break;
    case "button18":
      shopUpgradeButton18(upgrade);
      break;
    case "button19":
      shopUpgradeButton19(upgrade);
      break;
    case "button20":
      shopUpgradeButton20(upgrade);
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

addUpgrade("button1", "Mülleiner Rütteln", 0);
addUpgrade("button2", "Pfandflaschen- sammler", 0);
addUpgrade("button3", "Rüttelmaschine", 0);
addUpgrade("button4", "Dellen Reinschlagen", 0);
addUpgrade("button5", "Nie wieder Hungrig", 0);
addUpgrade("button6", "Essensreste schmeißen", 0);
addUpgrade("button7", "Durchsichtiges Glück", 0);
addUpgrade("button8", "Restebankett", 0);
addUpgrade("button9", "Macht Lustige Geräusche", 0);
addUpgrade("button10", "Schrottiger Anhänger", 0);
addUpgrade("button11", "Schilder aufstellen", 0);
addUpgrade("button12", "Uhr kaputt machen", 0);
addUpgrade("button13", "Button13", 0);
addUpgrade("button14", "Button14", 0);
addUpgrade("button15", "Button15", 0);
addUpgrade("button16", "Button16", 0);
addUpgrade("button17", "Button17", 0);
addUpgrade("button18", "Button18", 0);
addUpgrade("button19", "Button19", 0);
addUpgrade("button20", "Button20", 0);

for (let i = 1; i <= 20; i++) {
  unlockUpgrade(`button${i}`);
}

let kaufZähler = {
  button1: 0,
  button2: 0,
  button3: 0,
  button4: 0,
  button5: 0,
  button6: 0,
  button7: 0,
  button8: 0,
  button9: 0,
  button10: 0,
  button11: 0,
  button12: 0,
  button13: 0,
  button14: 0,
  button15: 0,
  button16: 0,
  button17: 0,
  button18: 0,
  button19: 0,
  button20: 0,

  // Füge hier weitere Buttons hinzu
};

let aktuellerButton = null;
let counterBox = document.querySelector("#counterBox");

for (let i = 1; i <= 20; i++) {
  document.querySelector("#button" + i).addEventListener("click", function () {
    aktuellerButton = "button" + i;
    counterBox.textContent = kaufZähler[aktuellerButton] + "x";
  });
}

let isClicked = false; // Zustand des Buttons
let activeButton = null; // Aktiver Button

function updateDescBox(buttonId, title, text) {
  let descBox = document.querySelector("#descBox");
  let descTitle = document.querySelector("#descTitle");
  let descText = document.querySelector("#descText");

  if (activeButton === buttonId) {
    // Wenn der gleiche Button erneut geklickt wird
    descBox.style.transform = "";
    descBox.style.display = "none";
    descTitle.textContent = "";
    descText.textContent = "";
    activeButton = null;
  } else {
    // Wenn ein anderer Button geklickt wird
    descBox.style.transform = "translateX(575px)";
    descBox.style.display = "block";
    descTitle.textContent = title;
    descText.textContent = text;
    activeButton = buttonId;
  }
}

document
  .querySelector("#research-left")
  .addEventListener("click", closeDescBox);
document
  .querySelector("#research-right")
  .addEventListener("click", closeDescBox);
document.querySelector("#shop-left").addEventListener("click", closeDescBox);
document.querySelector("#shop-right").addEventListener("click", closeDescBox);
document
  .querySelector("#sabotage-left")
  .addEventListener("click", closeDescBox);
document
  .querySelector("#sabotage-right")
  .addEventListener("click", closeDescBox);

function closeDescBox() {
  let descBox = document.querySelector("#descBox");
  let descTitle = document.querySelector("#descTitle");
  let descText = document.querySelector("#descText");

  descBox.style.transform = "";
  descBox.style.display = "none";
  descTitle.textContent = "";
  descText.textContent = "";
  activeButton = null;
}

// button1 - Mülleimer Rütteln//

document.querySelector("#button1").addEventListener("click", function () {
  updateDescBox(
    "button1",
    "Mülleimer Rütteln",
    "Du hast etwas Neues rausgefunden! Wenn du an dieser gewaltigen Tonne schüttelst, kommt viel mehr Müll raus! Du fügst den Multiplikatorbalken zu deinem Spiel hinzu. Je stärker du rüttelst, desto mehr kommt raus!."
  );
});


function shopUpgradeButton1(upgrade) {
  document.getElementById("clickprogress").style.display = "block";
  if (kaufZähler["button1"] < 5){
  dropchance90 = dropchance90 + 120;
  newcost = Math.round(upgrade.cost * 1.05 + 7); // Verwenden Sie Math.round() anstelle von math.round()
  } else if (kaufZähler["button1"] < 10){
    dropchance90 = dropchance90 + 95;
    dropchance80 = dropchance80 + 100;
    newcost = Math.round(upgrade.cost * 1.04 + 12);
  } else if (kaufZähler["button1"] < 20){
    dropchance90 = dropchance90 + 80;
    dropchance80 = dropchance80 + 80;
    dropchance50 = dropchance50 + 100;
    newcost = Math.round(upgrade.cost * 1.12) + 19;
  } else if (kaufZähler["button1"] < 40){
    dropchance90 = dropchance90 + 75;
    dropchance80 = dropchance80 + 70;
    dropchance50 = dropchance50 + 80;
    dropchance20 = dropchance20 + 60;
    newcost = Math.round(upgrade.cost * 1.18) + 41;
  } else if (kaufZähler["button1"] < 100){
    dropchance90 = dropchance90 + 120;
    dropchance80 = dropchance80 + 80;
    dropchance50 = dropchance50 + 80;
    dropchance20 = dropchance20 + 50;
    dropchance01 = dropchance01 + 40;
    newcost = Math.round(upgrade.cost * 1.18) + 41;
  } else if (kaufZähler["button1"] < 250){

  } else if (kaufZähler["button1"] < 500){

  } else if (kaufZähler["button1"] < 10){

  }
  changeUpgradeCost("button1", newcost);
  console.log("Neuer Preis: "+newcost);
  console.log("Dropchances: [90%: " + dropchance90 / 100 + "] [80%: " + dropchance80 / 100 +"] [50%: " + dropchance50 / 100 + "]");
}


// button2 -  Pfandflaschensammler//

document.querySelector("#button2").addEventListener("click", function () {
  updateDescBox(
    "button2",
    "Pfandflaschen-sammler",
    "In den Tiefen dieser riesigen Blechbüchse hast du einen unglaublichen Fund gemacht! Plastik! Du bist begeistert von diesem neuen Material und erkennst den Wert dieser neuen, wertvollen Ressource!"
  );
});

function shopUpgradeButton2(upgrade) {
  console.log("button2");
  newcost = Math.round(upgrade.cost * 1.25); // Verwenden Sie Math.round() anstelle von math.round()
  if (kaufZähler["button1"] == 0){
    addplastic();
  } else {

  }
  changeUpgradeCost("button2", newcost);
}

document.querySelector("#button3").addEventListener("click", function () {
  updateDescBox(
    "button3",
    "Rüttelmaschine",
    "Die ganze Zeit an dieser blöden Tonne zu rütteln macht echt müde... Dein Erfindergeist war gefragt! Du hast eine Rüttelmaschine erfunden, sie erledigt diese nervige Aufgabe für dich. Fortan rüttelt die Maschine an der Mülltonne und generiert Müll für dich."
  );
});

document.querySelector("#button4").addEventListener("click", function () {
  updateDescBox(
    "button4",
    "Dellen Reinschlagen",
    "Du hast gemerkt dass die Mittel nur begrenzt sind. Unglaublich nervig!. Du entscheidest dich also für Vandalismus und schlägst ein paar Dellen in die Tonne, damit mehr Müll reinpasst. Du kannst nun mehr Müll sammeln!"
  );
});

document.querySelector("#button5").addEventListener("click", function () {
  updateDescBox(
    "button5",
    "Nie wieder Hungrig",
    "Beispiel Text: Mit dieser Verbesserung kannst du Essensreste aus dem Müll sammeln und verwerten. Nie wieder hungrig!"
  );
});

document.querySelector("#button6").addEventListener("click", function () {
  updateDescBox(
    "button6",
    "Essensreste schmeißen",
    "Beispiel Text: Mit dieser Verbesserung kannst du Essensreste effizienter entsorgen. Weniger Abfall, mehr Sauberkeit!"
  );
});

document.querySelector("#button7").addEventListener("click", function () {
  updateDescBox(
    "button7",
    "Durchsichtiges Glück",
    "Beispiel Text: Mit dieser Verbesserung kannst du sehen, was in deinem Mülleimer ist, ohne ihn zu öffnen. Keine Überraschungen mehr!"
  );
});

document.querySelector("#button8").addEventListener("click", function () {
  updateDescBox(
    "button8",
    "Restebankett",
    "Beispiel Text: Mit dieser Verbesserung kannst du ein Festmahl aus Resten zubereiten. Wer sagt, dass man gutes Essen verschwenden sollte?"
  );
});

document.querySelector("#button9").addEventListener("click", function () {
  updateDescBox(
    "button9",
    "Macht Lustige Geräusche",
    "Beispiel Text: Mit dieser Verbesserung macht dein Mülleimer lustige Geräusche, wenn du ihn öffnest. Wer hat gesagt, dass Müll langweilig sein muss?"
  );
});

document.querySelector("#button10").addEventListener("click", function () {
  updateDescBox(
    "button10",
    "Schrottiger Anhänger",
    "Beispiel Text: Mit dieser Verbesserung kannst du einen Anhänger an deinem Mülleimer befestigen, um mehr Müll zu transportieren. Mehr Müll auf einmal!"
  );
});

document.querySelector("#button11").addEventListener("click", function () {
  updateDescBox(
    "button11",
    "Schilder aufstellen",
    "Beispiel Text: Mit dieser Verbesserung kannst du Schilder aufstellen, um andere darauf hinzuweisen, dass sie ihren Müll ordnungsgemäß entsorgen sollen. Gemeinsam für eine saubere Umwelt!"
  );
});

document.querySelector("#button12").addEventListener("click", function () {
  updateDescBox(
    "button12",
    "Uhr kaputt machen",
    "Beispiel Text: Mit dieser Verbesserung kannst du die Uhr an deinem Mülleimer kaputt machen. Wer braucht schon Zeit, wenn er Müll hat?"
  );
});

document.querySelector("#button13").addEventListener("click", function () {
  updateDescBox(
    "button13",
    "Button13",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button14").addEventListener("click", function () {
  updateDescBox(
    "button14",
    "Button14",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button15").addEventListener("click", function () {
  updateDescBox(
    "button15",
    "Button15",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button16").addEventListener("click", function () {
  updateDescBox(
    "button16",
    "Button16",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button17").addEventListener("click", function () {
  updateDescBox(
    "button17",
    "Button17",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button18").addEventListener("click", function () {
  updateDescBox(
    "button18",
    "Button18",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button19").addEventListener("click", function () {
  updateDescBox(
    "button19",
    "Button19",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button20").addEventListener("click", function () {
  updateDescBox(
    "button20",
    "Button20",
    "Beispiel Text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

/*

document.querySelector("#button2").addEventListener("click", function () {
  updateDescBox(
    "button2",
    "Müll in die Welt streuen",
    "Alleine arbeiten ist sehr anstrengend. Du schmeißt daher deinen Müll rum, in der Hoffnung mehr Hilfe zu erhalten. Wilde Waschbären werden darauf aufmerksam und werden ihren Weg zu dir finden"
  );
});

document.querySelector("#button3").addEventListener("click", function () {
  updateDescBox(
    "button3",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

*/

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
