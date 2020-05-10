"use strict";

let navToggle = document.querySelector(".main-nav__toggle");
let navMain = document.querySelector(".main-nav");
let userNav = document.querySelector(".user-nav");
navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");
userNav.classList.remove("user-nav--opened");
userNav.classList.add("user-nav--closed");

navToggle.addEventListener("click", function () {
  if (
    navMain.classList.contains("main-nav--opened") &&
    userNav.classList.contains("user-nav--opened")
  ) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    userNav.classList.remove("user-nav--opened");
    userNav.classList.add("user-nav--closed");
  } else {
    navMain.classList.add("main-nav--opened");
    navMain.classList.remove("main-nav--closed");
    userNav.classList.add("user-nav--opened");
    userNav.classList.remove("user-nav--closed");
  }
});
