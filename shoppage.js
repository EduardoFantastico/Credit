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

addUpgrade("button3", "Button3");
addUpgrade("button4", "Button4");
addUpgrade("button5", "Button5");
addUpgrade("button6", "Button6");
addUpgrade("button7", "Button7");
addUpgrade("button8", "Button8");
addUpgrade("button9", "Button9");
addUpgrade("button10", "Button10");
addUpgrade("button11", "Button11");
addUpgrade("button12", "Button12");
addUpgrade("button13", "Button13");
addUpgrade("button14", "Button14");
addUpgrade("button15", "Button15");
addUpgrade("button16", "Button16");
addUpgrade("button17", "Button17");
addUpgrade("button18", "Button18");
addUpgrade("button19", "Button19");
addUpgrade("button20", "Button20");
addUpgrade("button21", "Button21");
addUpgrade("button22", "Button22");
addUpgrade("button23", "Button23");

let kaufZähler = {
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
  button21: 0,
  button22: 0,
  button23: 0,

  // Füge hier weitere Buttons hinzu
};

let aktuellerButton = null;
let counterBox = document.querySelector("#counterBox");

for (let i = 3; i <= 23; i++) {
  document.querySelector("#button" + i).addEventListener("click", function () {
    aktuellerButton = "button" + i;
    counterBox.textContent = kaufZähler[aktuellerButton] + "x";
  });
}

document.querySelector("#buyItem").addEventListener("click", function () {
  if (aktuellerButton) {
    kaufZähler[aktuellerButton]++;
    counterBox.textContent = kaufZähler[aktuellerButton] + "x";
  }
});

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

document.querySelector("#button3").addEventListener("click", function () {
  updateDescBox(
    "button3",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button4").addEventListener("click", function () {
  updateDescBox(
    "button4",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button5").addEventListener("click", function () {
  updateDescBox(
    "button5",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

document.querySelector("#button6").addEventListener("click", function () {
  updateDescBox(
    "button6",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button7").addEventListener("click", function () {
  updateDescBox(
    "button7",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button8").addEventListener("click", function () {
  updateDescBox(
    "button8",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

document.querySelector("#button9").addEventListener("click", function () {
  updateDescBox(
    "button9",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button10").addEventListener("click", function () {
  updateDescBox(
    "button10",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button11").addEventListener("click", function () {
  updateDescBox(
    "button11",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

document.querySelector("#button12").addEventListener("click", function () {
  updateDescBox(
    "button12",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button13").addEventListener("click", function () {
  updateDescBox(
    "button13",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button14").addEventListener("click", function () {
  updateDescBox(
    "button14",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

document.querySelector("#button15").addEventListener("click", function () {
  updateDescBox(
    "button15",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button16").addEventListener("click", function () {
  updateDescBox(
    "button16",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button17").addEventListener("click", function () {
  updateDescBox(
    "button17",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

document.querySelector("#button18").addEventListener("click", function () {
  updateDescBox(
    "button18",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button19").addEventListener("click", function () {
  updateDescBox(
    "button19",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button20").addEventListener("click", function () {
  updateDescBox(
    "button20",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
});

document.querySelector("#button21").addEventListener("click", function () {
  updateDescBox(
    "button21",
    "Müllbeutel",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  );
});

document.querySelector("#button22").addEventListener("click", function () {
  updateDescBox(
    "button22",
    "Was ist Ziegenkäse?",
    "Ziegenkäse ist Käse aus Ziegenmilch. Es gibt, wie auch bei Käse aus Kuhmilch, eine große Bandbreite von unterschiedlichen Sorten. Nicht jede Sorte wird zu 100 % aus Ziegenmilch hergestellt, oft ist Kuh- oder Schafsmilch untergemischt."
  );
});

document.querySelector("#button23").addEventListener("click", function () {
  updateDescBox(
    "button23",
    "Rafael Dutra?",
    "Rafael, ein mutiger Junge, segelte ins Unbekannte. Ein Sturm erfasste sein Boot. Allein, verloren, doch unerschüttert, wurde seine Reise zur tragischen Heldengeschichte."
  );
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
