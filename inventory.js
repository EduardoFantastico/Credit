function createEmployee(name, price, speed, capacity, laziness) {
  // Zugriff auf das Hauptinventar-Element
  let inventoryContainer = document.getElementById("inventory-container");

  // Erstellung des Hauptcontainers für jeden Mitarbeiter
  let mainContainer = document.createElement("div");
  mainContainer.id = "mainContainer";

  // Erstellung des Profilbild-Containers
  let profilePicContainer = document.createElement("div");
  profilePicContainer.id = "profilePicContainer";
  mainContainer.appendChild(profilePicContainer);

  // Erstellung des Info-Containers, der Text und Buttons enthält
  let infoContainer = document.createElement("div");
  infoContainer.id = "infoContainer";

  // Erstellung des Textcontainers, der alle Textelemente enthält
  let textContainer = document.createElement("div");
  textContainer.id = "textContainer";

  // Erstellung und Hinzufügen der einzelnen Textelemente
  let priceElement = document.createElement("p");
  priceElement.id = "priceElement";
  priceElement.textContent = `PRICE: ${price}`; 
  textContainer.appendChild(priceElement);
   
  let nameElement = document.createElement("p");
  nameElement.id = "nameElement";
  nameElement.textContent = name;
  textContainer.appendChild(nameElement);

  let speedElement = document.createElement("p");
  speedElement.id = "speedElement";
  speedElement.textContent = `Speed: ${speed}`; 
  textContainer.appendChild(speedElement);

  let capacityElement = document.createElement("p");
  capacityElement.id = "capacityElement";
  capacityElement.textContent = `Capacity: ${capacity}`; 
  textContainer.appendChild(capacityElement);

  let lazinessElement = document.createElement("p");
  lazinessElement.id = "lazinessElement";
  lazinessElement.textContent = `Laziness: ${laziness}`; 
  textContainer.appendChild(lazinessElement);

  // Hinzufügen des Textcontainers zum Info-Container
  infoContainer.appendChild(textContainer);

  // Erstellung des Button-Containers
  let buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";

  // Erstellung und Hinzufügen der einzelnen Buttons
  let invButton1 = document.createElement("button");
  invButton1.id = "invButton1";
  invButton1.textContent = "Button 1";
  invButton1.addEventListener("click", function () {
  console.log("Button 1 wurde geklickt!"); // Aktion für Button 1
  });
  buttonContainer.appendChild(invButton1);

  let invButton2 = document.createElement("button");
  invButton2.id = "invButton2";
  invButton2.textContent = "Button 2";
  invButton2.addEventListener("click", function () {
  console.log("Button 2 wurde geklickt!"); // Aktion für Button 2
  });
  buttonContainer.appendChild(invButton2);

  // Hinzufügen des Button-Containers zum Info-Container
  infoContainer.appendChild(buttonContainer);

  // Hinzufügen des Info-Containers zum Hauptcontainer
  mainContainer.appendChild(infoContainer);

  // Hinzufügen des Hauptcontainers zum Inventar-Container
  inventoryContainer.appendChild(mainContainer);
}

// Erstellung von Mitarbeiter-Elementen
createEmployee("Racooner", 500, 5, 12, 13);
createEmployee("Larry", 700, 7, 12, 32);
createEmployee("Gandalf magicboy", 200, 4, 5, 10);
