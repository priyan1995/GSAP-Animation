gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({  
    scrollTrigger: {
        trigger:'.pd-s-t-box-timeline',
        markers:true,
        start: "top 90%",
        end: "bottom 10%",
        scrub:5,
        toggleActions: "restart pause resume reverse",
    }
})  

tl.to('.pd-s-t-box-timeline', {x:1000,y:-200, duration:5,opacity: 1})
.to('.pd-s-t-box-timeline', {y:0, duration:5})
.to('.pd-s-t-box-timeline', {x:0,y:580, duration:5,borderRadius:'0%',})
.to('.pd-s-t-box-timeline', { x:0,y:0,duration:5,width:'100%',height:"100%"})
// .to('.pd-s-t-box-timeline', { position:'fixed',top:0})