"use strict";

let navToggle = document.querySelector(".main-nav__toggle");
let navMain = document.querySelector(".main-nav");
navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  } else {
    navMain.classList.add("main-nav--opened");
    navMain.classList.remove("main-nav--closed");
  }
});
