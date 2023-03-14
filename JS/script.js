gsap.registerPlugin(ScrollTrigger);

// const body = document.body,
//     scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//     height = scrollWrap.getBoundingClientRect().height - 1,
//     speed = 0.1;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

var c = ".c";
gsap.to(c, {
    scrollTrigger: {
        trigger: c,
        start : "top center",
        end: "bottom 100px",
        markers: true,
        scrub: true,
        pin: true,
        toggleAction: "restart pause reverse pause"
    },
    x: 400,
    rotation: 360,
    duration: 3,
    ease: "none"
})