document
  .getElementById("loginStartButton")
  .addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    // Ihr Spielstartcode geht hier, z.B. initGame(name);

    // Unterbrechen Sie die Wiedergabe des Audios
    document.getElementById("myAudio").pause();
  });

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("registerScreen").style.display = "block";
  });

// ----- SICHERE METHODE ZUM EINLOGGEN

document
  .getElementById("loginStartButton")
  .addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    let password = document.getElementById("passwordInput").value;
    if (name && password === "123") {
      document.getElementById("loginScreen").style.display = "none";
      document.getElementById("gameScreen").style.display = "block";
      // Ihr Spielstartcode geht hier, z.B. initGame(name);
    } else {
      alert("Bitte geben Sie Ihren Namen und das korrekte Passwort ein");
    }
  });

document
  .getElementById("loginBackButton")
  .addEventListener("click", function () {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("startscreen").style.display = "block";

    // Überprüfen Sie, ob die CSS-Stile korrekt angewendet werden
    console.log(
      window.getComputedStyle(document.getElementById("startscreen"))
    );

    // Überprüfen Sie, ob es andere JavaScript-Funktionen gibt, die die Startseite beeinflussen
    // Fügen Sie Ihren Code hier ein
  });

/* document
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
*/
