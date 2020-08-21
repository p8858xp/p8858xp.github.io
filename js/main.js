AOS.init();

const burger = document.getElementsByClassName("hamburger")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const xbutt = document.getElementsByClassName("menu-close")[0];

// on click open the menu overlay
burger.addEventListener("click", function () {
  console.log("hello");
  overlay.style.opacity = 1;
  document.body.style.overflow = "hidden";
  overlay.style.zIndex = 1000;
});

// when you click on a link close the overlay
const overlayTabs = document.getElementsByClassName("overlay__tab");
console.log(overlayTabs);
for (let i = 0; i < overlayTabs.length; i++) {
  overlayTabs[i].addEventListener("click", function () {
    // remove overlay
    overlay.style.opacity = 0;
    document.body.style.overflow = "visible";
    overlay.style.zIndex = -1;
  });
}

// when you click on the x close the overlay
xbutt.addEventListener("click", function () {
  overlay.style.opacity = 0;
  document.body.style.overflow = "visible";
  overlay.style.zIndex = -1;
});
