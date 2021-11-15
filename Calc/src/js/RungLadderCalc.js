"use strict";

const userInput = document.querySelectorAll(".input-field");
const renderResult = document.querySelector(".result-table");

const btnSubmit = document.querySelector(".btn-submit");
const btnDropdown = document.querySelector(".dropdown-ladder-btn");

const dropDownMenu = document.querySelector(".dropdown-ladder-content");

// Australian Standard 1657 - 2018
const ausStd1657 = {
  maxRungSpc: 300, // Max rung spacing
  OAWidthRange: [450, 600],
  ladderPitchRange: [70, 90],
};

// Rung ladder object
const rungLadder = {
  verticalHeight: "",
  ladderPitch: "",
  ladderBaseLength: "",
  rungQty: "",
  rungSpace: "",
  topStileLength: "",
  ladderWidth: 600,
  totalStileLength: "",
};

function generateResultView() {
  return `
    <ul>
      <li>Vertical Height: ${rungLadder.verticalHeight}</li>
      <li>Ladder Pitch: ${rungLadder.ladderPitch}</li>
      <li>Total Length: ${rungLadder.totalStileLength}</li>
      <li>Top Stile Length: ${rungLadder.topStileLength}</li>
      <li>Overall Width: ${rungLadder.ladderWidth}</li>
      <li>Rung Height: ${rungLadder.rungSpace}</li>
      <li>Rung Quantity: ${rungLadder.rungQty}</li>
    </ul>
  `;
}

function generateErrorView() {
  return `
    <p>
      Error! Non-Compliant ladder size input! Please Check... Overall width to be between ${ausStd1657.OAWidthRange[0]}-${ausStd1657.OAWidthRange[1]} and ladder pitch between ${ausStd1657.ladderPitchRange[0]}-${ausStd1657.ladderPitchRange[1]};
    </p>
  `;
}

function generateNullView() {
  return `
  <p>
    Error! Missing inputs.. Please try again!
  </p>
`;
}

// Calculate radians
function radianCalc(degree) {
  return (degree * Math.PI) / 180;
}

// Calculate ladder base length
function calcLadderBase() {
  return Math.trunc(rungLadder.verticalHeight / Math.sin(radianCalc(rungLadder.ladderPitch)));
}

// Calculate rung quantity
function calcRungQty() {
  return Math.ceil(rungLadder.ladderBaseLength / ausStd1657.maxRungSpc);
}

// Calculate rung spacing
function calcRungSpc() {
  return Math.trunc(rungLadder.ladderBaseLength / rungLadder.rungQty);
}

// Calculate total stile length
function calcTotalStileLength() {
  return rungLadder.ladderBaseLength + rungLadder.topStileLength;
}

function calcTopStile() {
  return rungLadder.ladderPitch !== 90 ? 1650 : 1350;
}

function chkInputCompliance(input, min, max) {
  return input >= min && input <= max;
}

function complianceErrorMsg(width, pitch) {
  return `Error! Non-Compliant ladder size input! Please Check... Overall width to be between ${ausStd1657.OAWidthRange[0]}-${ausStd1657.OAWidthRange[1]} (${width}) and ladder pitch between ${ausStd1657.ladderPitchRange[0]}-${ausStd1657.ladderPitchRange[1]} (${pitch})`;
}

function submitForm(vHeight, width, pitch) {
  // Guard clause
  if (
    chkInputCompliance(pitch, ausStd1657.ladderPitchRange[0], ausStd1657.ladderPitchRange[1]) !== true ||
    chkInputCompliance(width, ausStd1657.OAWidthRange[0], ausStd1657.OAWidthRange[1]) !== true
  ) {
    console.log(complianceErrorMsg(width, pitch));
    insertErrorResult();
    return;
  }

  rungLadder.verticalHeight = +vHeight;
  rungLadder.ladderPitch = +pitch;
  rungLadder.ladderWidth = +width;

  ladderCalculate();
}

// Get user input

function getUserInput() {
  const inputValue = Array.from(userInput).map((el) => el.value);

  console.log(inputValue);
  // use Array.reduce?
  if (inputValue.includes("")) {
    // Clear Form
    // userInput.forEach((el) => (el.value = ""));
    insertNullResult();
    return;
  }

  // Clear Form
  userInput.forEach((el) => (el.value = ""));

  submitForm(inputValue[0], inputValue[1], inputValue[2]);
}

// Control calculate ladder summary (Async/Await)
async function ladderCalculate() {
  rungLadder.ladderBaseLength = await calcLadderBase();
  rungLadder.rungQty = await calcRungQty();
  rungLadder.rungSpace = await calcRungSpc();
  rungLadder.topStileLength = await calcTopStile();
  rungLadder.totalStileLength = await calcTotalStileLength();

  console.log(rungLadder);
  insertRenderResult();
}

// Render
function insertNullResult() {
  renderResult.innerHTML = "";

  renderResult.insertAdjacentHTML("afterbegin", generateNullView());
}

function insertErrorResult() {
  renderResult.innerHTML = "";

  renderResult.insertAdjacentHTML("afterbegin", generateErrorView());
}

function insertRenderResult() {
  renderResult.innerHTML = "";

  renderResult.insertAdjacentHTML("afterbegin", generateResultView());
}

// Input Enter Listener (Click Calc Button)
btnSubmit.addEventListener("click", getUserInput);

// Click Dropdown Button
btnDropdown.addEventListener("click", toggleDropDownMenu);

// Hit Enter on form
userInput.forEach((ev) =>
  ev.addEventListener("keyup", (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") btnSubmit.click();
  })
);

// Dropdown menu function
function toggleDropDownMenu() {
  dropDownMenu.classList.toggle("show");
}
