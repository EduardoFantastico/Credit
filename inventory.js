// Definiere die Employee-Klasse
class Employee {
  constructor(
    name = "Unrevealed Robbie",
    speed = 0,
    laziness = 0,
    capacity = 0,
    background = "source/EmptyEmployee1.png",
    sleepy = false,
    hired = false,
    price = 0
  ) {
    this.name = name;
    this.speed = speed;
    this.laziness = laziness;
    this.capacity = capacity;
    this.background = background;
    this.sleepy = sleepy;
    this.hired = hired;
    this.price = price;
    console.log(`Price for ${this.name}: ${this.price}`); // Log the price value when an Employee object is created
    
  }
}

// Definiere die Employeelist-Klasse
class Employeelist {
  constructor(maxEmployees = 10) {
    this.slots = [];
    this.maxEmployees = maxEmployees;
  }

  // Methode zum Hinzufügen eines Employees
// Methode zum Hinzufügen eines Employees
addEmployee(name, speed, laziness, capacity, background, sleepy, price) {
  console.log(`Price passed to addEmployee: ${price}`); // Log the price value passed to addEmployee
  if (this.slots.length < this.maxEmployees) {
    const employee = new Employee(name, speed, laziness, capacity, background, sleepy, price);
    this.price = price;
    console.log(`Price for ${employee.name}: ${employee.price}`); // Log the price value when an Employee object is created
    this.slots.push(employee);
    employee.hired = false;
    this.updateHTML();
    this.price = price;
  } else {
    console.log("Maximale Anzahl von Mitarbeitern erreicht");
  }
}


  // Methode zum Entfernen eines Employees
  removeEmployee(slotIndex) {
    if (this.slots[slotIndex]) {
      this.slots[slotIndex].hired = false;
      this.slots.splice(slotIndex, 1);
      this.updateHTML();
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
      slotElement.style.backgroundImage = `url(${employee.background})`;

      const hireButton = document.createElement("button");
      hireButton.textContent = "Einstellen";
      hireButton.style.position = "absolute";
      hireButton.style.bottom = "0";
      hireButton.style.right = "0";
      hireButton.addEventListener("click", () => {
        if (score >= employee.price) {
          score -= employee.price;
          employee.hired = true;
          this.updateHTML();
        } else {
          console.log("Nicht genug Punkte zum Einstellen");
        }
      });
      slotElement.appendChild(hireButton);

      const removeButton = document.createElement("button");
      removeButton.textContent = "Entfernen";
      removeButton.style.position = "absolute";
      removeButton.style.bottom = "0";
      removeButton.style.left = "0";
      removeButton.addEventListener("click", () => {
        this.removeEmployee(index);
      });
      slotElement.appendChild(removeButton);

      if (employee.hired) {
        const nameElement = document.createElement("p");
        nameElement.textContent = `${employee.name}`;
        nameElement.className = "employee-name";
        nameElement.style.position = "absolute";
        nameElement.style.top = "140px"; // Verschiebe den Namen nach unten
        slotElement.appendChild(nameElement);

        hireButton.style.display = "none";
        removeButton.style.display = "none";

        // Erstelle die Progressbar
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        const progressBarInner = document.createElement("div");
        progressBarInner.className = "progress-bar-inner";
        progressBar.appendChild(progressBarInner);
        slotElement.appendChild(progressBar);

        // Erstelle die Buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        const button1 = document.createElement("button");
        button1.textContent = "ButtonL";
        const button2 = document.createElement("button");
        button2.textContent = "ButtonR";
        buttonContainer.appendChild(button1);
        buttonContainer.appendChild(button2);
        slotElement.appendChild(buttonContainer);
      } else {
        const nameElement = document.createElement("p");
        nameElement.textContent = `${employee.name}`;
        nameElement.className = "employee-name";
        slotElement.appendChild(nameElement);

        const speedElement = document.createElement("p");
        speedElement.textContent = `Speed: ${employee.speed}`;
        speedElement.className = "employee-speed";
        slotElement.appendChild(speedElement);

        const lazinessElement = document.createElement("p");
        lazinessElement.textContent = `Laziness: ${employee.laziness}`;
        lazinessElement.className = "employee-laziness";
        slotElement.appendChild(lazinessElement);

        const capacityElement = document.createElement("p");
        capacityElement.textContent = `Capacity: ${employee.capacity}`;
        capacityElement.className = "employee-capacity";
        slotElement.appendChild(capacityElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = `Price: ${employee.price}`;
        priceElement.className = "employee-price";
        slotElement.appendChild(priceElement);
      }

      inventoryContainer.appendChild(slotElement);
    });
  }

  // Methode zum Überprüfen, ob ein bestimmter Employee vorhanden ist
  hasEmployee(item) {
    return this.slots.includes(item);
  }
  logAllValues() {
    this.slots.forEach((employee, index) => {
      console.log(`Employee ${index + 1}:`);
      console.log(`Name: ${employee.name}`);
      console.log(`Speed: ${employee.speed}`);
      console.log(`Laziness: ${employee.laziness}`);
      console.log(`Capacity: ${employee.capacity}`);
      console.log(`Background: ${employee.background}`);
      console.log(`Sleepy: ${employee.sleepy}`);
      console.log(`Hired: ${employee.hired}`);
      console.log(`Price: ${employee.price}`);
      console.log('-------------------------');
    });
  }  
}

// Initialisiere die Employeelist und füge einen Employee hinzu, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", (event) => {
  const myEmployeelist = new Employeelist();
  myEmployeelist.updateHTML();
  myEmployeelist.addEmployee("Racoon", 5, 2, 10, "source/EmptyEmployee1.png", false, 100);
  myEmployeelist.logAllValues();
});
