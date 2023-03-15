gsap.registerPlugin(ScrollTrigger);

//Redicrection
const panel = document.getElementById("panel");
function redirection() {
    panel.style.transform = "none"; 
}

let mybutton = document.getElementById("navbar");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 150) {
    mybutton.style.backgroundColor = "var(--darkColor)";
} else {
    mybutton.style.backgroundColor = "transparent";
}
}

const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.1;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

var markersValue = "false";

gsap.to(".panel", {
	scaleY: 0,
	duration: 1.65,
	ease: "power4.inOut"
});

const nameTL = gsap.timeline();

nameTL
    .set(".letter", {
        scale: 1.4,
    })
    .from(".letter", {
        yPercent: 150,
        opacity: 0,
        stagger: 0.018,
		duration: 1.6,
		ease: "power4.inOut"
    }, "+=0.85")

    .to(".letter", {
        scale: 1,
        duration: 0.95,
        ease: "power3.out"
    },"-=0.75")

    .from(".container-img", { 
        opacity: 0, 
        duration: 5, 
        ease: "power2.out" 
    }, "-=0.85");

gsap.to(".container-text", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".container-text",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
    }, 
    });
    gsap.to(".container-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".container-img",
            start: "center 50%", // the default values
            end: "center top",
            scrub: true
        }, 
      });