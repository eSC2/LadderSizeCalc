"use strict";

import DefaultLadderClass from "./classDefaultLadderStair.js";
import { complianceDataStep } from "../data/complianceData.js";

// Create step ladder subclass
export default class StepLadder extends DefaultLadderClass {
  constructor(vHeight, width, pitch, activeTab) {
    super(vHeight, width, pitch, activeTab);

    this._fillData();
  }

  // Calculate step quantity
  _calcStepQty() {
    return Math.ceil(this.verticalHeight / complianceDataStep.maxStepSpc);
  }

  // Calculate step spacing
  _calcStepSpc() {
    return Math.round(this.verticalHeight / this.stepQty);
  }

  _fillData() {
    this.ladderBaseLength = this._calcLadderBase(this);
    this.stepQty = this._calcStepQty(this);
    this.stepSpace = this._calcStepSpc(this);
    this.totalStileLength = this._calcLadderBase(this);
  }
}
