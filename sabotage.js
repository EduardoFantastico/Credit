let sabotages = [];
let openWindowId = null;

function addSabotage(id, displayName, cost, producetime, usetime) {
  const newSabotage = {
    id: id,
    displayName: displayName,
    cost: cost,
    uses: 0,
    producetime: producetime,
    usetime: usetime,
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

  // Fügt einen Event-Listener zum neuen Element hinzu
  SabotageElement.addEventListener("click", function() {
    openWindow(sabotage);
  });

  // Fügt das neue Element zur "content-box-sabotage" hinzu
  document.getElementById("content-box-sabotage").appendChild(SabotageElement);
}


function openWindow(sabotage) {
  // Überprüft, ob das Fenster, das geöffnet werden soll, bereits geöffnet ist
  if (openWindowId === "window-" + sabotage.id) {
    // Wenn ja, entfernt es
    document.getElementById(openWindowId).remove();
    openWindowId = null;
    return;
  }

  // Überprüft, ob bereits ein anderes Fenster geöffnet ist
  if (openWindowId) {
    // Wenn ja, entfernt es
    document.getElementById(openWindowId).remove();
  }

  // Erstellt ein neues Fenster
  let window = document.createElement("div");
  window.id = "window-" + sabotage.id;
  window.classList.add("sabotageWindow"); // Fügt die CSS-Klasse hinzu

  // Fügt das Fenster zum Dokument hinzu
  document.body.appendChild(window);

  // Speichert die ID des geöffneten Fensters
  openWindowId = window.id;
}







addSabotage('sabotage1', 'Operation Blitz', 100, 60);
addSabotage('sabotage2', 'Mission Phantom', 200, 120);
addSabotage('sabotage3', 'Aktion Schatten', 150, 90);
addSabotage('sabotage4', 'Unternehmen Sturm', 250, 150);
addSabotage('sabotage5', 'Plan Welle', 300, 180);
