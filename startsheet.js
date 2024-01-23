window.onload = function () {
  document.getElementById("myAudio").play();
};

document.getElementById("multiButton").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  document.getElementById("startscreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
});
