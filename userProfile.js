// Get the overlay
let profileOverlay = document.getElementById("profileOverlay");

// Get the button that opens the overlay
let profileBtn = document.getElementById("menu-tab1");

// Get the <span> element that closes the overlay
let closeButton = document.getElementsByClassName("closeButton")[0];

// When the user clicks the button, open the overlay 
profileBtn.onclick = function() {
  profileOverlay.style.display = "block";
}

// When the user clicks on <span> (x), close the overlay
closeButton.onclick = function() {
  profileOverlay.style.display = "none";
}

// When the user clicks anywhere outside of the overlay, close it
window.onclick = function(event) {
  if (event.target == profileOverlay) {
    profileOverlay.style.display = "none";
  }
}
