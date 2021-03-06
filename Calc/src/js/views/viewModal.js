"use strict";

const _modalOverlayAbout = document.querySelector(".modal-overlay-about");
const _modalOverlayContact = document.querySelector(".modal-overlay-contact");

const _modalAbout = document.querySelector(".modal-about");
const _modalContact = document.querySelector(".modal-contact");

// Toggle Modal - About
export const _toggleModalAbout = function () {
  _modalAbout.classList.toggle("hidden");
  _modalOverlayAbout.classList.toggle("hidden");
};

// Toggle Modal - Contact
export const _toggleModalContact = function () {
  _modalContact.classList.toggle("hidden");
  _modalOverlayContact.classList.toggle("hidden");
};
