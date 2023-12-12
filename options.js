var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("modalBtn");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    modal.style.display = "block";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
