"use strict";

import * as compData from "../helpers.js";

export const chkComplianceFunc = function () {};

// Check whether input is empty
export const chkEmptyInput = function (data, error) {
  const inputData = Array.from(data).map((el) => +el.value);

  return inputData.includes(0) || inputData.includes(NaN) ? error() : inputData;
};

export const chkActiveTab = function (data) {
  if (data === "1") {
    return compData.complianceData1;
  } else if (data === "2") {
    return compData.complianceData2;
  } else {
    return compData.complianceData3;
  }
};

// Check whether input complies to complianceData
export const chkCompliance = function (data, error, compTab) {
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
