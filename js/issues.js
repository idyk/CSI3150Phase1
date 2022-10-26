//variables for each button
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const issue = document.getElementById("issueGroup");
const issueTitle = document.getElementById("issueGroupTitle");
const issueImg = document.getElementById("issueImg");
const issueDesc = document.getElementById("issueGroupDescription");
const innerBtns = document.getElementById("innerBtnsGrp");
const imgBtn1 = document.getElementById("imgBtn1");
const imgBtn2 = document.getElementById("imgBtn2");
const imgBtn3 = document.getElementById("imgBtn3");
let issueIndex = 0;
let dogPets = 0;
let catPets = 0;

//check for mobile for some possible use cases for accesibility reasons
const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
console.log("On mobile? " + mobileCheck);

//meme declarations
let clickCount = 0;
const mistakesWereMade = new Audio("../media/audio/OH.mp3");
const youDidIt = new Audio("../media/audio/goodJob.wav");
youDidIt.loop = true;

//set default issue to 1 on page load
document.addEventListener("DOMContentLoaded", buttonOneShow);

//defining issues
let issueContent = [
  {
    title: "Exploding Computers",
    image: "../media/images/computer.jpg",
    description:
      "So this has never happened, but run far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far away if it does!",
  },
  {
    title: "Networking Problems!!!!!",
    image: "../media/images/itsok_1.jpg",
    description:
      "WIRES ARE FUNNNNNNNNNNNNNNN!!!! (do NOT hit the Image 3 button 10 times!)",
  },
  {
    title: "Impending Doom: Ratty",
    image: "../media/images/RATTY.png",
    description:
      "Pet the Ratty. This is an important issue that you need to resolve right now. Move mouse around image on PC, tap image on mobile.",
  },
  {
    title: "Help The Gizmo",
    image: "../media/images/gizmo.png",
    description:
      "Pet the Gizmo. This is an important issue that you need to resolve right now. Move mouse around image on PC, tap image on mobile.",
  },
];

//event listeners for button clicks
btn1.addEventListener("click", buttonOneShow);
btn2.addEventListener("click", buttonTwoShow);
imgBtn1.addEventListener("click", networkImg1);
imgBtn2.addEventListener("click", networkImg2);
imgBtn3.addEventListener("click", networkImg3);
btn3.addEventListener("click", buttonThreeShow);
btn4.addEventListener("click", buttonFourShow);

//Check mobile first to determine which kind of petting method is used
if (mobileCheck == false) {
  issueImg.addEventListener("mousemove", petTheDog);
  issueImg.addEventListener("mousemove", petTheCat);
} else {
  issueImg.addEventListener("click", petTheDog);
  issueImg.addEventListener("click", petTheCat);
}

//functions for each button
function buttonOneShow() {
  issueIndex = 0;
  disableImgButtons();
  muteAll();
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFour");
  issue.classList.add("issueOne");
  console.log(issueContent[0].title);
  console.log(issueContent[0].image);
  console.log(issueContent[0].description);
  issueTitle.innerHTML = issueContent[0].title;
  issueImg.src = issueContent[0].image;
  issueDesc.innerHTML = issueContent[0].description;
}

function buttonTwoShow() {
  issueIndex = 1;
  enableImgButtons();
  muteAll();
  issue.classList.remove("issueOne");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFour");
  issue.classList.add("issueTwo");
  console.log("Issue #2");
  console.log(issueContent[1].title);
  console.log(issueContent[1].image);
  console.log(issueContent[1].description);
  issueTitle.innerHTML = issueContent[1].title;
  issueImg.src = issueContent[1].image;
  issueDesc.innerHTML = issueContent[1].description;
}

function buttonThreeShow() {
  issueIndex = 2;
  dogPets = 0;
  disableImgButtons();
  muteAll();
  issue.classList.remove("issueOne");
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueFour");
  issue.classList.add("issueThree");
  console.log("Issue #3");
  console.log(issueContent[2].title);
  console.log(issueContent[2].image);
  console.log(issueContent[2].description);
  issueTitle.innerHTML = issueContent[2].title;
  issueImg.src = issueContent[2].image;
  issueDesc.innerHTML = issueContent[2].description;
}

function buttonFourShow() {
  issueIndex = 3;
  catPets = 0;
  disableImgButtons();
  muteAll();
  issue.classList.remove("issueOne");
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueThree");
  issue.classList.add("issueFour");
  console.log("Issue #4");
  console.log(issueContent[3].title);
  console.log(issueContent[3].image);
  console.log(issueContent[3].description);
  issueTitle.innerHTML = issueContent[3].title;
  issueImg.src = issueContent[3].image;
  issueDesc.innerHTML = issueContent[3].description;
}

function networkImg1() {
  console.log("image 1");
  issueImg.src = "../media/images/itsok_1.jpg";
}

function networkImg2() {
  console.log("image 2");
  issueImg.src = "../media/images/itsok_2.png";
}

//A fun little function.
//If the user clicks the third image button 10 times, the website will be disappointed in the user.
function networkImg3() {
  clickCount++;
  console.log("image 3");
  if (clickCount >= 10) {
    disableImgButtons();
    issueImg.src = "../media/images/why.png";
    issueDesc.innerHTML = "Button privileges REVOKED!";
    mistakesWereMade.currentTime = 0;
    mistakesWereMade.muted = false;
    mistakesWereMade.play();
    innerBtns.style.opacity = 0;
    clickCount = 0;
  } else {
    issueImg.src = "../media/images/itsok_3.png";
  }
}

//opacity hides, this makes it where you can't click the invisible buttons
function disableImgButtons() {
  innerBtns.style.opacity = 0;
  imgBtn1.disabled = true;
  imgBtn2.disabled = true;
  imgBtn3.disabled = true;
}

//Force enables the image buttons.
function enableImgButtons() {
  innerBtns.style.opacity = 1;
  imgBtn1.disabled = false;
  imgBtn2.disabled = false;
  imgBtn3.disabled = false;
}

//Muted any sound used.
function muteAll() {
  mistakesWereMade.muted = true;
  youDidIt.muted = true;
}

//Function for when the user pets the dog.
//This has two variations dependent on if the device is mobile or not.
//It calculates the "pets" based on interaction, and then plays a song and changes the image.
function petTheDog() {
  console.log(dogPets);
  if (issueIndex == 2) {
    console.log("petting the dog");
    dogPets++;
    if (mobileCheck == false) {
      if (dogPets == 999) {
        console.log("the dog is pet enough");
        issueImg.src = "../media/images/RATTY_PET.png";
        issueDesc.innerHTML = "You did it!!!";
        youDidIt.muted = false;
        youDidIt.play();
      }
    } else {
      if (dogPets == 15) {
        console.log("the dog is pet enough");
        issueImg.src = "../media/images/RATTY_PET.png";
        issueDesc.innerHTML = "You did it!!!";
        youDidIt.muted = false;
        youDidIt.play();
      }
    }
  }
}
//Function for when the user pets the cat.
//Same logic as petting the dog.
function petTheCat() {
  if (issueIndex == 3) {
    console.log("petting the cat");
    catPets++;
    if (mobileCheck == false) {
      if (catPets == 999) {
        console.log("the cat is pet enough");
        issueImg.src = "../media/images/gizmo_pet.png";
        issueDesc.innerHTML = "You did it!!!";
        youDidIt.muted = false;
        youDidIt.play();
      }
    } else {
      if (catPets == 15) {
        console.log("the cat is pet enough");
        issueImg.src = "../media/images/gizmo_pet.png";
        issueDesc.innerHTML = "You did it!!!";
        youDidIt.muted = false;
        youDidIt.play();
      }
    }
  }
}
