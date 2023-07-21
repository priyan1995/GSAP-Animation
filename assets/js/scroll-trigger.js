gsap.registerPlugin(ScrollTrigger);

gsap.to(".pd-s-t-box",{
    x: 500,
    duration:3,
    opacity:1,
    scrollTrigger: {
        trigger: '.pd-s-t-box',
        start: "top center"
    }
})