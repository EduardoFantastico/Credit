window.onload = function () {
  document.getElementById("myAudio").play();
};

document.getElementById("multiButton").addEventListener("click", function () {
  document.getElementById("startscreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
});

document.getElementById("quitButton").addEventListener("click", function () {
  window.close();
});
