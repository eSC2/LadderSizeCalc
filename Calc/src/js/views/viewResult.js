"use strict";

import View from "./view.js";

/*
export default class View {
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
*/

class viewResult extends View {
  _parentElement = document.querySelector(".result-table");

  _renderResult(data) {
    return `
    <ul>
        <li>Vertical Height: ${data.verticalHeight}mm</li>
        <li>Internal Width: ${data.ladderWidth}mm</li>
        <li>Ladder Pitch: ${data.ladderPitch}°</li>
        <br>
        <li>Ladder Base Length: ${data.ladderBaseLength}mm:</li>
        <li>Top Stile Length: ${data.topStileLength}mm:</li>
        <li>Rung Height: ${data.rungSpace}mm</li>
        <li>Rung Quantity: ${data.rungQty} off:</li>
        <br>
        <li>Total Height: ${data.totalStileLength}mm:</li>
    </ul>
    `;
  }
}

export default new viewResult();
