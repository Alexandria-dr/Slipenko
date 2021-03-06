const navButton = document.querySelector('.nav__burger');

navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.nav__burger-menu_mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})

var videos = document.getElementsByClassName("videoAuto"),
fraction = 0.8;
function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

const mainVideo = document.querySelector('.work__videos__active');
const clickVideo = document.querySelectorAll('.video-link[data-videoLink]');

clickVideo.forEach(element => {
element.addEventListener('click', ()=>{
    let a = element.getAttribute('data-videoLink');
   mainVideo.innerHTML = a;
})    
});

const nav = document.querySelector("nav");
function toggleTopMenu() {
  if (pageYOffset > 30) {
    nav.classList.add("is-scroll");
  } else {
    nav.classList.remove("is-scroll");
  }
}
window.addEventListener("scroll", toggleTopMenu);

const menuLinks = document.querySelectorAll(".menu-link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".nav__container").offsetHeight +
        20;
      if (menuLink.classList.contains("burger-item")) {
        navButton.click();
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
