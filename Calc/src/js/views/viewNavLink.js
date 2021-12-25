"use strict";

const _navArrow = document.querySelectorAll(".nav-arrow");

const _linkToggle = function () {
  const getStyle = document.styleSheets[0].cssRules[54].style;

  getStyle.getPropertyValue("left") != "-30px" ? getStyle.setProperty("left", "-30px") : getStyle.setProperty("left", "5px");

  _mouseLeaveHideTab(54);
};

const _menuToggle = function () {
  const getStyle = document.styleSheets[0].cssRules[46].style;

  getStyle.getPropertyValue("left") != "315px" ? getStyle.setProperty("left", "315px") : getStyle.setProperty("left", "350px");

  _mouseLeaveHideTab(46);
};

const _mouseLeaveHideTab = function (data) {
  const getStyle = document.styleSheets[0].cssRules[data].style;

  if (data != 46) {
    setTimeout(function () {
      getStyle.setProperty("left", "-30px");
    }, 2000);
  } else {
    setTimeout(function () {
      getStyle.setProperty("left", "350px");
    }, 2000);
  }
};

export const _addHandlerNavLinks = function () {
  _navArrow.forEach((el) => {
    el.addEventListener("click", function () {
      el.classList.contains("nav-arrow-menu") ? _menuToggle() : _linkToggle();
    });
  });
};
