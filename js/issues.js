//variables for each button
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const issue = document.getElementById("issueGroup");
const issueTitle = document.getElementById("issueGroupTitle");
const issueImg = document.getElementById("issueImg");
const issueDesc = document.getElementById("issueGroupDescription");
const innerBtns = document.getElementById("innerBtnsGrp");
const imgBtn1 = document.getElementById("imgBtn1");
const imgBtn2 = document.getElementById("imgBtn2");
const imgBtn3 = document.getElementById("imgBtn3");

//meme
let clickCount = 0;
const mistakesWereMade = new Audio("../media/audio/OH.mp3");

//set default issue to 1 on page load
document.addEventListener("DOMContentLoaded", buttonOneShow);

//defining issues
let issueContent = [
  {
    title: "Exploding Computers",
    image: "../media/images/favicon.png",
    description:
      "So this has never happened, but run far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far far away if it does!",
  },
  {
    title: "Networking Probs!!!!!",
    image: "../media/images/itsok_1.jpg",
    description:
      "WIRES ARE FUNNNNNNNNNNNNNNN!!!! (do NOT hit the Image 3 button 10 times!)",
  },
  {
    title: "3",
    image: "../media/images/itsok_1.jpg",
    description: "33333",
  },
  {
    title: "4",
    image: "../media/images/itsok_1.jpg",
    description: "444444",
  },
  {
    title: "5",
    image: "../media/images/itsok_1.jpg",
    description: "555555",
  },
  {
    title: "6",
    image: "../media/images/itsok_1.jpg",
    description: "66666666",
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
btn5.addEventListener("click", buttonFiveShow);
btn6.addEventListener("click", buttonSixShow);

//functions for each button
function buttonOneShow() {
  mistakesWereMade.muted = true;
  innerBtns.style.opacity = 0;
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFour");
  issue.classList.remove("issueFive");
  issue.classList.remove("issueSix");
  issue.classList.add("issueOne");
  console.log(issueContent[0].title);
  console.log(issueContent[0].image);
  console.log(issueContent[0].description);
  issueTitle.innerHTML = issueContent[0].title;
  issueImg.src = issueContent[0].image;
  issueDesc.innerHTML = issueContent[0].description;
}

function buttonTwoShow() {
  innerBtns.style.opacity = 1;
  issue.classList.remove("issueOne");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFour");
  issue.classList.remove("issueFive");
  issue.classList.remove("issueSix");
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
  mistakesWereMade.muted = true;
  innerBtns.style.opacity = 0;
  issue.classList.remove("issueOne");
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueFour");
  issue.classList.remove("issueFive");
  issue.classList.remove("issueSix");
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
  mistakesWereMade.muted = true;
  innerBtns.style.opacity = 0;
  issue.classList.remove("issueOne");
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFive");
  issue.classList.remove("issueSix");
  issue.classList.add("issueFour");
  console.log("Issue #4");
  console.log(issueContent[3].title);
  console.log(issueContent[3].image);
  console.log(issueContent[3].description);
  issueTitle.innerHTML = issueContent[3].title;
  issueImg.src = issueContent[3].image;
  issueDesc.innerHTML = issueContent[3].description;
}

function buttonFiveShow() {
  mistakesWereMade.muted = true;
  innerBtns.style.opacity = 0;
  issue.classList.remove("issueOne");
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFour");
  issue.classList.remove("issueSix");
  issue.classList.add("issueFive");
  console.log("Issue #5");
  console.log(issueContent[4].title);
  console.log(issueContent[4].image);
  console.log(issueContent[4].description);
  issueTitle.innerHTML = issueContent[4].title;
  issueImg.src = issueContent[4].image;
  issueDesc.innerHTML = issueContent[4].description;
}

function buttonSixShow() {
  mistakesWereMade.muted = true;
  innerBtns.style.opacity = 0;
  issue.classList.remove("issueOne");
  issue.classList.remove("issueTwo");
  issue.classList.remove("issueThree");
  issue.classList.remove("issueFour");
  issue.classList.remove("issueFive");
  issue.classList.add("issueSix");
  console.log("Issue #6");
  console.log(issueContent[5].title);
  console.log(issueContent[5].image);
  console.log(issueContent[5].description);
  issueTitle.innerHTML = issueContent[5].title;
  issueImg.src = issueContent[5].image;
  issueDesc.innerHTML = issueContent[5].description;
}

function networkImg1() {
  console.log("image 1");
  issueImg.src = "../media/images/itsok_1.jpg";
}

function networkImg2() {
  console.log("image 2");
  issueImg.src = "../media/images/itsok_2.png";
}

function networkImg3() {
  clickCount++;
  console.log("image 3");
  if (clickCount >= 10) {
    issueImg.src = "../media/images/why.png";
    issueDesc.innerHTML = "Button privileges REVOKED!";
    mistakesWereMade.currentTime = 0;
    mistakesWereMade.play();
    mistakesWereMade.muted = false;
    innerBtns.style.opacity = 0;
    clickCount = 0;
  } else {
    issueImg.src = "../media/images/itsok_3.png";
  }
}
