// Definiere die Employee-Klasse
class Employee {
  constructor(
    name = "Unrevealed Robbie",
    speed = 0,
    laziness = 0,
    capacity = 0,
    background = "source/EmptyEmployee1.png",
    sleepy = false
  ) {
    this.name = name; // Name des Mitarbeiters
    this.speed = speed; // Geschwindigkeit des Mitarbeiters
    this.laziness = laziness; // Faulheit des Mitarbeiters
    this.capacity = capacity; // Kapazität des Mitarbeiters
    this.background = background; // Hintergrundbild des Mitarbeiters
    this.sleepy = sleepy; // Schlafzustand des Mitarbeiters
  }
}

// Definiere die Employeelist-Klasse
class Employeelist {
  constructor() {
    this.slots = []; // Initialisiere die slots-Array
  }

  // Methode zum Hinzufügen eines Employees
  addEmployee(employee) {
    this.slots.push(employee); // Füge den Employee zur slots-Array hinzu
    this.updateHTML(); // Aktualisiere das HTML
  }

  // Methode zum Entfernen eines Employees
  removeEmployee(slotIndex) {
    if (this.slots[slotIndex]) {
      this.slots.splice(slotIndex, 1); // Entferne den Employee aus der slots-Array
      this.updateHTML(); // Aktualisiere das HTML
    } else {
      console.log("Slot ist bereits leer");
    }
  }

  // Methode zum Aktualisieren des HTML
  updateHTML() {
    const inventoryContainer = document.getElementById("inventory-container");
    inventoryContainer.innerHTML = "";
    this.slots.forEach((employee, index) => {
      const slotElement = document.createElement("div");
      slotElement.className = "slot";
      slotElement.id = `slot-${index}`;
      slotElement.style.backgroundImage = `url(${employee.background})`; // Setze den Hintergrund des Slots

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      progressBar.style.height = "5px";
      progressBar.style.width = "100%";
      slotElement.appendChild(progressBar);

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "button-container";
      const leftButton = document.createElement("button");
      leftButton.textContent = "Links";
      const rightButton = document.createElement("button");
      rightButton.textContent = "Rechts";
      buttonContainer.appendChild(leftButton);
      buttonContainer.appendChild(rightButton);
      slotElement.appendChild(buttonContainer);

      const textElement = document.createElement("p");
      if (employee) {
        textElement.textContent = `${employee.name}, Speed: ${employee.speed}, Laziness: ${employee.laziness}, Capacity: ${employee.capacity}, Sleepy: ${employee.sleepy}`;
        textElement.classList.add(`item-${employee.name.toLowerCase()}`);
      } else {
        textElement.textContent = "Unrevealed Robbie";
        textElement.classList.add("empty");
      }
      slotElement.appendChild(textElement);

      inventoryContainer.appendChild(slotElement);
    });
  }

  // Methode zum Überprüfen, ob ein bestimmter Employee vorhanden ist
  hasEmployee(item) {
    return this.slots.includes(item);
  }
}

// Initialisiere die Employeelist und füge einen Employee hinzu, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", (event) => {
  const myEmployeelist = new Employeelist();
  myEmployeelist.updateHTML();
  const racoon = new Employee("Racoon");
  myEmployeelist.addEmployee(racoon);
});
