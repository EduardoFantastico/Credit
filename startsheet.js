window.onload = function () {
  document.getElementById("myAudio").play();
};

document.getElementById("startButton").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  // Ihr Spielstartcode geht hier, z.B. initGame(name);

  // Unterbrechen Sie die Wiedergabe des Audios
  document.getElementById("myAudio").pause();
});

document.getElementById("registerButton").addEventListener("click", function () {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("registerScreen").style.display = "block";
});



// ----- SICHERE METHODE ZUM EINLOGGEN

document.getElementById("startButton").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  let password = document.getElementById("passwordInput").value;
  if (name && password === "123") {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    // Ihr Spielstartcode geht hier, z.B. initGame(name);
  } else {
    alert("Bitte geben Sie Ihren Namen und das korrekte Passwort ein");
  }
});

