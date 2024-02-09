let sabotages = [];

function addSabotage(id, displayName, cost) {
  const newSabotage = {
    id: id,
    displayName: displayName,
    cost: cost,
    uses: 0, // Füge ein neues Feld "uses" hinzu
  };
  sabotages.push(newSabotage);
  createSabotageElement(newSabotage);
}

function createSabotageElement(sabotage) {
  const sabotageElement = document.createElement("div");
  sabotageElement.classList.add("sabotage");
  sabotageElement.innerHTML = `
    <p>${sabotage.displayName}</p>
    <p>Cost: ${sabotage.cost}</p>
    <p>Uses: ${sabotage.uses}</p> <!-- Zeige die Anzahl der Uses an -->
  `;

  // Klick-Event für den Sabotage
  sabotageElement.addEventListener("click", () => {
    console.log(`Sabotage ${sabotage.displayName} wurde geklickt!`);

    // Erstelle ein neues Fenster
    const newWindow = document.createElement("div");
    newWindow.style.position = "absolute";
    newWindow.style.left = "250px";
    newWindow.style.width = "250px";
    newWindow.style.height = "500px";
    newWindow.style.backgroundColor = "#c0bbbb";
    newWindow.style.border = "1px solid #000";
    newWindow.style.textAlign = "center";
    newWindow.style.justifyContent = "center";

    // Füge eine Überschrift hinzu
    const heading = document.createElement("h1");
    heading.textContent = "Sabotage Details";
    newWindow.appendChild(heading);

    // Füge ein Textfeld hinzu
    const textField = document.createElement("p");
    textField.textContent = `Details für ${sabotage.displayName}`;
    newWindow.appendChild(textField);

    // Füge die Schaltflächen "Kaufen" und "Verwenden" hinzu
    const buyButton = document.createElement("button");
    buyButton.textContent = "Kaufen";
    buyButton.addEventListener("click", () => {
      sabotage.uses++; // Erhöhe die Anzahl der Uses, wenn auf "Kaufen" geklickt wird
      console.log(`Sabotage ${sabotage.displayName} wurde gekauft!`);
    });
    newWindow.appendChild(buyButton);

    const useButton = document.createElement("button");
    useButton.textContent = "Verwenden";
    useButton.addEventListener("click", () => {
      if (sabotage.uses > 0) { // Stelle sicher, dass die Sabotage gekauft wurde
        sabotage.uses--; // Verringere die Anzahl der Uses, wenn auf "Verwenden" geklickt wird
        console.log(`Sabotage ${sabotage.displayName} wurde verwendet!`);
      } else {
        console.log(`Keine Uses für Sabotage ${sabotage.displayName} verfügbar!`);
      }
    });
    newWindow.appendChild(useButton);

    // Füge ein Timer-Feld hinzu
    const timerField = document.createElement("p");
    timerField.textContent = "00:00:00";
    newWindow.appendChild(timerField);

    // Füge das neue Fenster zum body hinzu
    document.body.appendChild(newWindow);
  });
}

// Beispielaufrufe
addSabotage("sabotage1", "Explosive Banane", 10);
addSabotage("sabotage2", "Schleimige Schuhe", 15);
