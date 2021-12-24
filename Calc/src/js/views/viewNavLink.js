"use strict";

const _linkToggle = function () {
  const getStyle = document.styleSheets[0].cssRules[54].style;

  getStyle.getPropertyValue("left") != "-30px" ? getStyle.setProperty("left", "-30px") : getStyle.setProperty("left", "5px");
};

const _menuToggle = function () {
  const getStyle = document.styleSheets[0].cssRules[46].style;

  getStyle.getPropertyValue("left") != "315px" ? getStyle.setProperty("left", "315px") : getStyle.setProperty("left", "350px");
};

export const addHandlerNavLinks = function () {
  const navArrow = document.querySelectorAll(".nav-arrow");

  navArrow.forEach((el) => {
    el.addEventListener("click", function () {
      el.classList.contains("nav-arrow-menu") ? _menuToggle() : _linkToggle();
    });
  });
};
