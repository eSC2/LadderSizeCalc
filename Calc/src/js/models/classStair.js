"use strict";

import DefaultLadderStair from "./classDefaultLadderStair.js";
import { complianceDataStair } from "../data/complianceData.js";

export default class StairCase extends DefaultLadderStair {
  constructor(vHeight, width, pitch, activeTab) {
    super(vHeight, width, pitch, activeTab);

    this._calcStairData();
  }

  _tempCalcArr = ["riserQty", "riserHeight", "treadGoing"];

  // Calculate Riser Qty
  _calcRiserQty() {
    this._tempCalcArr[0] = Math.ceil(this.verticalHeight / complianceDataStair.minMaxRiserSpc[1]);
  }

  _calcStairTreads() {
    // Calculate Riser Height
    this._tempCalcArr[1] = Math.round(this.verticalHeight / this._tempCalcArr[0]);

    // Calculate Tread Going
    this._tempCalcArr[2] = Math.trunc(this._tempCalcArr[1] / Math.tan(this._radianCalc()));
  }

  _calcFlightDepth() {
    return this.flightGoing - complianceDataStair.maxDepthGap;
  }

  _chkStairDataComp() {
    const [a, b] = complianceDataStair.minMaxCombination;
    const combinedValue = this._tempCalcArr[1] * 2 + this._tempCalcArr[2];

    if (combinedValue > a && combinedValue < b) {
      return;
    } else {
      this._tempCalcArr[0]++;
      this._calcStairTreads();
      this._chkStairDataComp();
    }
  }

  // Fill Data
  _fillData() {
    this.riserQty = this._tempCalcArr[0];
    this.riserHeight = this._tempCalcArr[1];
    this.flightGoing = this._tempCalcArr[2];
    this.flightDepth = this._calcFlightDepth(this);
  }

  // Calc Data
  _calcStairData() {
    this._calcRiserQty(this);
    this._calcStairTreads();
    this._chkStairDataComp();
    this._fillData();
  }
}
