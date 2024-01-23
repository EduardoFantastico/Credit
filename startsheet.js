window.onload = function () {
  document.getElementById("myAudio").play();
};

document.getElementById("multiButton").addEventListener("click", function () {
  document.getElementById("startscreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
});

document.getElementById("singleButton").addEventListener("click", function () {
  document.getElementById("startscreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  document.getElementById("myAudio").pause();
});

document.getElementById("quitButton").addEventListener("click", function () {
  window.close();
});
