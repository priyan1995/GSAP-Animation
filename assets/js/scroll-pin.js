gsap.registerPlugin(ScrollTrigger);

gsap.to(".pd-s-t-box-pin", {
    x: 1000,
    duration: 3,
    opacity: 1,
    scrollTrigger: {
        trigger: '.pd-s-t-box-pin-2',
        start: "top 70%",
        end: "bottom 35%",
        scrub: 4,
        markers: true,
        toggleActions: "restart pause resume reverse",
        //               enter  onleave onEnterBack onLeaveBack
        pin: '.pd-s-t-box-pin',
        pinSpacing:false,
    }
})
