/* let socket = new WebSocket("ws://localhost:8765");
let sessionID = Math.random().toString(36).substring(2);

socket.onopen = function (event) {
  console.log("Verbindung hergestellt");
};

socket.onerror = function (error) {
  console.log("WebSocket-Fehler: " + error);
};

document
  .getElementById("confirmRegisterButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let gender = document.getElementById("genderInput").value;
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let dob = document.getElementById("dobInput").value;
    let email = document.getElementById("emailInput").value;
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInputRegister").value;

    socket.send(
      JSON.stringify({
        type: "register",
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        username: username,
        password: password,
        sessionID: sessionID,
      })
    );
  });

document
  .getElementById("listAccountsButton")
  .addEventListener("click", function (event) {
    socket.send(
      JSON.stringify({
        type: "listAccounts",
      })
    );
  });

document
  .getElementById("deleteAccountsButton")
  .addEventListener("click", function (event) {
    socket.send(
      JSON.stringify({
        type: "removeAccounts",
      })
    );
  });

socket.onmessage = function (event) {
  let data = JSON.parse(event.data);
  console.log(data.message);
};

*/