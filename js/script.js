var h = window.innerHeight;
var w = window.innerWidth;

var site = document.querySelector('.site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

// console.log('screen height = ' + h, 'screen width = ' + w);
// console.log('site height = ' + site_h, 'site width = ' + site_w);

var header = document.getElementsByClassName('header-hero')[0];
var mobileHero = document.getElementsByClassName('hero-image')[0];
var desktopHero = document.getElementsByClassName('hero-image')[1];

function checkScreenWidth() {
    if (site_w > h * 1.5) {
        desktopHero.classList.remove("normal-screen");
        desktopHero.classList.add("wide-screen");
    } else {
        desktopHero.classList.remove("wide-screen");
        desktopHero.classList.add("normal-screen");
    }
}

function changeColour(x) {
    var h4 = document.querySelector('h4.capitalize');
    var h1 = document.querySelector('h1.uppercase');
   
    h4.classList.toggle("white");
    h1.classList.toggle("white");
    x.classList.toggle("peach");
}

document.addEventListener("DOMContentLoaded", function() {

    if ( site_w > h * 0.7) {
        mobileHero.classList.remove("mobile--visible");
        mobileHero.classList.add("mobile--hidden");
        header.style.height = h + "px";
        desktopHero.classList.remove("desktop--hidden");
        desktopHero.classList.add("desktop--visible");
        checkScreenWidth()
    }

    window.addEventListener("resize", function() {
        h = window.innerHeight;
        w = window.innerWidth;

        site_h = site.offsetHeight;
        site_w = site.offsetWidth;

        // code

        if (site_w > h * 0.7) {
            mobileHero.classList.remove("mobile--visible");
            mobileHero.classList.add("mobile--hidden");
            header.style.height = h + "px";
            desktopHero.classList.remove("desktop--hidden");
            desktopHero.classList.add("desktop--visible");
            checkScreenWidth()
        } else {
            mobileHero.classList.remove("mobile--hidden");
            mobileHero.classList.add("mobile--visible");
            header.style.height = "auto";
            desktopHero.classList.remove("desktop--visible");
            desktopHero.classList.add("desktop--hidden");
        }

    });
});