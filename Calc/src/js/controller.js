"use strict";

import { calcResult } from "./models/calcDelegate.js";

import viewInfo from "./views/viewInfo.js";
import viewCalc from "./views/viewCalc.js";
import viewResult from "./views/viewResult.js";
import viewMaterials from "./views/viewMaterials.js";

const calculateLadder = function () {
  const userInput = viewCalc._getUserInput();

  calcResult(userInput, renderError, renderResult);
};

const renderResult = function (data) {
  viewCalc._clearInputField();
  viewResult._renderData(viewResult._renderResult(data));
  // viewMaterials._renderData(viewMaterials._renderMaterials(data));
};

const renderError = function () {
  // viewCalc._clearInputField();
  viewResult._renderData(viewResult._renderError());
};

const init = function () {
  viewInfo._renderData(viewInfo._generateInfoDefault());
  // viewResult._getParentEl();
  viewCalc.addHandlerCalculate(calculateLadder);
};

init();
