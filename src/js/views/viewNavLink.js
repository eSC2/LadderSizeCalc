"use strict";

import * as viewModals from "./viewModal.js";
import * as viewContact from "./viewContact.js";

const _navArrow = document.querySelectorAll(".nav-arrow");
const _navAboutOpenBtn = document.querySelector(".links-about");
const _navContactOpenBtn = document.querySelector(".menu-contact");

const _modalCloseBtnAbout = document.querySelector(".modal-close-btn-about");
const _modalOverlayAbout = document.querySelector(".modal-overlay-about");
const _modalContactThxMsg = document.querySelector(".contact-thanks");

const _modalCloseBtnContact = document.querySelector(".modal-close-btn-contact");
const _modalOverlayContact = document.querySelector(".modal-overlay-contact");

// Link tab (right) animation
const _linkToggle = function () {
  const getStyle = document.styleSheets[0].cssRules[54].style;

  getStyle.getPropertyValue("left") != "-30px" ? getStyle.setProperty("left", "-30px") : getStyle.setProperty("left", "5px");

  _navTabAutoClose(54); // CSS Rule no. corresponding to element property
};

// Menu tab (left) animation
const _menuToggle = function () {
  const getStyle = document.styleSheets[0].cssRules[46].style;

  getStyle.getPropertyValue("left") != "315px" ? getStyle.setProperty("left", "315px") : getStyle.setProperty("left", "350px");

  viewContact._emptyContactForm();
  _navTabAutoClose(46); // CSS Rule no. corresponding to element property
};

// Auto close tab
const _navTabAutoClose = function (data) {
  const timer = 3000;
  const getStyle = document.styleSheets[0].cssRules[data].style;

  if (data != 46) {
    setTimeout(function () {
      getStyle.setProperty("left", "-30px");
    }, timer);
  } else {
    setTimeout(function () {
      getStyle.setProperty("left", "350px");
    }, timer);
  }
};

// Exit modal (About) when pressing ESC key
const _keyESCExitModalAbout = function () {
  document.addEventListener("keyup", function (e) {
    if (_modalOverlayAbout.classList.contains("hidden")) {
      return;
    } else if (e.key === "Escape") {
      viewModals._toggleModalAbout();
    }
  });
};

// Exit modal (Contact) when pressing ESC key
const _keyESCExitModalContact = function () {
  document.addEventListener("keyup", function (e) {
    if (_modalOverlayContact.classList.contains("hidden")) {
      return;
    } else if (e.key === "Escape") {
      _chkContactThxMsg();
    }
  });
};

// Confirm contact thanks message visibility prior to toggling modal visibility
const _chkContactThxMsg = function () {
  if (_modalContactThxMsg.classList.contains("hidden")) {
    viewModals._toggleModalContact();
  } else {
    viewModals._toggleModalContact();
    viewContact._toggleContactThanks();
  }
};

// Add event - clicking arrow to open tab
export const _addHandlerNavLinks = function () {
  _navArrow.forEach((el) => {
    el.addEventListener("click", function () {
      el.classList.contains("nav-arrow-menu") ? _menuToggle() : _linkToggle();
    });
  });
};

// Add event - render Modal (About)
export const _openModalAbout = function () {
  // Add Listener - On click - Toggle Modal - About
  _navAboutOpenBtn.addEventListener("click", viewModals._toggleModalAbout);

  // Add Listener - On click - Close Modal - X button & on Overlay
  _modalOverlayAbout.addEventListener("click", viewModals._toggleModalAbout);
  _modalCloseBtnAbout.addEventListener("click", viewModals._toggleModalAbout);

  // Add Listener - On ESC key - Close Modal - About
  _keyESCExitModalAbout();
};

// Add event - render Modal (Contact)
export const _openModalContact = function () {
  // Add Listener - On click - Toggle Modal - Contact
  _navContactOpenBtn.addEventListener("click", viewModals._toggleModalContact);

  // Add Listener - On click - Close Modal - X button & on Overlay
  _modalOverlayContact.addEventListener("click", _chkContactThxMsg);
  _modalCloseBtnContact.addEventListener("click", _chkContactThxMsg);

  _keyESCExitModalContact();
};
