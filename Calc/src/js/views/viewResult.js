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
        <li>Total Ladder Height: ${data.totalStileLength}mm:</li>
    </ul>
    <P>Note: All dimensions given are measured from center-line.</p>
    `;
  }

  _renderError() {
    return `
    <p>Input Error.. Please follow the guideline above and try again..</p>
    `;
  }
}

export default new viewResult();
