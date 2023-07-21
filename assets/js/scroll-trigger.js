gsap.registerPlugin(ScrollTrigger);

gsap.to(".pd-s-t-box",{
    x: 700,
    duration:3,
    opacity:1,
    scrollTrigger: {
        trigger: '.pd-s-t-box',
        start: "top 70%",
        end: "bottom 35%",
         toggleActions: "restart pause resume reverse"
        //               enter  onleave onEnterBack onLeaveBack
    }
})