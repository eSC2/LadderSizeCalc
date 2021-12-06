"use strict";

import View from "./view.js";

class viewResult extends View {
  _parentElement = document.querySelector(".subcontent-calculator");

  _renderResult(data) {
    return `
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
    <br />
    <p style='font-size:9px;'><strong>Note</strong>: This is for guidance only. Always seek professional advices from certified height safety product supplier.</p>
    <br />
    <br />
    <div class="result-btn">
      <button class="btn-back">Back</button>
      <button class="btn-save">Save</button>
    </div>
    `;
  }

  _renderError() {
    this._parentElement = document.querySelector(".subcontent-message");

    // const getInputStyle = document.querySelector(".input-field");

    // getInputStyle.style.color = "rgba(0, 0, 0, 0.35)";

    return `
    <p>Input Error.. Please follow the guidelines above and try again..</p>
    `;
  }
}

export default new viewResult();
