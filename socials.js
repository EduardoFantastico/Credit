// Get the chat input, chat history, and chat form elements
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-history");
const chatForm = document.querySelector("#chat-form");

// Create a function to generate the chat message element
const createChatMessageElement = (message) => {
  return `
    <div class="chat-message">
      <div class="message-sender">${message.sender}</div>
      <div class="message-text">${message.text}</div>
    </div>
  `;
};

// Create a function to send the chat message
const sendMessage = (e) => {
  e.preventDefault();

  if (chatInput.value.trim() === "") {
    return;
  }

  const message = {
    sender: "You" + ": ",
    text: chatInput.value,
  };
  chatMessages.innerHTML += createChatMessageElement(message);
  console.log(message.sender, message.text); // Log the message to the console
  checkCommand();
  chatInput.value = "";
};

// Create a function to check the chat command
const checkCommand = () => {
  const input = chatInput.value.trim().toLowerCase();
  const inputArr = input.split(" ");
  const command = inputArr[0];
  const value = inputArr[2];

  if (command === "!score") {
    if (value === undefined || value === "help") {
      chatMessages.innerHTML += createChatMessageElement({
        sender: "Bot: ",
        text: "Command: !score [add | remove | set] [X-Value]",
      });
    } else if (isNaN(value) && command !== "!score clear" && inputArr.length > 2) {
      chatMessages.innerHTML += createChatMessageElement({
        sender: "Bot: ",
        text: "Please enter a numerical value for X",
      });
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
          chatMessages.innerHTML += createChatMessageElement({
            sender: "Bot: ",
            text: "Command: !score [add | remove | set] [X-Value]",
          });
      }
    }
  } else if (command.startsWith("!")) {
    chatMessages.innerHTML += createChatMessageElement({
      sender: "Bot: ",
      text: "Please enter a valid command, e.g. !score",
    });
  }
};

// Add event listeners for sending the chat message
chatForm.addEventListener("submit", sendMessage);
chatInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#chat-send").click();
  }
});
