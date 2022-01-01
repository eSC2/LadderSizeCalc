"use strict";

import * as compData from "../data/complianceData.js";

// Check whether input is empty/valid
export const _chkEmptyInput = function (data, error) {
  const inputData = Array.from(data).map((el) => +el.value);

  return inputData.includes(0) || inputData.includes(NaN) ? error() : inputData;
};

// Get current active tab and return its ID for render reference
export const _chkActiveTab = function (activeTab) {
  const compDataArr = [compData.complianceDataRung, compData.complianceDataStep, compData.complianceDataStair];

  return compDataArr[activeTab];
};

// Check whether input complies to complianceData
export const _chkCompliance = function (data, error, compTab) {
  const compDataArr = Object.values(compTab);

  const chkComp = data.every((el, i) => {
    const [a, b] = compDataArr[i];
    if (el < a || el > b) {
      return false; // Non-Compliant
    } else {
      return true; // Complies
    }
  });

  return chkComp != false ? data : error();
};

// Push current active tab ID to array
export const _addTabID = function (data, activeTab) {
  data.push(+activeTab);

  return data;
};
