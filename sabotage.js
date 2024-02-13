let sabotages = [];

function addSabotage(id, displayName, cost, producetime) {
  const newSabotage = {
    id: id,
    displayName: displayName,
    cost: cost,
    uses: 0,
    producetime: producetime,
    inUse: false,
    inDevelopment: false,
  };
  sabotages.push(newSabotage);
  createSabotageElement(newSabotage);
}

function createSabotageElement(sabotage) {
  // Erstellt ein neues div-Element
  let SabotageElement = document.createElement("div");
  SabotageElement.id = sabotage.id;
  SabotageElement.className = "sabotage-element";
  SabotageElement.style.display = "flex"; // Fügt display: flex hinzu
  SabotageElement.style.alignItems = "center"; // Zentriert den Inhalt vertikal
  SabotageElement.style.justifyContent = "center"; // Zentriert den Inhalt horizontal

  // Setzt die line-height auf 1.5, wenn displayName mehr als 15 Zeichen hat
  if (sabotage.displayName.length > 15) {
    SabotageElement.style.lineHeight = "1.5";
  }

  // Fügt dem neuen Element den Namen der Sabotage hinzu
  SabotageElement.innerHTML = sabotage.displayName;

  // Erstellt einen Button innerhalb des div-Elements
  const button = document.createElement("button");
  button.className = "sabotage-button";
  button.style.position = "absolute"; // Positioniert den Button über dem Sabotage-Element
  button.style.backgroundColor = "transparent"; // Macht den Button transparent
  button.style.border = "none"; // Entfernt den Rand des Buttons

  // Fügt den Button zum SabotageElement hinzu
  SabotageElement.appendChild(button);

  // Fügt das neue Element zur "content-box-sabotage" hinzu
  document.getElementById("content-box-sabotage").appendChild(SabotageElement);
}

addSabotage("sabotage1", "Müll klauen", 100, 60);
addSabotage("sabotage2", "Schlägerei anstiften", 200, 120);
addSabotage("sabotage3", "Müllhypnose", 150, 90);
addSabotage("sabotage4", "Müll anzünden", 250, 150);
addSabotage("sabotage5", "Müll Glocken", 300, 180);
addSabotage("sabotage6", "Waschbär Spionage", 300, 180);
addSabotage("sabotage7", "Waschbär Sabotage", 300, 180);
addSabotage("sabotage8", "Truck übernahme", 300, 180);
addSabotage("sabotage9", "Spiegel", 300, 180);
addSabotage("sabotage10", "Kriegsdiebstahl", 300, 180); // Du kannst eine zufällige Sabotage deines Gegners klauen
addSabotage("sabotage11", "Waschbär Diebstahl", 300, 180); // Klaue einen Waschbär deines Gegners
addSabotage("sabotage12", "Kriegsdiebstahl", 300, 180);
addSabotage("sabotage13", "Waschbäraufstand", 300, 180);
addSabotage("sabotage14", "Waschbären Assassine", 300, 180);

document.querySelector("#sabotage1").addEventListener("click", function () {
  updateDescBox(
    "sabotage1",
    "Müll klauen",
    "Beispiel Text: Mit dieser Sabotage kannst du heimlich Müll von deinem Gegner stehlen und so deinen eigenen Vorrat aufstocken."
  );
});

document.querySelector("#sabotage2").addEventListener("click", function () {
  updateDescBox(
    "sabotage2",
    "Schlägerei anstiften",
    "Beispiel Text: Mit dieser Sabotage kannst du eine Schlägerei provozieren, die deinen Gegner ablenkt und dir einen Vorteil verschafft."
  );
});

document.querySelector("#sabotage3").addEventListener("click", function () {
  updateDescBox(
    "sabotage3",
    "Müllhypnose",
    "Beispiel Text: Mit dieser Sabotage kannst du deinen Gegner hypnotisieren, um ihn dazu zu bringen, mehr Müll zu produzieren."
  );
});

document.querySelector("#sabotage4").addEventListener("click", function () {
  updateDescBox(
    "sabotage4",
    "Müll anzünden",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Brand im Müllhaufen deines Gegners entfachen, wodurch seine Ressourcen schwinden."
  );
});

document.querySelector("#sabotage5").addEventListener("click", function () {
  updateDescBox(
    "sabotage5",
    "Müll Glocken",
    "Beispiel Text: Mit dieser Sabotage kannst du Glocken im Müll deines Gegners verstecken, um ihn abzulenken und zu verwirren."
  );
});

document.querySelector("#sabotage6").addEventListener("click", function () {
  updateDescBox(
    "sabotage6",
    "Waschbär Spionage",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Waschbären aussenden, um die Strategie deines Gegners auszuspionieren."
  );
});

document.querySelector("#sabotage7").addEventListener("click", function () {
  updateDescBox(
    "sabotage7",
    "Waschbär Sabotage",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Waschbären aussenden, um die Operationen deines Gegners zu sabotieren."
  );
});

document.querySelector("#sabotage8").addEventListener("click", function () {
  updateDescBox(
    "sabotage8",
    "Truck übernahme",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Truck deines Gegners übernehmen und so seine Lieferungen stören."
  );
});

document.querySelector("#sabotage9").addEventListener("click", function () {
  updateDescBox(
    "sabotage9",
    "Spiegel",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Spiegel verwenden, um die Sabotagen deines Gegners zurückzuwerfen."
  );
});

document.querySelector("#sabotage10").addEventListener("click", function () {
  updateDescBox(
    "sabotage10",
    "Kriegsdiebstahl",
    "Beispiel Text: Mit dieser Sabotage kannst du eine zufällige Sabotage deines Gegners klauen und zu deinem Vorteil nutzen."
  );
});

document.querySelector("#sabotage11").addEventListener("click", function () {
  updateDescBox(
    "sabotage11",
    "Waschbär Diebstahl",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Waschbären deines Gegners klauen und zu deinem Team hinzufügen."
  );
});

document.querySelector("#sabotage12").addEventListener("click", function () {
  updateDescBox(
    "sabotage12",
    "Kriegsdiebstahl",
    "Beispiel Text: Mit dieser Sabotage kannst du eine zufällige Sabotage deines Gegners klauen und zu deinem Vorteil nutzen."
  );
});

document.querySelector("#sabotage13").addEventListener("click", function () {
  updateDescBox(
    "sabotage13",
    "Waschbäraufstand",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Aufstand unter den Waschbären deines Gegners anstiften und so Chaos verursachen."
  );
});

document.querySelector("#sabotage14").addEventListener("click", function () {
  updateDescBox(
    "sabotage14",
    "Waschbären Assasine",
    "Beispiel Text: Mit dieser Sabotage kannst du einen Waschbären-Assasinen aussenden, um die Waschbären deines Gegners zu eliminieren."
  );
});
