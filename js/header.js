window.addEventListener("scroll", () => {
  let logo = document.getElementById("logo").style;
  let nav = document.getElementById("nav").style;
  let header = document.getElementById("header").style;
  let nav_logo = document.getElementById("nav-logo").style;
  let side = document.getElementById("side").style;
  let main = document.getElementById("main").style;
  if (window.scrollY > 110) {
    nav_logo.display = "flex";
    if (screen.width > 760) {
      header.height = "40px";
      nav.height = "40px";
      header.position = "fixed";
      logo.display = "none";
      nav.width = "1000px";
      side.paddingTop = "60px";
      main.marginTop = "150px";
    }
  } else {
    side.paddingTop = `${170 - window.scrollY}px`;
    nav_logo.display = "none";
    if (screen.width > 760) {
      header.height = "150px";
      nav.height = "30px";
      header.position = "static";
      logo.display = "flex";
      nav.width = "800px";
      main.marginTop = "0px";
    }
  }
});

document.getElementById("hamburg").addEventListener("click", () => {
  if (screen.width <= 760) {
    let bar = document.getElementById("bar").style;
    let xmark = document.getElementById("xmark").style;
    let nav = document.getElementById("phon-nav").style;
    let html = document.querySelector("html").style;
    if (bar.display == "block") {
      bar.display = "none";
      xmark.display = "block";
      nav.display = "flex";
      html.overflow = "hidden";
      setTimeout(() => {
        nav.opacity = "1";
      }, 1);
    } else {
      bar.display = "block";
      xmark.display = "none";
      nav.display = "none";
      nav.opacity = "0";
      html.overflow = "scroll";
    }
  }
});
