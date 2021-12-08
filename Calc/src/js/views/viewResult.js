"use strict";

import View from "./view.js";

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

    return `
    <div class='subcontent-result'>
    <ul>
        <li>Vertical Height: ${data.verticalHeight}mm</li>
        <li>Internal Width: ${data.ladderWidth}mm</li>
        <li>Ladder Pitch: ${data.ladderPitch}°</li>
        <br>
        <li>Ladder Base Length: ${data.ladderBaseLength}mm</li>
        <li>Top Stile Length: ${data.topStileLength}mm</li>
        <li>Rung Height: ${data.rungSpace}mm</li>
        <li>Rung Quantity: ${data.rungQty} off</li>
        <br>
        <li>Total Ladder Height: ${data.totalStileLength}mm</li>
    </ul>
    <div>
    <br />
    <p><strong>Note</strong>: Result is for guidance only. Always seek professional advices from certified height safety product supplier.</p>
    <br />
    <div class="result-btn">
      <button class="btn-back">Back</button>
      <button class="btn-save">Save</button>
    </div>
    `;
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
