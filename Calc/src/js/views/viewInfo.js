"use strict";

import View from "./view.js";
import * as infoText from "../helpers.js";

/* View from view.js
export default class View {
    _clear() {
      this._parentElement.innerHTML = "";
    }
  }
*/

class viewInfo extends View {
  _parentElement = document.querySelector(".ladder-calc-subcontent");

  _generateInfoDefault() {
    return `    
      ${infoText.infoRungLadder}
      `;
  }

  _generateInfoLadder() {
    return `    
      <h4>${infoText.infoRungLadder}</h4>
      `;
  }
}

export default new viewInfo();
