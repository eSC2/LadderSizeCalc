"use strict";

// Create default ladder class
export default class DefaultLadderStair {
  constructor(vHeight, width, pitch, activeTab) {
    this.verticalHeight = vHeight;
    this.ladderWidth = width;
    this.ladderPitch = pitch;
    this.tabID = activeTab;
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
