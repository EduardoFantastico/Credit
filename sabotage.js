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

  // Fügt dem neuen Element den Namen der Sabotage hinzu
  SabotageElement.innerHTML = sabotage.displayName;

  // Fügt die Klasse "sabotage-element" zum neuen Element hinzu
  SabotageElement.classList.add("sabotage-element");

  // Überprüft die Länge des Texts und ändert die line-height, wenn nötig
  if (sabotage.displayName.length > 15) {
    SabotageElement.style.whiteSpace = "normal";
    SabotageElement.style.lineHeight = "1.5"; // Setzen Sie dies auf den gewünschten Zeilenabstand
    SabotageElement.style.hyphens = "auto";
    SabotageElement.style.display = "flex"; // Fügt Flexbox hinzu
    SabotageElement.style.alignItems = "center"; // Zentriert den Inhalt vertikal
    SabotageElement.style.justifyContent = "center"; // Zentriert den Inhalt horizontal
  }

  // Fügt das neue Element zur "content-box-sabotage" hinzu
  document.getElementById("content-box-sabotage").appendChild(SabotageElement);
}

addSabotage('sabotage1', 'Operation Blitz', 100, 60);
addSabotage('sabotage2', 'Mission Phantom', 200, 120);
addSabotage('sabotage3', 'Aktion Schatten', 150, 90);
addSabotage('sabotage4', 'Unternehmen Sturm', 250, 150);
addSabotage('sabotage5', 'Plan Welle', 300, 180);
