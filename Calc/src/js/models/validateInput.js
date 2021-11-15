"use strict";

import { ladderComplianceData } from "../helpers.js";

export const chkComplianceFunc = function () {};

// Check whether input is empty
export const chkEmptyInput = function (data, error) {
  const inputData = Array.from(data).map((el) => +el.value);

  return inputData.includes(0) ? error() : inputData;
};

// Check whether input complies to complianceData
export const chkCompliance = function (data, error) {
  const compDataArr = Object.values(ladderComplianceData);

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
