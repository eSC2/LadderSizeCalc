"use strict";

import * as validateInput from "./validateInput.js";
import createNewRung from "./classRungLadder.js";
import createNewStep from "./classStepLadder.js";
import createNewStair from "./classStair.js";

// Delegate calculation
export const _calcResult = function (data, error, result, activeTab) {
  const createResultArr = [createNewRung, createNewStep, createNewStair];

  // Check if input is empty
  const chkEmptyResult = validateInput._chkEmptyInput(data, error);
  if (chkEmptyResult == undefined) {
    return;
  }

  // Check which tab is active and return corresponding compliance data for calculation
  const chkCompTab = validateInput._chkActiveTab(activeTab);
  if (chkCompTab == undefined) {
    return;
  }

  // Check input against compliance data prior to calculation
  const chkCompResult = validateInput._chkCompliance(chkEmptyResult, error, chkCompTab);
  if (chkCompResult == undefined) {
    return;
  }

  // Add Tab ID to data array to determine which HTML element to use in render stage
  const finalChkAddID = validateInput._addTabID(chkCompResult, activeTab);
  if (finalChkAddID == undefined) {
    return;
  }

  // Calculate and generate new ladder object according to activeTab (activeTab corresponds to createResultArr index no.)
  result(new createResultArr[activeTab](...finalChkAddID));
};
