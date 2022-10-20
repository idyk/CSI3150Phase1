//variables for each button
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const issue = document.getElementById("issueGroup");
const issueTitle = document.getElementById("issueGroupTitle");
const issueImg = document.getElementById("issueImg");
const issueDesc = document.getElementById("issueGroupDescription");
const innerBtns = document.getElementById("innerBtnsGrp");
const imgBtn1 = document.getElementById("imgBtn1");
const imgBtn2 = document.getElementById("imgBtn2");
const imgBtn3 = document.getElementById("imgBtn3");

//set default issue to 1 on page load
document.addEventListener("DOMContentLoaded", buttonOneShow);

//defining issues
let issueContent = [
  {
    title: "Issue #1",
    image: "../media/images/favicon.png",
    description: "This is for Issue #1.",
  },
  {
    title: "Networking Probs!!!!!",
    image: "../media/images/logowithtitle.png",
    description: "WIRES ARE FUnnnnnnnnnnnnnnnnnnnnnnnn!!!!",
  },
];

//event listeners for button clicks
btn1.addEventListener("click", buttonOneShow);
btn2.addEventListener("click", buttonTwoShow);
imgBtn1.addEventListener("click", networkImg1);
imgBtn2.addEventListener("click", networkImg2);
imgBtn3.addEventListener("click", networkImg3);

//functions for each button
function buttonOneShow() {
  issue.classList.remove("issueTwo");
  innerBtns.style.opacity = 0;
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
  issue.classList.add("issueTwo");
  console.log("Issue #2");
  console.log(issueContent[1].title);
  console.log(issueContent[1].image);
  console.log(issueContent[1].description);
  issueTitle.innerHTML = issueContent[1].title;
  issueImg.src = issueContent[1].image;
  issueDesc.innerHTML = issueContent[1].description;
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
  console.log("image 3");
  issueImg.src = "../media/images/itsok_3.png";
}
