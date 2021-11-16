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
  _parentElement = document.querySelector(".container-calculator");

  _calcRungLadder() {
    return `
    <div class="calc-rungladder">
      <div class="calc-view">
        <ul>
          <li>Vertical Height</li>
          <input class="input-field" vHeight />
          <li>Ladder Width</li>
          <input class="input-field" ladderWidth />
          <li>Ladder Pitch</li>
          <input class="input-field" ladderPitch />
        </ul>
        <button class="btn-calc">Calculate</button>
      </div>
    </div>
    `;
  }

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
