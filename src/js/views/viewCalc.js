"use strict";

import View from "./view.js";
import * as infoText from "../views/viewHTMLData.js";

// Create calculator subclass
class viewCalc extends View {
  _parentElement = document.querySelector(".ladder-calc-subcontent");

  // Get user input
  _getUserInput() {
    return document.querySelectorAll(".input-field");
  }

  // Get result element
  _getCalcResEl() {
    return document.querySelector(".subcontent-calc_result");
  }

  // Clear user input fields
  _clearInputField() {
    const inputField = this._getUserInput();

    inputField.forEach((el) => (el.value = ""));
  }

  // Assign input field text color to red
  _inputTextErrColor() {
    const inputField = this._getUserInput();

    inputField.forEach((el) => (el.style.color = "red"));
  }

  // Render ladder calculator input field
  _renderCalculator() {
    this._parentElement = this._getCalcResEl();

    return `
    ${infoText.ladderCalcInput}
    `;
  }

  // Assign input field text color to standard color
  _stdInputFieldColor() {
    const inputField = this._getUserInput();

    inputField.forEach(function (el) {
      el.addEventListener("click", function () {
        if (el.style.color == "rgba(0, 0, 0, 0.85)") {
          return;
        } else {
          inputField.forEach((el) => (el.style.color = "rgba(0, 0, 0, 0.85)"));
        }
      });
    });
  }

  // Add event to button - calculate
  _addHandlerCalculate(handler) {
    const btnCalc = document.querySelector(".btn-calc");

    btnCalc.addEventListener("click", function () {
      handler();
    });
  }

  // Add event to input fields - calculate
  _addHandlerCalcEnter(handler) {
    const inputField = this._getUserInput();

    inputField.forEach(function (el) {
      el.addEventListener("keypress", function (e) {
        if (e.key === "Enter") handler();
      });
    });
  }
}

export default new viewCalc();
