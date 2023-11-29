// New Research Section

let costLevel = 1;
let progressLevel = 0;
let timerLevel = 0;
let wirdGeupgradedLevel = false;

document.querySelector("#research1").addEventListener("click", function () {
  if (wirdGeupgradedLevel === false) {
    // tested ob bereits geupdatet wird, damit man nicht 2 mal das selbe gleichzeitig updaten kann
    if (score >= costLevel) {
      wirdGeupgradedLevel = true;
      score = score - costLevel;
      let countdownTimerLevel = setInterval(function () {
        timerLevel++;
        let progressLevel = (timerLevel / 1000) * 100 + "%";
        document.querySelector("#researchbar1").style.width = progressLevel;
        // Änderung: Überprüfe, ob timerLevel gleich 1000 ist
        if (timerLevel === 1000) {
          wirdGeupgradedLevel = false; //stellt "wird geupdatet" wieder auf false
          document.querySelector("#researchbar1").style.width = 0;
          timerLevel = 0;
          clearInterval(countdownTimerLevel);
          level++;
          document.querySelector("#level").textContent = "LEVEL " + level;
          document.documentElement.style.setProperty(
            "--research1-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research1").style.backgroundColor =
            "var(--research1-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research1-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research1").style.backgroundColor =
              "var(--research1-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research1-color", "red");
      document.querySelector("#research1").style.backgroundColor =
        "var(--research1-color)";
      document.documentElement.style.setProperty("--my-color", "red");
      document.querySelector("#research1").style.backgroundColor =
        "var(--my-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research1-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research1").style.backgroundColor =
          "var(--research1-color)";
      }, 1500);
    }
  }
});

let costGoldRush = 1;
let progressGoldRush = 0;
let timerGoldRush = 0;
let wirdGeupgradedGoldRush = false;

document.querySelector("#research2").addEventListener("click", function () {
  if (wirdGeupgradedGoldRush === false) {
    if (score >= costGoldRush) {
      wirdGeupgradedGoldRush = true;
      score = score - costGoldRush;
      let countdownTimerGoldRush = setInterval(function () {
        timerGoldRush++;
        let progressGoldRush =
          (timerGoldRush /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#researchbar2").style.width = progressGoldRush;

        if (timerGoldRush === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerGoldRush);
          timerGoldRush = 0;
          wirdGeupgradedGoldRush = false;
          // Ziel Hierrein //

          /*              */
          document.querySelector("#researchbar2").style.width = 0;
          document.documentElement.style.setProperty(
            "--research2-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research2").style.backgroundColor =
            "var(--research2-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research2-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research2").style.backgroundColor =
              "var(--research2-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research2-color", "red");
      document.querySelector("#research2").style.backgroundColor =
        "var(--research2-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research2-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research2").style.backgroundColor =
          "var(--research2-color)";
      }, 1500);
    }
  }
});

let costDouble = 1;
let progressDouble = 0;
let timerDouble = 0;
let wirdGeupgradedDouble = false;

document.querySelector("#research3").addEventListener("click", function () {
  if (wirdGeupgradedDouble === false) {
    if (score >= costDouble) {
      wirdGeupgradedDouble = true;
      score = score - costDouble;
      let countdownTimerDouble = setInterval(function () {
        timerDouble++;
        let progressDouble =
          (timerDouble /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#researchbar3").style.width = progressDouble;

        if (timerDouble === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerDouble);
          timerDouble = 0;
          wirdGeupgradedDouble = false;
          // Ziel Hierrein //

          /*              */
          document.querySelector("#researchbar3").style.width = 0;
          document.documentElement.style.setProperty(
            "--research3-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research3").style.backgroundColor =
            "var(--research3-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research3-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research3").style.backgroundColor =
              "var(--research3-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research3-color", "red");
      document.querySelector("#research3").style.backgroundColor =
        "var(--research3-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research3-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research3").style.backgroundColor =
          "var(--research3-color)";
      }, 1500);
    }
  }
});

let costRandomizer = 1;
let progressRandomizer = 0;
let timerRandomizer = 0;
let wirdGeupgradedrandomizer = false;

document.querySelector("#research4").addEventListener("click", function () {
  if (wirdGeupgradedrandomizer === false) {
    if (score >= costRandomizer) {
      wirdGeupgradedrandomizer = true;
      score = score - costRandomizer;
      let countdownTimerRandomizer = setInterval(function () {
        timerRandomizer++;
        let progressRandomizer =
          (timerRandomizer /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#researchbar4").style.width =
          progressRandomizer;

        if (timerRandomizer === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerRandomizer);
          timerRandomizer = 0;
          wirdGeupgradedrandomizer = false;
          // Ziel Hierrein //

          /*              */
          document.querySelector("#researchbar4").style.width = 0;
          document.documentElement.style.setProperty(
            "--research4-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research4").style.backgroundColor =
            "var(--research4-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research4-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research4").style.backgroundColor =
              "var(--research4-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research4-color", "red");
      document.querySelector("#research4").style.backgroundColor =
        "var(--research4-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research4-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research4").style.backgroundColor =
          "var(--research4-color)";
      }, 1500);
    }
  }
});

let costGoofyAh = 1;
let progressGoofyAh = 0;
let timerGoofyAh = 0;
let wirdGeupgradedGoofyAh = false;

document.querySelector("#research5").addEventListener("click", function () {
  if (wirdGeupgradedGoofyAh === false) {
    if (score >= costGoofyAh) {
      wirdGeupgradedGoofyAh = true;
      score = score - costGoofyAh;
      let countdownTimerGoofyAh = setInterval(function () {
        timerGoofyAh++;
        let progressGoofyAh =
          (timerGoofyAh /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#researchbar5").style.width = progressGoofyAh;

        if (timerGoofyAh === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerGoofyAh);
          timerGoofyAh = 0;
          wirdGeupgradedGoofyAh = false;
          // Ziel Hierrein //

          /*              */
          document.querySelector("#researchbar5").style.width = 0;
          document.documentElement.style.setProperty(
            "--research5-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research5").style.backgroundColor =
            "var(--research5-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research5-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research5").style.backgroundColor =
              "var(--research5-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research5-color", "red");
      document.querySelector("#research5").style.backgroundColor =
        "var(--research4-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research5-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research5").style.backgroundColor =
          "var(--research5-color)";
      }, 1500);
    }
  }
});

let costTest = 1;
let progressTest = 0;
let timerTest = 0;
let wirdGeupgradedTest = false;

document.querySelector("#research6").addEventListener("click", function () {
  if (wirdGeupgradedTest === false) {
    if (score >= costTest) {
      wirdGeupgradedTest = true;
      score = score - costTest;
      let countdownTimerTest = setInterval(function () {
        timerTest++;
        let progressTest =
          (timerTest /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#researchbar6").style.width = progressTest;

        if (timerTest === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerTest);
          timerTest = 0;
          wirdGeupgradedTest = false;
          // Ziel Hierrein //

          /*              */
          document.querySelector("#researchbar6").style.width = 0;
          document.documentElement.style.setProperty(
            "--research6-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research6").style.backgroundColor =
            "var(--research6-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research6-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research6").style.backgroundColor =
              "var(--research6-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research6-color", "red");
      document.querySelector("#research6").style.backgroundColor =
        "var(--research6-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research6-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research6").style.backgroundColor =
          "var(--research6-color)";
      }, 1500);
    }
  }
});

let costSabotageHouse = 1;
let progressSabotageHouse = 0;
let timerSabotageHouse = 0;
let wirdGeupgradedSabotageHouse = false;

document.querySelector("#research7").addEventListener("click", function () {
  if (wirdGeupgradedSabotageHouse === false) {
    if (score >= costSabotageHouse) {
      wirdGeupgradedSabotageHouse = true;
      score = score - costSabotageHouse;
      let countdownTimerSabotageHouse = setInterval(function () {
        timerSabotageHouse++;
        let progressSabotageHouse =
          (timerSabotageHouse /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#researchbar7").style.width =
          progressSabotageHouse;

        if (timerSabotageHouse === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerSabotageHouse);
          timerSabotageHouse = 0;
          wirdGeupgradedSabotageHouse = false;
          // Ziel Hierrein //

          /*              */
          document.querySelector("#researchbar7").style.width = 0;
          document.documentElement.style.setProperty(
            "--research7-color",
            "rgb(51, 221, 85)"
          );
          document.querySelector("#research7").style.backgroundColor =
            "var(--research7-color)";
          setTimeout(() => {
            document.documentElement.style.setProperty(
              "--research7-color",
              "rgb(144, 247, 247)"
            );
            document.querySelector("#research7").style.backgroundColor =
              "var(--research7-color)";
          }, 400);
        }
      }, 5);
    } else {
      document.documentElement.style.setProperty("--research7-color", "red");
      document.querySelector("#research7").style.backgroundColor =
        "var(--research7-color)";
      setTimeout(() => {
        document.documentElement.style.setProperty(
          "--research7-color",
          "rgb(144, 247, 247)"
        );
        document.querySelector("#research7").style.backgroundColor =
          "var(--research7-color)";
      }, 1500);
    }
  }
});
