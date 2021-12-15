"use strict";

import * as compData from "../helpers.js";

export default class DefaultLadderStair {
  constructor(vHeight, width, pitch) {
    this.verticalHeight = vHeight;
    this.ladderWidth = width;
    this.ladderPitch = pitch;

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

  // Calculate rung quantity
  _calcRungQty() {
    return Math.ceil(this.ladderBaseLength / compData.complianceData1.maxRungSpc);
  }

  // Calculate rung spacing
  _calcRungSpc() {
    return Math.round(this.ladderBaseLength / this.rungQty);
  }

  // Calculate total stile length
  _calcTotalStileLength() {
    return this.ladderBaseLength + this.topStileLength;
  }

  _calcTopStile() {
    return this.ladderPitch !== 90 ? 1065 : 1350;
  }

  _calcTotalMaterialStile() {
    return this.totalStileLength * 2;
  }

  _calcTotalMaterialThread() {
    return this.rungQty * this.rungSpace;
  }

  _fillData() {
    this.ladderBaseLength = this._calcLadderBase(this);
    this.rungQty = this._calcRungQty(this);
    this.rungSpace = this._calcRungSpc(this);
    this.topStileLength = this._calcTopStile(this);
    this.totalStileLength = this._calcTotalStileLength(this);
    this.totalMaterialStile = this._calcTotalMaterialStile(this);
    this.totalMaterialTread = this._calcTotalMaterialThread(this);
  }
}
