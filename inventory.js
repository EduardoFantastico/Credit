// Definiere deine Items
let itemGoldrush = 0;
let itemSabotage1 = 0;

// Füge Items zu deinem Inventar hinzu
function addItemToInventory(item) {
    let inventorySlots = document.querySelectorAll('#inventory-slot');
    for (let i = 0; i < inventorySlots.length; i++) {
        if (!inventorySlots[i].dataset.item) {
            inventorySlots[i].dataset.item = item;
            inventorySlots[i].textContent = item;
            break;
        }
    }
}

// Entferne Items aus deinem Inventar
function removeItemFromInventory(item) {
    let inventorySlots = document.querySelectorAll('#inventory-slot');
    for (let i = 0; i < inventorySlots.length; i++) {
        if (inventorySlots[i].dataset.item === item) {
            inventorySlots[i].dataset.item = '';
            inventorySlots[i].textContent = '';
            break;
        }
    }
}

// Verwende ein Item
function useItem(item) {
    switch(item) {
        case 'itemGoldrush':
            // Führe die Funktion für itemGoldrush aus
            break;
        case 'itemSabotage1':
            // Führe die Funktion für itemSabotage1 aus
            break;
        default:
            console.log('Unbekanntes Item: ' + item);
    }
    removeItemFromInventory(item);
}

// Füge Event-Listener zu deinen Inventar-Slots hinzu
document.querySelectorAll('#inventory-slot').forEach(slot => {
    slot.addEventListener('click', function() {
        if (this.dataset.item) {
            useItem(this.dataset.item);
        }
    });
});