"use strict";

import View from "./view.js";
import * as infoText from "../helpers.js";

/*
export default class View {
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
*/

class viewCalc extends View {
  _parentElement = document.querySelector(".ladder-calc-subcontent");

  // Get user input
  _getUserInput() {
    return document.querySelectorAll(".input-field");
  }

  _getCalcResEl() {
    return document.querySelector(".subcontent-calc_result");
  }

  _clearInputField() {
    const inputField = this._getUserInput();

    inputField.forEach((el) => (el.value = ""));
  }

  _inputTextErrColor() {
    const inputField = this._getUserInput();

    inputField.forEach((el) => (el.style.color = "red"));
  }

  stdInputFieldColor() {
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

  _renderCalculator() {
    this._parentElement = this._getCalcResEl();

    return `
    ${infoText.infoCalculator}
    `;
  }

  addHandlerCalculate(handler) {
    const btnCalc = document.querySelector(".btn-calc");

    btnCalc.addEventListener("click", function () {
      handler();
    });
  }
}

export default new viewCalc();
