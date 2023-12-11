let maxslot = 6;



// ITEM LISTE:

let validItems = [
    "Schwert",
    "Trank",
    "Schild",
]

document.addEventListener('DOMContentLoaded', (event) => {
    const myInventory = new Inventory(maxslot);
    myInventory.updateHTML(); // Initialisiert das HTML-Inventory, nachdem das DOM geladen wurde
  });
  
  class Inventory {
    constructor(maxSlots) {
        this.maxSlots = maxSlots;
        this.slots = new Array(maxSlots).fill(null);
    }
  
    addItem(item) {
        const freierSlotIndex = this.slots.indexOf(null);
        if (freierSlotIndex !== -1) {
            this.slots[freierSlotIndex] = item;
            this.updateHTML();
        } else {
            console.log('Kein freier Slot verfügbar');
        }
    }
  
    removeItem(slotIndex) {
        if (this.slots[slotIndex]) {
          this.slots[slotIndex] = null; // Entfernt das Item
          // Rutscht die verbleibenden Items nach vorne
          this.slots = this.slots.filter(item => item !== null);
          // Füllt die freien Plätze am Ende des Arrays mit null
          while (this.slots.length < this.maxSlots) {
            this.slots.push(null);
          }
          this.updateHTML(); // Aktualisiert das HTML
        } else {
          console.log('Slot ist bereits leer');
        }
      }

    handleItemClick(item, index) {
        switch (item) {
          case 'Schwert':
            score -= 5;
            console.log('Schwert angeklickt. Score -5.');
            break;
          case 'Trank':
            score += 5;
            console.log('Trank angeklickt. Score +5.');
            break;
          case 'Schild':
            score *= 2;
            console.log('Zaubertrank angeklickt. Score *2.');
            break;
          // Fügen Sie hier weitere Fälle für andere Items hinzu
          default:
            console.log('Unbekanntes Item angeklickt.');
        }
        this.removeItem(index); // Entfernt das Item nach der Aktion
      }
  
      updateHTML() {
        const inventoryContainer = document.getElementById('inventory-container');
        inventoryContainer.innerHTML = ''; // Lösche den aktuellen Inhalt
        // Erweitere das Slots-Array, wenn maxSlots erhöht wird
        if (this.maxSlots > this.slots.length) {
          const newSlots = new Array(this.maxSlots - this.slots.length).fill(null);
          this.slots = [...this.slots, ...newSlots];
        }
        // Reduziere das Slots-Array, wenn maxSlots verringert wird
        if (this.maxSlots < this.slots.length) {
          this.slots = this.slots.slice(0, this.maxSlots);
        }
        // Rendere die Slots basierend auf dem neuen Wert von maxslot
        this.slots.forEach((item, index) => {
          const slotElement = document.createElement('button');
          slotElement.className = 'slot';
          slotElement.id = `slot-${index}`;
          slotElement.type = 'button';
          if (item) {
            slotElement.textContent = item;
            slotElement.classList.add(`item-${item.toLowerCase()}`);
            slotElement.addEventListener('click', () => {
              this.handleItemClick(item, index); // Ruft die neue Funktion auf
            });
          } else {
            slotElement.textContent = 'Empty';
            slotElement.classList.add('empty');
          }
          inventoryContainer.appendChild(slotElement);
        });
      }
      
  
    hasItem(item) {
        return this.slots.includes(item);
    }
  }
  
  // Verwendung
  const myInventory = new Inventory(maxslot);
  myInventory.updateHTML(); // Initialisiert das HTML-Inventory
  
  // Items hinzufügen
  // myInventory.addItem('Trank'); // Entfernen Sie diese Zeile oder fügen Sie sie in eine Funktion ein, die aufgerufen wird, wenn ein Item erhalten wird
  
  // Überprüfen, ob ein Item vorhanden ist
  // ...
  
  // Ein Item entfernen
  // myInventory.removeItem(0); // Dies kann auch in eine Funktion verschoben werden, die aufgerufen wird, wenn ein Item entfernt werden soll
  