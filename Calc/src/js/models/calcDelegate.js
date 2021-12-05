"use strict";

import * as validateInput from "./validateInput.js";
import createNewLadder from "./classDefaultLadderStair.js";

// Delegate calculation
export const calcResult = function (data, error, result) {
  const chkEmptyResult = validateInput.chkEmptyInput(data, error);

  const chkCompResult = validateInput.chkCompliance(chkEmptyResult, error);

  result(new createNewLadder(...chkCompResult));
};
