"use strict";

const btnContact = document.querySelector(".contact-btn");
const cFormSect = document.querySelector(".contact-form");
const cFormInputField = document.querySelectorAll(".contact-field");
const thanksMessage = document.querySelector(".contact-thanks");

export const _toggleContactThanks = function () {
  cFormSect.classList.toggle("hidden");
  thanksMessage.classList.toggle("hidden");
};

export const _emptyContactForm = function () {
  cFormInputField.forEach((e) => (e.value = ""));
};

export const _submitContactBtn = function () {
  btnContact.addEventListener("submit", function () {
    _emptyContactForm();
    _toggleContactThanks();
  });
};
