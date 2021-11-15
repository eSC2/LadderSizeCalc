"use strict";

export default class View {
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _renderData(data) {
    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", data);
  }
}
