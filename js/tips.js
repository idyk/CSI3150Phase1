//Make 10 tips to be used in an array.
let tip0 =
  "If someone doesn't know what you're talking about, explain again! And again! And again! And again!";
let tip1 = "Computer not working? Sounds like user error!";
let tip2 = "It's ok if you can't figure something out, just figure it out NOW.";
let tip3 = "Actually do something.";
let tip4 = "Maybe do nothing.";
let tip5 = "Don't get involved until you eventually get involved.";
let tip6 =
  "Don't assume the simplest of tasks are simple for everyone. Even if it IS pressing a giant labeled button.";
let tip7 =
  "There might not be a reasonable budget for your department, but there's always budget somewhere else.";
let tip8 =
  "If someone doesn't reply to your email within a week, get other people involved.";
let tip9 =
  "Do not toss the computer out the window. (If you even have a window. Then toss it at the wall instead.)";

// Have an array to store different tips to cycle through on button press. I will have 10 for this.
let currentTipsListIndex = 0;
const tipsList = [tip0, tip1, tip2, tip3, tip4, tip5, tip6, tip7, tip8, tip9];

//Set first tip to the tips.html file.
document.getElementById("tip").innerHTML = tipsList[0];

//Event listener for Next Tip. Will go to next point in array and keep track of position.
//Function used in function section at end of code.
document.getElementById("next").addEventListener("click", nextButton);

//Event listener for Previous Tip.
document.getElementById("previous").addEventListener("click", backButton);

//Progress bar
const progress1 = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const progress3 = document.getElementById("progress3");
const progress4 = document.getElementById("progress4");
const progress5 = document.getElementById("progress5");
const progress6 = document.getElementById("progress6");
const progress7 = document.getElementById("progress7");
const progress8 = document.getElementById("progress8");
const progress9 = document.getElementById("progress9");
const progress10 = document.getElementById("progress10");

document.addEventListener(
  "DOMContentLoaded",
  setProgressBar(currentTipsListIndex)
);

//Function for next button. Checks for index of the tips list. If valid for the array's length, it will increase the array.
//Otherwise, it will not let you proceed.
function nextButton() {
  console.log("Current tipsList index is: " + currentTipsListIndex);

  if (currentTipsListIndex < tipsList.length - 1) {
    currentTipsListIndex += 1;
    document.getElementById("tip").innerHTML = tipsList[currentTipsListIndex];
    setProgressBar(currentTipsListIndex);
  } else {
    console.log("Max index reached");
  }
}

//Function for back button. Same logic as the next button, but reversed to check for if the index is at 0 or not.
function backButton() {
  console.log("Current tipsList index is: " + currentTipsListIndex);

  if (currentTipsListIndex > 0) {
    currentTipsListIndex -= 1;
    setProgressBar(currentTipsListIndex);
    document.getElementById("tip").innerHTML = tipsList[currentTipsListIndex];
  } else {
    console.log("Min index reached");
  }
}

function setProgressBar(index) {
  console.log("setting bar to index " + index);
  switch (index) {
    case 0:
      progress1.classList.add("tipOne");
      progress2.classList.remove("tipTwo");
      break;
    case 1:
      progress2.classList.add("tipTwo");
      progress1.classList.remove("tipOne");
      progress3.classList.remove("tipThree");
      break;
    case 2:
      progress3.classList.add("tipThree");
      progress4.classList.remove("tipFour");
      progress2.classList.remove("tipTwo");
      break;
    case 3:
      progress4.classList.add("tipFour");
      progress5.classList.remove("tipFive");
      progress3.classList.remove("tipThree");
      break;
    case 4:
      progress5.classList.add("tipFive");
      progress6.classList.remove("tipSix");
      progress4.classList.remove("tipFour");
      break;
    case 5:
      progress6.classList.add("tipSix");
      progress5.classList.remove("tipFive");
      progress7.classList.remove("tipSeven");
      break;
    case 6:
      progress7.classList.add("tipSeven");
      progress6.classList.remove("tipSix");
      progress8.classList.remove("tipEight");
      break;
    case 7:
      progress8.classList.add("tipEight");
      progress7.classList.remove("tipSeven");
      progress9.classList.remove("tipNine");
      break;
    case 8:
      progress9.classList.add("tipNine");
      progress10.classList.remove("tipTen");
      progress8.classList.remove("tipEight");
      break;
    case 9:
      progress10.classList.add("tipTen");
      progress9.classList.remove("tipNine");
      break;
  }
}
