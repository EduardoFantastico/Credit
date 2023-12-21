function createEmployee(name, price, speed, capacity, laziness) {
  let inventoryContainer = document.getElementById("inventory-container");

  let mainContainer = document.createElement("div");
  mainContainer.id = "mainContainer";

  let profilePicContainer = document.createElement("div");
  profilePicContainer.id = "profilePicContainer";
  mainContainer.appendChild(profilePicContainer);

  let infoContainer = document.createElement("div");
  infoContainer.id = "infoContainer";

  let priceElement = document.createElement("p");
  priceElement.id = "priceElement";
  priceElement.textContent = "PRICE: " + price;
  infoContainer.appendChild(priceElement);

  let nameElement = document.createElement("p");
  nameElement.id = "nameElement";
  nameElement.textContent = name;
  infoContainer.appendChild(nameElement);

  let speedElement = document.createElement("p");
  speedElement.id = "speedElement";
  speedElement.textContent = "Speed: " + speed;
  infoContainer.appendChild(speedElement);

  let capacityElement = document.createElement("p");
  capacityElement.id = "capacityElement";
  capacityElement.textContent = "Capacity: " + capacity;
  infoContainer.appendChild(capacityElement);

  let lazinessElement = document.createElement("p");
  lazinessElement.id = "lazinessElement";
  lazinessElement.textContent = "Laziness: " + laziness;
  infoContainer.appendChild(lazinessElement);

  mainContainer.appendChild(infoContainer);
  inventoryContainer.appendChild(mainContainer);
}


createEmployee("Racooner", 500, 5, 12, 13);
createEmployee("Larry", 700, 7, 12, 32);
createEmployee("Gandalf (Zauberer oder so)", 200, 4, 5, 10);