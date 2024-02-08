let nolevellimit = false;

let modal = document.getElementById("myModal");
let btn = document.getElementsByClassName("modalBtn");
let span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    modal.style.display = "block";
  };
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let volume = document.getElementById("#options-slider-mainsound");

document.addEventListener("DOMContentLoaded", function () {
  let volume = document.getElementById("volume");
  if (volume) {
    volume.addEventListener("change", function (e) {
      audio.volume = e.currentTarget.value / 100;
    });
  }
});

window.onload = function() {
  if (document.getElementById("options-button-cheats").checked) {
    document.getElementById("cheatOptions").style.display = "block";
  }
};

document.getElementById("options-button-cheats").addEventListener("change", function() {
  let cheatOptions = ["option1", "option2", "option3", "option4"];
  if (!this.checked) {
    cheatOptions.forEach(function(option) {
      document.getElementById(option).checked = false;
    });
    option1else();
  }
  document.getElementById("cheatOptions").style.display = this.checked ? "block" : "none";
});

function option1else(){
  nolevellimit = false;
  console.log(nolevellimit);
}



document.getElementById("option1").addEventListener("change", function() {
  if (this.checked) {
    nolevellimit = true;
    console.log(nolevellimit);
  } else {
    option1else();
  }
});


