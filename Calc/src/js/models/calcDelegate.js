"use strict";

import * as validateInput from "./validateInput.js";
import createNewRung from "./classRungLadder.js";
import createNewStep from "./classStepLadder.js";
import createNewStair from "./classStair.js";

// Delegate calculation
export const _calcResult = function (data, error, result, activeTab) {
  const createResultArr = [createNewRung, createNewStep, createNewStair];

  const chkEmptyResult = validateInput._chkEmptyInput(data, error);
  if (chkEmptyResult == undefined) {
    return;
  }

  const chkCompTab = validateInput._chkActiveTab(activeTab);
  if (chkCompTab == undefined) {
    return;
  }

  const chkCompResult = validateInput._chkCompliance(chkEmptyResult, error, chkCompTab);
  if (chkCompResult == undefined) {
    return;
  }

  const finalChkAddID = validateInput._addTabID(chkCompResult, activeTab);
  if (finalChkAddID == undefined) {
    return;
  }

  result(new createResultArr[activeTab](...finalChkAddID));
};
