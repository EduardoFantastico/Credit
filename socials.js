// Holen Sie sich das Chat-Eingabe-, Chat-Verlauf- und Chat-Formular-Element
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-history");
const chatForm = document.querySelector("#chat-form");

// Hilfsfunktionen
const scrollToBottom = () => {
  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 0);
};

const adjustChatHistoryHeight = () => {
  const chatHistory = document.querySelector("#chat-history");
  const contentBoxChat = document.querySelector("#content-box-chat");
  const chatTextSpace = document.querySelector("#chat-text-space");
  chatHistory.style.height = (contentBoxChat.offsetHeight - chatTextSpace.offsetHeight) + "px";
};

// Erstellen Sie eine Funktion, um das Chat-Nachrichten-Element zu generieren
const createChatMessageElement = (message) => {
  return `
    <div class="chat-message">
      <div class="message-text">${message.sender}${message.text}</div>
    </div>
  `;
};

// Erstellen Sie eine Funktion, um die Chat-Nachricht zu senden
const sendMessage = (e) => {
  e.preventDefault();

  if (chatInput.value.trim() === "") {
    return;
  }

  const message = {
    sender: "You: ",
    text: chatInput.value,
  };

  const messageElement = document.createElement('div');
  messageElement.innerHTML = createChatMessageElement(message);
  chatMessages.prepend(messageElement);
  scrollToBottom();
  adjustChatHistoryHeight();

  console.log(message.sender, message.text);
  checkCommand();
  chatInput.value = "";
};

// Erstellen Sie eine Funktion, um die Chat-Nachricht des Bots zu senden
const sendBotMessage = (text) => {
  const message = {
    sender: "Bot: ",
    text: text,
  };

  const messageElement = document.createElement('div');
  messageElement.innerHTML = createChatMessageElement(message);
  chatMessages.prepend(messageElement);
  scrollToBottom();
  adjustChatHistoryHeight();
};

// Erstellen Sie eine Funktion, um den Chat-Befehl zu überprüfen
const checkCommand = () => {
  const input = chatInput.value.trim().toLowerCase();
  const inputArr = input.split(" ");
  const command = inputArr[0];
  let value;
  

  if (inputArr.length > 2 && !isNaN(inputArr[2])) {
    value = parseInt(inputArr[2]);
  }

  switch (command) {
    case "!score":
          if (value === undefined || value === "help") {
      sendBotMessage("Command: !score [add | remove | set] [X-Value]");
    } else if (isNaN(value) && command !== "!score clear" && inputArr.length > 2) {
      sendBotMessage("Please enter a numerical value for X");
    } else {
      switch (inputArr[1]) {
        case "add":
          score += parseInt(value);
          break;
        case "remove":
          score -= parseInt(value);
          break;
        case "set":
          score = parseInt(value);
          break;
        default:
          sendBotMessage("Command: !score [add | remove | set] [X-Value]");
      }
    }
      break;
    case "!slot":
      const action = inputArr[1];
      if (value === undefined || isNaN(value)) {
        sendBotMessage("Bitte geben Sie einen numerischen Wert ein.");
        return;
      }
      switch (action) {
        case "add":
          console.log("Vorherige maxslot:", maxslot);
          maxslot += value;
          console.log("Neue maxslot nach add:", maxslot);
          break;
        case "set":
          maxslot = value;
          break;
        case "remove":
          maxslot -= value;
          break;
        default:
          sendBotMessage("Bitte verwenden Sie add, set oder remove als zweiten Befehl.");
      }
      myInventory.maxSlots = maxslot;
      myInventory.updateHTML();
      break;
    default:
      sendBotMessage("Bitte geben Sie einen gültigen Befehl ein, z.B. !score oder !slot");
  }
};

// Event-Listener
chatForm.addEventListener("submit", sendMessage);
chatInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#chat-send").click();
  }
});

// Fensterereignisse
window.onload = adjustChatHistoryHeight;
window.onresize = adjustChatHistoryHeight;
