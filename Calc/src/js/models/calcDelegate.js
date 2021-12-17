"use strict";

import * as validateInput from "./validateInput.js";
import createNewRung from "./classRungLadder.js";
import createNewStep from "./classStepLadder.js";

// Delegate calculation
export const calcResult = function (data, error, result, activeTab) {
  const createResultArr = [createNewRung, createNewStep];

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

  const finalChkAddID = validateInput.addTabID(chkCompResult, activeTab);
  if (finalChkAddID == undefined) {
    return;
  }

  result(new createResultArr[activeTab](...finalChkAddID));
};
