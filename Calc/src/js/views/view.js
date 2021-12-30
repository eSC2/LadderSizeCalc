"use strict";

export default class View {
  // Clear view
  _clear() {
    this._parentElement.innerHTML = "";
  }

  // Render data
  _renderData(data) {
    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", data);
  }
}
