gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => gsap.set("body", { autoAlpha: 1 }));


gsap.to(".panel", {
	scaleY: 0,
	duration: 1.65,
	ease: "power4.inOut"
});


const nameTL = gsap.timeline();

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".sec-img",
		// markers: true,
		scrub: 0.4,
		scroller: ".scrollContainer",
		pin: true,
		start: "center center",
		end: "+=100%"
	}
});

tl
	.to(".mask", {
		scaleY: 0
	})
	.from(
		splitJL.chars,
		{
			opacity: 0,
			x: -100,
			stagger: 0.015
		},
		0
	)
	.from(
		".img",
		{
			opacity: 0,
			scale: 1.7
		},
		0
	);

gsap.from("p", {
	scrollTrigger: {
		trigger: ".sec-p",
		// markers: true,
		start: "top center",
		scroller: ".scrollContainer",
		toggleActions: "play none none reverse"
	},
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power3.out"
});
