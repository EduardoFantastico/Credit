let maxslot = 10;

// Initialisierung der Employeelist nach dem Laden des DOM
document.addEventListener('DOMContentLoaded', (event) => {
    const myEmployeelist = new Employeelist(maxslot);
    myEmployeelist.updateHTML();
});

class Employeelist {
    // Konstruktor initialisiert die Slots
    constructor(maxSlots) {
        this.maxSlots = maxSlots;
        this.slots = new Array(maxSlots).fill(null);
    }

    // Fügt ein Employee hinzu, wenn ein Slot frei ist
    addEmployee(item) {
        const freierSlotIndex = this.slots.indexOf(null);
        if (freierSlotIndex !== -1) {
            this.slots[freierSlotIndex] = item;
            this.updateHTML();
        } else {
            console.log('Kein freier Slot verfügbar');
        }
    }

    // Entfernt ein Employee und aktualisiert die Slots
    removeEmployee(slotIndex) {
        if (this.slots[slotIndex]) {
            this.slots[slotIndex] = null;
            this.slots = this.slots.filter(item => item !== null);
            while (this.slots.length < this.maxSlots) {
                this.slots.push(null);
            }
            this.updateHTML();
        } else {
            console.log('Slot ist bereits leer');
        }
    }

    // Aktualisiert das HTML basierend auf den Slots
    updateHTML() {
        const inventoryContainer = document.getElementById('inventory-container');
        inventoryContainer.innerHTML = '';
        if (this.maxSlots > this.slots.length) {
            const newSlots = new Array(this.maxSlots - this.slots.length).fill(null);
            this.slots = [...this.slots, ...newSlots];
        }
        if (this.maxSlots < this.slots.length) {
            this.slots = this.slots.slice(0, this.maxSlots);
        }
        this.slots.forEach((item, index) => {
            const slotElement = document.createElement('div');
            slotElement.className = 'slot';
            slotElement.id = `slot-${index}`;

            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.height = '5px';
            progressBar.style.width = '100%';
            slotElement.appendChild(progressBar);

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            const leftButton = document.createElement('button');
            leftButton.textContent = 'Links';
            const rightButton = document.createElement('button');
            rightButton.textContent = 'Rechts';
            buttonContainer.appendChild(leftButton);
            buttonContainer.appendChild(rightButton);
            slotElement.appendChild(buttonContainer);

            const textElement = document.createElement('p');
            if (item) {
                textElement.textContent = item;
                textElement.classList.add(`item-${item.toLowerCase()}`);
            } else {
                textElement.textContent = 'Unrevealed Robbie';
                textElement.classList.add('empty');
            }
            slotElement.appendChild(textElement);

            inventoryContainer.appendChild(slotElement);
        });
    }

    // Überprüft, ob ein bestimmtes Employee vorhanden ist
    hasEmployee(item) {
        return this.slots.includes(item);
    }
}

// Verwendung
const myEmployeelist = new Employeelist(maxslot);
myEmployeelist.updateHTML();
