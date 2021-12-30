"use strict";

import { _calcResult } from "./models/calcDelegate.js";
import { _printResult } from "./views/viewPrint.js";

import * as viewNavLinks from "./views/viewNavLink.js";
import * as viewContact from "./views/viewContact.js";

import viewInfo from "./views/viewInfo.js";
import viewCalc from "./views/viewCalc.js";
import viewResult from "./views/viewResult.js";

// import viewMaterials from "./views/viewMaterials.js";

const _calculateLadder = function () {
  const userInput = viewCalc._getUserInput();
  const activeTab = viewInfo._getCurrentActiveTab();

  _clearError();
  _calcResult(userInput, _renderError, _renderResult, activeTab);
};

const _addInputHandlers = function () {
  viewCalc._addHandlerCalculate(_calculateLadder);
  viewCalc._addHandlerCalcEnter(_calculateLadder);
  viewCalc._stdInputFieldColor();
};

const _renderLadderCalc = function () {
  viewCalc._renderData(viewCalc._renderCalculator());
  _addInputHandlers();
};

const _renderResult = function (data) {
  viewCalc._clearInputField();
  viewResult._renderData(viewResult._renderResult(data));
  viewResult._addHandlerBack(_renderLadderCalc);
  viewResult._addHandlerSave(_savePrint);
};

const _renderError = function () {
  viewCalc._inputTextErrColor();
  viewResult._renderData(viewResult._renderError());
};

const _clearError = function () {
  viewResult._renderData(viewResult._clearError());
};

const _savePrint = function (data) {
  _printResult(data);
};

const init = function () {
  viewInfo._renderActiveTab(_renderLadderCalc, _clearError);
  viewNavLinks._addHandlerNavLinks();
  viewNavLinks._openModalAbout();
  viewNavLinks._openModalContact();
  viewContact._submitContact();
  _addInputHandlers();
};

init();
