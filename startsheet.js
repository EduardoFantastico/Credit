document.getElementById("startButton").addEventListener("click", function () {
  var name = document.getElementById("nameInput").value;
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  // Ihr Spielstartcode geht hier, z.B. initGame(name);
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
