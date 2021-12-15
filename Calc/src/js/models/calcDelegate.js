"use strict";

import * as validateInput from "./validateInput.js";
import createNewLadder from "./classDefaultLadderStair.js";

// Delegate calculation
export const calcResult = function (data, error, result, activeTab) {
  const chkEmptyResult = validateInput.chkEmptyInput(data, error);
  if (chkEmptyResult == undefined) {
    return;
  }

  const chkCompTab = validateInput.chkActiveTab(activeTab);
  if (chkCompTab == undefined) {
    return;
  }

  const chkCompResult = validateInput.chkCompliance(chkEmptyResult, error, chkCompTab);
  if (chkCompResult == undefined) {
    return;
  }

  result(new createNewLadder(...chkCompResult));
};
