let className = "white";
let scrollTrigger = 550;
let buttonClassName = "btn-green";

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById("header-white").classList.add(className);
    document.getElementById("button-header").classList.add(buttonClassName);
  } else {
    document.getElementById("header-white").classList.remove(className);
    document.getElementById("button-header").classList.remove(buttonClassName);
  }
};
