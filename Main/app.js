gsap.registerPlugin(ScrollTrigger);

gsap.to(".sq", {
	//x: 1000,
	duration: 1,
	scrollTrigger: {
		trigger: ".sq2",
		scrub: 4,
		pin: ".sq",
		start: "top 80%",
		end: "top 30%",
		markers: true,
		toggleActions: "restart none none none",
		pinspacing: false,
		//              onEnter onLeave onEnterBack onLeaveBack
		// play pause resume reverse restart reset complete none
	},
});
