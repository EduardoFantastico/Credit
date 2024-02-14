// Elemente für den Chat
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
  chatHistory.style.height =
    contentBoxChat.offsetHeight - chatTextSpace.offsetHeight + "px";
};

// Funktion zum Erstellen eines Chat-Nachrichten-Elements
const createChatMessageElement = (message) => {
  return `
    <div class="chat-message">
      <div class="message-text">${message.sender}${message.text}</div>
    </div>
  `;
};

const createMessageElement = (message) => {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = createChatMessageElement(message);
  chatMessages.prepend(messageElement);
  scrollToBottom();
  adjustChatHistoryHeight();
};

const sendMessage = (e) => {
  e.preventDefault();

  if (chatInput.value.trim() === "") {
    return;
  }

  const message = {
    sender: "You: ",
    text: chatInput.value,
  };

  createMessageElement(message);
  checkCommand();
  chatInput.value = "";
};

// Funktion zum Senden einer Chat-Nachricht des Bots
const sendBotMessage = (text) => {
  const message = {
    sender: "Bot: ",
    text: text,
  };

  createMessageElement(message);
};

// Funktion zum Überprüfen des Chat-Befehls
const checkCommand = () => {
  let cheatsCheckbox = document.getElementById("options-button-cheats").checked;
  if (cheatsCheckbox) {
    const input = chatInput.value.trim().toLowerCase();
    const inputArr = input.split(" ");
    const command = inputArr[0];
    let value;
    const validCommands = ["!score", "!level"];

    if (inputArr.length > 2 && !isNaN(inputArr[2])) {
      value = parseInt(inputArr[2]);
    }
    if (input.startsWith("!")) {
      if (validCommands.includes(command)) {
        switch (command) {
          case "!score":
            if (value === undefined || value === "help") {
              sendBotMessage("Command: !score [add | remove | set] [X-Value]");
            } else if (
              isNaN(value) &&
              command !== "!score clear" &&
              inputArr.length > 2
            ) {
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
                  sendBotMessage(
                    "Command: !score [add | remove | set] [X-Value]"
                  );
              }
            }
            break;
          case "!level":
            if (value === undefined || value === "help") {
              sendBotMessage("Command: !level [add | remove | set] [X-Value]");
            } else if (
              isNaN(value) &&
              command !== "!level clear" &&
              inputArr.length > 2
            ) {
              sendBotMessage("Please enter a numerical value for X");
            } else {
              switch (inputArr[1]) {
                case "add":
                  level += parseInt(value);
                  document.querySelector("#level").textContent = "LEVEL " + level;
                  break;
                case "remove":
                  level -= parseInt(value);
                  document.querySelector("#level").textContent = "LEVEL " + level;
                  break;
                case "set":
                  level = parseInt(value);
                  document.querySelector("#level").textContent = "LEVEL " + level;
                  break;
                default:
                  sendBotMessage(
                    "Command: !level [add | remove | set] [X-Value]"
                  );
              }
            }
            break;
          default:
            sendBotMessage(
              "Bitte geben Sie einen gültigen Befehl ein, z.B. !score"
            );
        }
      } else {
        sendBotMessage(
          "Bitte geben Sie einen gültigen Befehl ein, z.B. !score"
        );
      }
    }
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

adjustChatHistoryHeight();
