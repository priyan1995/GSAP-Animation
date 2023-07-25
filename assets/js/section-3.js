const leftHand = document.querySelector('.pd-s-3-img-left');
const rightHand = document.querySelector('.pd-s-3-img-right');

// ============== left hand
const tlleftHand = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-s-3-img-left',
       // markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: 2,
        toggleActions: "restart pause resume reverse",
    }
})

.to('.pd-s-3-img-left', { duration: 5, transform: 'translateX(0)'})

// ============== right hand
const tlrighthand = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-s-3-img-right',
       // markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: 2,
        toggleActions: "restart pause resume reverse",
    }
})

.to('.pd-s-3-img-right', { duration: 5, transform: 'translateX(0)'})

// bottom ball zoom flip


const tlzoomgrayflipsecthree = gsap.timeline({
    scrollTrigger: {
        trigger: '.gry-zm-bl',
        markers: true,
        start: "top 150%",
        end: "bottom 70%",
        // scrub: 2,
        toggleActions: "restart resume resume reverse",
    }
})

.to('.gry-zm-bl', { duration: 2, transform: 'scale(1)',ease: "bounce.out"})


gsap.registerPlugin(Flip);
