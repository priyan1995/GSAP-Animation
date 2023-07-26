

// ============== ipod large
const tlipodBig1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-lg-img-1',
        // markers: true,
        start: "top 10%",
        end: "bottom -240%",
        scrub: true,
        pin:'.pd-ipd-lg-img-1',
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-lg-img-1', { duration: 1, transform: 'scale(1.15)', opacity: 1 })
    .to('.pd-ipd-lg-img-1', { duration: 1, transform: 'scale(0.8)', opacity: 0 })

    // ============== ipod large 2
const tlipodBig2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-lg-img-2',
        // markers: true,
        start: "top 10%",
        end: "bottom -140%",
        scrub: true,
        pin:true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-lg-img-2', { duration: 1, transform: 'scale(1.15)', opacity: 1 })
    .to('.pd-ipd-lg-img-2', { duration: 1, transform: 'scale(0.8)', opacity: 0 })

        // ============== ipod txt 1
const tlipodtxt = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-txt-1',
        // markers: true,
        start: "top 20%",
        end: "bottom -150%",
        scrub: true,
        pin:true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-txt-1', { duration: 1, opacity: 1 })
    .to('.pd-ipd-txt-1', { duration: 1, opacity: 1 })


            // ============== ipod txt 2
const tlipodtxt2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-txt-2',
        // markers: true,
        start: "top 20%",
        end: "bottom -240%",
        scrub: true,
        pin:true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-txt-2', { duration: 1, opacity: 1 })
    .to('.pd-ipd-txt-2', { duration: 1, opacity: 1 })

                // ============== ipod txt 3
const tlipodtxt3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-ipd-txt-3',
        // markers: true,
        start: "top 20%",
        end: "bottom -350%",
        scrub: true,
        pin:true,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-ipd-txt-3', { duration: 1, opacity: 1 })
    .to('.pd-ipd-txt-3', { duration: 1, opacity: 0 })





    
