"use strict";

import { calcResult } from "./models/calcDelegate.js";

import viewInfo from "./views/viewInfo.js";
import viewCalc from "./views/viewCalc.js";
import viewResult from "./views/viewResult.js";
// import viewMaterials from "./views/viewMaterials.js";

const calculateLadder = function () {
  const userInput = viewCalc._getUserInput();

  viewResult._renderData(viewResult._clearError());
  calcResult(userInput, renderError, renderResult);
};

const renderLadderCalc = function () {
  viewCalc._renderData(viewCalc._renderCalculator());
  viewCalc.addHandlerCalculate(calculateLadder);
  viewCalc.stdInputFieldColor();
};

const renderResult = function (data) {
  viewCalc._clearInputField();
  viewResult._renderData(viewResult._renderResult(data));
  viewResult.addHandlerBack(renderLadderCalc);
  // viewMaterials._renderData(viewMaterials._renderMaterials(data));
};

const renderError = function () {
  viewCalc._inputTextErrColor();
  viewResult._renderData(viewResult._renderError());
};

const init = function () {
  viewInfo._renderData(viewInfo._generateInfoLadder());
  // viewResult._getParentEl();
  viewCalc.addHandlerCalculate(calculateLadder);
  viewCalc.stdInputFieldColor();
};

init();
