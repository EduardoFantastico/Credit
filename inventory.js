function createEmployee(name, price, speed, capacity, laziness) {
  let inventoryContainer = document.getElementById("inventory-container");

  let mainContainer = document.createElement("div");
  mainContainer.id = "mainContainer";

  let profilePicContainer = document.createElement("div");
  profilePicContainer.id = "profilePicContainer";
  mainContainer.appendChild(profilePicContainer);

  let infoContainer = document.createElement("div");
  infoContainer.id = "infoContainer";

  let textContainer = document.createElement("div"); /* Hinzugefügt */
  textContainer.id = "textContainer"; /* Hinzugefügt */

  let priceElement = document.createElement("p");
  priceElement.id = "priceElement";
  priceElement.textContent = "PRICE: " + price;
  textContainer.appendChild(priceElement); /* Geändert */

  let nameElement = document.createElement("p");
  nameElement.id = "nameElement";
  nameElement.textContent = name;
  textContainer.appendChild(nameElement); /* Geändert */

  let speedElement = document.createElement("p");
  speedElement.id = "speedElement";
  speedElement.textContent = "Speed: " + speed;
  textContainer.appendChild(speedElement); /* Geändert */

  let capacityElement = document.createElement("p");
  capacityElement.id = "capacityElement";
  capacityElement.textContent = "Capacity: " + capacity;
  textContainer.appendChild(capacityElement); /* Geändert */

  let lazinessElement = document.createElement("p");
  lazinessElement.id = "lazinessElement";
  lazinessElement.textContent = "Laziness: " + laziness;
  textContainer.appendChild(lazinessElement); /* Geändert */

  infoContainer.appendChild(textContainer); /* Hinzugefügt */

  // Erstelle die Buttons und füge sie zum Info-Container hinzu
  let buttonContainer = document.createElement("div"); /* Hinzugefügt */
  buttonContainer.id = "buttonContainer"; /* Hinzugefügt */

  let button1 = document.createElement("button");
  button1.id = "button1";
  button1.textContent = "Button 1";
  button1.addEventListener('click', function() {
    // Fügen Sie hier den Code ein, der ausgeführt werden soll, wenn Button 1 geklickt wird.
    console.log("Button 1 wurde geklickt!");
  });
  buttonContainer.appendChild(button1); /* Geändert */

  let button2 = document.createElement("button");
  button2.id = "button2";
  button2.textContent = "Button 2";
  button2.addEventListener('click', function() {
    // Fügen Sie hier den Code ein, der ausgeführt werden soll, wenn Button 2 geklickt wird.
    console.log("Button 2 wurde geklickt!");
  });
  buttonContainer.appendChild(button2); /* Geändert */

  infoContainer.appendChild(buttonContainer); /* Geändert */

  mainContainer.appendChild(infoContainer);
  inventoryContainer.appendChild(mainContainer);
}

createEmployee("Racooner", 500, 5, 12, 13);
createEmployee("Larry", 700, 7, 12, 32);
createEmployee("Gandalf magicboy", 200, 4, 5, 10);
