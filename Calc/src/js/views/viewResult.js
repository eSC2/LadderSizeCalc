"use strict";

import View from "./view.js";
import { resultDataRungLadder } from "../views/viewHTMLData.js";
import { resultDataStepLadder } from "../views/viewHTMLData.js";
import { resultDataStair } from "../views/viewHTMLData.js";

class viewResult extends View {
  _parentElement = document.querySelector(".subcontent-calculator");

  _getSubContentEl() {
    return document.querySelector(".subcontent-calc_result");
  }

  _getSubConMessageEl() {
    return document.querySelector(".subcontent-error-message");
  }

  _renderResult(data) {
    this._parentElement = this._getSubContentEl();

    const resultArr = [resultDataRungLadder, resultDataStepLadder, resultDataStair];

    return resultArr[data.tabID](data);
  }

  _renderError() {
    this._parentElement = this._getSubConMessageEl();

    return `
    <p>Input Error.. Please follow the guidelines above and try again..</p>
    `;
  }

  _clearError() {
    this._parentElement = this._getSubConMessageEl();

    return "";
  }

  addHandlerBack(handler) {
    const btnBack = document.querySelector(".btn-back");

    btnBack.addEventListener("click", function () {
      handler();
    });
  }

  addHandlerSave(handler) {
    const printArea = document.querySelector(".ladder-calc-subcontent");
    const btnSave = document.querySelector(".btn-save");

    btnSave.addEventListener("click", function () {
      handler(printArea);
    });
  }
}

export default new viewResult();
