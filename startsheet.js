window.onload = function () {
  document.getElementById("myAudio").play();
};

document.getElementById("startButton").addEventListener("click", function () {
  var name = document.getElementById("nameInput").value;
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  // Ihr Spielstartcode geht hier, z.B. initGame(name);

  // Unterbrechen Sie die Wiedergabe des Audios
  document.getElementById("myAudio").pause();
});

/*

----- SICHERE METHODE ZUM EINLOGGEN

document.getElementById("startButton").addEventListener("click", function () {
  var name = document.getElementById("nameInput").value;
  var password = document.getElementById("passwordInput").value;
  if (name && password === "123") {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    // Ihr Spielstartcode geht hier, z.B. initGame(name);
  } else {
    alert("Bitte geben Sie Ihren Namen und das korrekte Passwort ein");
  }
});

*/
