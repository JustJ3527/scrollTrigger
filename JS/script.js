gsap.registerPlugin(ScrollTrigger);



var timeOut;
const panel1 = document.getElementById("panel1"),
    panel2 = document.getElementById("panel2");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onLoad() {
    timeOut = setTimeout(showPage, 800);
    
}

function showPage() {
    window.scrollTo({
        top: 0,
        left: 0,
      });
    panel1.style.transform = "scale(1, -0.2)";
    sleep(200).then(() => {
        panel2.style.transform = "scale(1, 0)";
    });
}

//Redicrection
const panel = document.getElementById("panel");
function redirection() {
    panel2.style.transform = "none";
    sleep(200).then(() => {
        panel1.style.transform = "none";
    });
}


// const body = document.body,
//     scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//     height = scrollWrap.getBoundingClientRect().height - 1,
//     speed = 0.08;

// var offset = 0;


// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

var markersValue = "false";


gsap.set(".letter", {
        scale: 1.15,
});

gsap.from(".letter", {
        yPercent: 150,
        opacity: 0,
        stagger: 0.018,
		duration: 1.6,
		ease: "power4.inOut"
    }, "+=0.85");

gsap.to(".letter", {
        scale: 1,
        duration: 0.95,
        ease: "power3.out"
    },"-=0.1");


gsap.from(".container-img", { 
        opacity: 0, 
        duration: 5, 
        ease: "none" 
});


//Parallax
gsap.to(".container-img", {
    scrollTrigger: {
        trigger: ".container-img",
        scrub: true,
        start: "top 15.8%",
        end: "bottom top"
    },
    yPercent: 25,
    duration: 3,
    ease: "none"
})