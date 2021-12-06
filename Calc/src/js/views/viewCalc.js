"use strict";

import View from "./view.js";

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
    return this._parentElement.querySelectorAll(".input-field");
  }

  _clearInputField() {
    this._parentElement.querySelectorAll(".input-field").forEach((el) => (el.value = ""));
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

  addHandlerCalculate(handler) {
    const btnCalc = document.querySelector(".btn-calc");

    btnCalc.addEventListener("click", function () {
      handler();
    });
  }
}

export default new viewCalc();
