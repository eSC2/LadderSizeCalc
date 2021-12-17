"use strict";

// import * as compData from "../helpers.js";
import * as compData from "../data/complianceData.js";

export default class DefaultLadderStair {
  constructor(vHeight, width, pitch, activeTab) {
    this.verticalHeight = vHeight;
    this.ladderWidth = width;
    this.ladderPitch = pitch;
    this.tabID = activeTab;

    this._fillData();
  }

  // Calculate radians
  _radianCalc() {
    return (this.ladderPitch * Math.PI) / 180;
  }

  // Calculate ladder base length
  _calcLadderBase() {
    return Math.trunc(this.verticalHeight / Math.sin(this._radianCalc()));
  }
}
