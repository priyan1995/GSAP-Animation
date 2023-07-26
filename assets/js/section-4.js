console.log(window.scrollY)

// ============== dark bg
const tlIpBgBlackDIv = gsap.timeline({
    scrollTrigger: {
        trigger: '.s4-dark-bg',
        // markers: true,
        start: "top 95%",
        end: "bottom 40%",
        //scrub: 2,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.s4-dark-bg', { duration: 1, transform: 'scaleY(1)', opacity: 1 })

// ============== ipod 4
const tlIpod4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ipd-4',
        //  markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.ipd-4', { duration: 1, delay: 0.4, transform: 'scaleY(1)', opacity: 1 })


// ============== ipod 3
const tlIpod3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ipd-3',
        //markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.ipd-3', { duration: 1, delay: 0.3, transform: 'scaleY(1)', opacity: 1 })

// ============== ipod 2
const tlIpod2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ipd-2',
        // markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.ipd-2', { duration: 1, delay: 0.2, transform: 'scaleY(1)', opacity: 1 })


// ============== ipod 1
const tlIpod1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.ipd-1',
        // markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.ipd-1', { duration: 1, transform: 'scaleY(1)', opacity: 1 })


// ============== ipod line 1
const tlIpodLine1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-i-1',
        // markers: true,
        start: "top 95%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-i-1', { duration: 1, transform: 'scaleX(1)' })



const tlIpodLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-i-2',
        // markers: true,
        start: "top 75%",
        end: "bottom 50%",
        scrub: 2,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-i-2', { duration: 1, transform: 'scaleY(1)' })

// ========= type it


new TypeIt(".pd-ipd-h1", {
    speed: 50,
    startDelay: 500,
    waitUntilVisible: true,
})
    .go();

new TypeIt(".pd-ipd-h2", {
    speed: 50,
    startDelay: 500,
    waitUntilVisible: true,
})
    .go();




