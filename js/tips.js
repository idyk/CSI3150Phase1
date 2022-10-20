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

//Function for next button. Checks for index of the tips list. If valid for the array's length, it will increase the array.
//Otherwise, it will not let you proceed.
function nextButton() {
  console.log("Current tipsList index is: " + currentTipsListIndex);
  if (currentTipsListIndex < tipsList.length - 1) {
    currentTipsListIndex += 1;
    document.getElementById("tip").innerHTML = tipsList[currentTipsListIndex];
  } else {
    console.log("Max index reached");
  }
}

//Function for back button. Same logic as the next button, but reversed to check for if the index is at 0 or not.
function backButton() {
  console.log("Current tipsList index is: " + currentTipsListIndex);
  if (currentTipsListIndex > 0) {
    currentTipsListIndex -= 1;
    document.getElementById("tip").innerHTML = tipsList[currentTipsListIndex];
  } else {
    console.log("Min index reached");
  }
}

// while (1) {
//   setTimeout(flash, 5);
// }

function flash() {
  setTimeout(buttBlink, 3000);
  setTimeout(buttBlinkAgain, 3000);
  flash();
}

function buttBlink() {
  document.getElementById("next").classList.remove("tipsButton");
  document.getElementById("next").classList.add("tipsButtonBlink");
}

function buttBlinkAgain() {
  document.getElementById("next").classList.remove("tipsButtonBlink");
  document.getElementById("next").classList.add("tipsButton");
}
