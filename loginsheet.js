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

document.getElementById("loginStartButton").addEventListener("click", function () {
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

function startScreenFix(){
      // Stellen Sie die ursprünglichen CSS-Stile wieder her
      var startscreen = document.getElementById("startscreen");
      startscreen.style.position = "fixed";
      startscreen.style.top = "0";
      startscreen.style.left = "0";
      startscreen.style.width = "100%";
      startscreen.style.height = "100%";
      startscreen.style.display = "flex";
      startscreen.style.flexDirection = "column";
      startscreen.style.justifyContent = "center";
      startscreen.style.alignItems = "center";
      startscreen.style.backgroundColor = "#000";
      startscreen.style.color = "#0f0";
      startscreen.style.fontFamily = "'Pixel', Arial, Helvetica, sans-serif";
      startscreen.style.textShadow = "0 0 5px #0f0";
  
}

document
  .getElementById("loginBackButton")
  .addEventListener("click", function () {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("startscreen").style.display = "block";
    startScreenFix();

    // Überprüfen Sie, ob die CSS-Stile korrekt angewendet werden
    console.log(window.getComputedStyle(startscreen));
  });

// back to menu / Logout

document.getElementById("menu-tab4").addEventListener("click", function(){
  document.getElementById("startscreen").style.display = "block";
  document.getElementById("gameScreen").style.display = "none";
  startScreenFix();
})

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
