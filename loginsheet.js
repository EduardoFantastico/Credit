document
  .getElementById("loginStartButton")
  .addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    let password = document.getElementById("passwordInput").value;
    socket.send(
      JSON.stringify({
        type: "login",
        username: name,
        password: password,
        sessionID: sessionID, 
      })
    );
  });

socket.onmessage = function (event) {
    let data = JSON.parse(event.data);
    if (data.message.startsWith('Erfolgreich angemeldet als:')) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("gameScreen").style.display = "block";
    } else {
        // Zeigen Sie eine Fehlermeldung an oder lassen Sie den Benutzer auf dem Anmeldebildschirm
    }
};

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("registerScreen").style.display = "block";
  });

document
  .getElementById("loginBackButton")
  .addEventListener("click", function () {

    // Überprüfen Sie, ob die CSS-Stile korrekt angewendet werden
    console.log(
      window.getComputedStyle(document.getElementById("startscreen"))
    );

    // Überprüfen Sie, ob es andere JavaScript-Funktionen gibt, die die Startseite beeinflussen
    // Fügen Sie Ihren Code hier ein
  });
