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
  viewResult.addHandlerSave(printResult);
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

///////////////////

const printResult = function (data) {
  const printArea = window.open();

  printArea.document.write("<title>Ladder Size Calculator</title>");
  printArea.document.write('<link rel="stylesheet" href="./styles/printStyle.css" />');
  printArea.document.write('<h2 class="subcontent-print_title">Rung Access Ladder</h2>');
  printArea.document.write(data.innerHTML);

  // Small delay before print in order to allow CSS finish loading.
  setTimeout(function () {
    printArea.print();
    printArea.close();
  }, 100);
};
