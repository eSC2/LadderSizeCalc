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

  addHandlerCalculate(handler) {
    const btnCalc = document.querySelector(".btn-calc");

    btnCalc.addEventListener("click", function () {
      handler();
    });
  }
}

export default new viewCalc();
