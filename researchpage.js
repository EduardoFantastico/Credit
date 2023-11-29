// New Research Section

//Research Section 1 | Level Up! | Rises the Level and Point 
let costLevel = 1;
let progressLevel = 0;
let timerLevel = 0;
let currentlyUpgradingLevel = false; 

document.querySelector("#research1").addEventListener("click", function () {
  if (currentlyUpgradingLevel === false) {         // Tests if Level Up is on cooldown
    if (score >= costLevel) {                  // Tests if player has enough points 
      currentlyUpgradingLevel = true;              // Sets Levelup on cooldown
      score = score - costLevel;               // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerLevel = setInterval(function () {         
        timerLevel++;

        // Progress Bar (CSS) //
        let progressLevel = (timerLevel / 1000) * 100 + "%";
        document.querySelector("#research-bar1").style.width = progressLevel;

        // Timer Finish //
        if (timerLevel === 1000) {          // Here you can put in how mich time it takes to finish the upgrade //
          currentlyUpgradingLevel = false; //stellt "wird geupdatet" wieder auf false
          document.querySelector("#research-bar1").style.width = 0;
          timerLevel = 0;
          clearInterval(countdownTimerLevel);
          // Input Code Here //
          level++;
          document.querySelector("#level").textContent = "LEVEL " + level;

          // Green blink when finished //
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

      // Red Flash if Score < Cost
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

//Research Section 2 | Gold Rush | Increses Points gained
let costGoldRush = 1;
let progressGoldRush = 0;
let timerGoldRush = 0;
let currentlyUpgradingGoldRush = false;

document.querySelector("#research2").addEventListener("click", function () {
  if (currentlyUpgradingGoldRush === false) {                                      // Tests if Gold Rush is on cooldown
    if (score >= costGoldRush) {                                               // Tests if player has enough points
      currentlyUpgradingGoldRush = true;                                           // Sets Gold Rush on cooldown
      score = score - costGoldRush;                                            // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerGoldRush = setInterval(function () {
        timerGoldRush++;

        // Progress Bar (CSS) //
        let progressGoldRush =
          (timerGoldRush /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#research-bar2").style.width = progressGoldRush;

        // Timer Finish //
        if (timerGoldRush === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerGoldRush);
          timerGoldRush = 0;
          currentlyUpgradingGoldRush = false;
          // Input Code Here //

          // Green blink when finished //
          document.querySelector("#research-bar2").style.width = 0;
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

      // Red Flash if Score < Cost
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

//Research Section 3 | Double It | Permanently doubles Points gained 
let costDouble = 1;
let progressDouble = 0;
let timerDouble = 0;
let currentlyUpgradingDouble = false;

document.querySelector("#research3").addEventListener("click", function () {
  if (currentlyUpgradingDouble === false) {                                          // Tests if Double It is on cooldown
    if (score >= costDouble) {                                                   // Tests if player has enough points 
      currentlyUpgradingDouble = true;                                               // Sets Double It on cooldown
      score = score - costDouble;                                                // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerDouble = setInterval(function () {
        timerDouble++;

        // Progress Bar (CSS) //
        let progressDouble =
          (timerDouble /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#research-bar3").style.width = progressDouble;

        // Timer Finish //
        if (timerDouble === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerDouble);
          timerDouble = 0;
          currentlyUpgradingDouble = false;
          // Input Code Here //

          // Green blink when finished //
          document.querySelector("#research-bar3").style.width = 0;
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

      // Red Flash if Score < Cost
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

//Research Section 4 | Randomizer | Activates random clickable popups you can click to gain points
let costRandomizer = 1;
let progressRandomizer = 0;
let timerRandomizer = 0;
let currentlyUpgradingrandomizer = false;

document.querySelector("#research4").addEventListener("click", function () {
  if (currentlyUpgradingrandomizer === false) {                                          // Tests if Randomizer is on cooldown
    if (score >= costRandomizer) {                                                   // Tests if player has enough points 
      currentlyUpgradingrandomizer = true;                                               // Sets Randomizer on cooldown
      score = score - costRandomizer;                                                // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerRandomizer = setInterval(function () {
        timerRandomizer++;

        // Progress Bar (CSS) //
        let progressRandomizer =
          (timerRandomizer /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#research-bar4").style.width = progressRandomizer;

        // Timer Finish //
        if (timerRandomizer === 1000) { //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerRandomizer);
          timerRandomizer = 0;
          currentlyUpgradingrandomizer = false;
          // Input Code Here //

          // Green blink when finished //
          document.querySelector("#research-bar4").style.width = 0;
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

      // Red Flash if Score < Cost
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

//Research Section 5 | -- -- -- | -- -- --
let costGoofyAh = 1;
let progressGoofyAh = 0;
let timerGoofyAh = 0;
let currentlyUpgradingGoofyAh = false;

document.querySelector("#research5").addEventListener("click", function () {
  if (currentlyUpgradingGoofyAh === false) {                                          // Tests if Application is on cooldown
    if (score >= costGoofyAh) {                                                   // Tests if player has enough points
      currentlyUpgradingGoofyAh = true;                                               // Sets Application on cooldown
      score = score - costGoofyAh;                                                // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerGoofyAh = setInterval(function () {
        timerGoofyAh++;

        // Progress Bar (CSS) //
        let progressGoofyAh =
          (timerGoofyAh /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#research-bar5").style.width = progressGoofyAh;

        // Timer Finish //
        if (timerGoofyAh === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerGoofyAh);
          timerGoofyAh = 0;
          currentlyUpgradingGoofyAh = false;
          // Input Code Here //

          // Green blink when finished //
          document.querySelector("#research-bar5").style.width = 0;
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

      // Red Flash if Score < Cost
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

//Research Section 6 | -- -- -- | -- -- --
let costTest = 1;
let progressTest = 0;
let timerTest = 0;
let currentlyUpgradingTest = false;

document.querySelector("#research6").addEventListener("click", function () {
  if (currentlyUpgradingTest === false) {                                            // Tests if Application is on cooldown
    if (score >= costTest) {                                                     // Tests if player has enough points
      currentlyUpgradingTest = true;                                                 // Sets Application on cooldown
      score = score - costTest;                                                  // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerTest = setInterval(function () {
        timerTest++;

        // Progress Bar (CSS) //
        let progressTest =
          (timerTest /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#research-bar6").style.width = progressTest;

        // Timer Finish //
        if (timerTest === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerTest);
          timerTest = 0;
          currentlyUpgradingTest = false;
          // Input Code Here //

          // Green blink when finished //
          document.querySelector("#research-bar6").style.width = 0;
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

      // Red Flash if Score < Cost
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

//Research Section 7 | Sabotage House | Unlocks new Sabotage - Shop Section
let costSabotageHouse = 1;
let progressSabotageHouse = 0;
let timerSabotageHouse = 0;
let currentlyUpgradingSabotageHouse = false;

document.querySelector("#research7").addEventListener("click", function () {
  if (currentlyUpgradingSabotageHouse === false) {                                    // Tests if Sabotage House is on cooldown
    if (score >= costSabotageHouse) {                                             // Tests if player has enough points
      currentlyUpgradingSabotageHouse = true;                                         // Sets Sabotage on cooldown
      score = score - costSabotageHouse;                                          // Removes upgrade cost from score

      // Timer / Cooldown Starts Here //
      let countdownTimerSabotageHouse = setInterval(function () {
        timerSabotageHouse++;

        // Progress Bar (CSS) //
        let progressSabotageHouse =
          (timerSabotageHouse /
            1000) /* Hier auch Zeit in 5/1000 einer Sekunde eingeben */ *
            100 +
          "%";
        document.querySelector("#research-bar7").style.width = progressSabotageHouse;

        // Timer Finish //
        if (timerSabotageHouse === 1000) {
          //Hier Zeit in 5/1000 einer Sekunde eingeben :)
          clearInterval(countdownTimerSabotageHouse);
          timerSabotageHouse = 0;
          currentlyUpgradingSabotageHouse = false;
          // Input Code Here //

          // Green blink when finished //
          document.querySelector("#research-bar7").style.width = 0;
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

      // Red Flash if Score < Cost
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
