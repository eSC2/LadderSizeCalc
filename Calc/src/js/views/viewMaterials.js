"use strict";

import View from "./view.js";

class viewMaterials extends View {
  _parentElement = document.querySelector(".materials-list");

  _renderMaterials(data) {
    return `
    <ul>
        <h4>Material Usage</h4>
        <li>Ladder Stile: ${data.totalMaterialStile}mm</li>
        <li>Ladder Rung: ${data.totalMaterialTread}mm</li>
    </ul>
    `;
  }
}

export default new viewMaterials();
