"use strict";

(function () {
  let toggle = document.querySelector(".main-nav__toggle");
  toggle.addEventListener("click", function (event) {
    event.preventDefault();
    let menu = document.querySelector(".main-nav");
    menu.classList.toggle("is-open");
  });
})();
