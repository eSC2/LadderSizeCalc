"use strict";

import View from "./view.js";
import * as ladderText from "../helpers.js";

/* View from view.js
export default class View {
    _clear() {
      this._parentElement.innerHTML = "";
    }
  }
*/

class viewInfo extends View {
  _parentElement = document.querySelector(".ladder-calc-subcontent");

  _generateInfoLadder() {
    return `    
      ${ladderText.infoRungLadder}
      `;
  }

  _generateInfoStep() {
    return `    
      ${ladderText.infoStepLadder}
      `;
  }

  _generateInfoStair() {}

  _renderActiveTab() {
    const activeTabs = document.querySelectorAll(".btn-tabs");

    let tabID = "";

    const renderTab = function () {
      const allSubcontents = document.querySelectorAll(".subcontent-sub-info");
      const resultImg = document.querySelector(".result-img");
      const renderActiveTab = document.querySelectorAll(`.tab${tabID}`);

      allSubcontents.forEach((el) => (el.style.display = "none"));
      renderActiveTab.forEach((el) => (el.style.display = "block"));
      resultImg.src = `./src/js/img/ladderdwg${tabID}.jpg`;
    };

    const renderTabBind = renderTab.bind();

    activeTabs.forEach(function (el) {
      el.addEventListener("click", function () {
        activeTabs.forEach((e) => e.classList.remove("active-tab"));
        el.classList.toggle("active-tab");
        tabID = el.id;
        renderTabBind();
        ///////////////

        // return el.id and call another function to toggle display:none;
      });
    });
  }
}

export default new viewInfo();
