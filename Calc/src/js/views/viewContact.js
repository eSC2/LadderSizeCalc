"use strict";

const btnContact = document.querySelector(".contact-btn");
const cFormSect = document.querySelector(".contact-form");
const cFormInputField = document.querySelectorAll(".contact-field");
const thanksMessage = document.querySelector(".contact-thanks");

// Toggle contact form and thank you message
export const _toggleContactThanks = function () {
  cFormSect.classList.toggle("hidden");
  thanksMessage.classList.toggle("hidden");
};

// Empty contact form input fields
export const _emptyContactForm = function () {
  cFormInputField.forEach((e) => (e.value = ""));
};

// Add event to submit button - clear input and render thank you message
export const _submitContactBtn = function () {
  btnContact.addEventListener("submit", function () {
    _emptyContactForm();
    _toggleContactThanks();
  });
};
