//Redicrection
const panel = document.getElementById("panel");
function redirection() {
    panel.style.transform = "none"; 
}

gsap.registerPlugin(ScrollTrigger);

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

const w = ".w",
    e = ".e",
    l = ".l",
    c = ".c",
    o = ".o",
    m = ".m",
    e2 = ".e2";

var markersValue = "True";

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
    })

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
