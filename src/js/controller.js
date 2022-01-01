"use strict";

import { _calcResult } from "./models/calcDelegate.js";
import { _printResult } from "./views/viewPrint.js";

import * as viewNavLinks from "./views/viewNavLink.js";
import * as viewContact from "./views/viewContact.js";

import viewInfo from "./views/viewInfo.js";
import viewCalc from "./views/viewCalc.js";
import viewResult from "./views/viewResult.js";

// Main calculate function
const _calculateLadder = function () {
  const userInput = viewCalc._getUserInput();
  const activeTab = viewInfo._getCurrentActiveTab();

  _clearError();
  _calcResult(userInput, _renderError, _renderResult, activeTab);
};

// Adding all input related handlers
const _addInputHandlers = function () {
  viewCalc._addHandlerCalculate(_calculateLadder);
  viewCalc._addHandlerCalcEnter(_calculateLadder);
  viewCalc._stdInputFieldColor();
};

// Adding all menu/link related handlers
const _addNavLinksHandlers = function () {
  viewNavLinks._addHandlerNavLinks();
  viewNavLinks._openModalAbout();
  viewNavLinks._openModalContact();

  viewContact._submitContactBtn();
};

// Rendering input fields
const _renderLadderCalc = function () {
  viewCalc._renderData(viewCalc._renderCalculator());
  _addInputHandlers();
};

// Render final result and adding handlers to buttons
const _renderResult = function (data) {
  viewCalc._clearInputField();
  viewResult._renderData(viewResult._renderResult(data));
  viewResult._addHandlerBack(_renderLadderCalc);
  viewResult._addHandlerSave(_savePrint);
};

// Render error message
const _renderError = function () {
  viewCalc._inputTextErrColor();
  viewResult._renderData(viewResult._renderError());
};

// Clear error message
const _clearError = function () {
  viewResult._renderData(viewResult._clearError());
};

// Print result
const _savePrint = function (data) {
  _printResult(data);
};

// Initialize functions
const init = function () {
  viewInfo._renderActiveTab(_renderLadderCalc, _clearError);

  _addNavLinksHandlers();
  _addInputHandlers();
};

init();
