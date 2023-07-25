
const gradiant = document.querySelector(".bgGradiant");
const bannerImage = document.querySelector(".bannerImg");
const bannerTitle = document.querySelector(".bannerTitle");

const anim1 = new TimelineMax();

anim1.fromTo(bannerImage, 1, { height: "0" }, { height: "auto", ease: Power2.easeInOut })
    .fromTo(bannerImage, 1.2, { width: "0" }, { width: "auto", ease: Power2.easeInOut })

    .fromTo(gradiant, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
    .fromTo(bannerTitle, 1.5, { x: "50%", opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })


// toggle class
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers:true,
    start: "top 70%",
    end: "top 0%",
    trigger: '.st-toggle-sec-2',
    toggleClass: { targets: ".st-toggle-sec-2", className: "pd-sec-light" },
    ease: Power2.easeInOut
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-zoom-bl',
        //markers:true,
        start: "top 95%",
        end: "bottom 30%",
        scrub: 2,
        toggleActions: "restart pause resume reverse",
    }
})

tl
    .to('.pd-zoom-bl', { duration: 5, width: '150%', height: "150%", top: 0, left: '-5%' })

// iphone img

const tlip = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-st-img-ip',
      //  markers: true,
        start: "top 95%",
        end: "bottom 40%",
        scrub: false,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-st-img-ip', { duration: 5, transform: 'translateX(0)' , ease: "back.out(1.7)"})

// ============== shadow
const tlshadow = gsap.timeline({
    scrollTrigger: {
        trigger: '.pd-shadow-img',
       // markers: true,
        start: "top 95%",
        end: "bottom 40%",
        //scrub: 2,
        toggleActions: "restart resume resume reverse",
    }
})

    .to('.pd-shadow-img', { duration: 7, transform: 'translateX(0)', opacity: 1, width: '66px', height: '11px', ease: "slow" })


window.addEventListener('mousemove', function (e) {

    //let valueY = e.clientY;
    let valueX = e.clientX ;

   // bannerImage.style.top = valueY * 0.008 + '%';
    bannerImage.style.left = valueX * 0.0019 + '%';
   // bannerImage.style.WebkitTransform = 'translateX( '+ valueX * 0.019 +'px )';
   
   
})




window.addEventListener('scroll', function () {

    // console.log('asfasdf');

    let value2Y = scrollY;

    console.log(value2Y);

    // bannerImage.style.top = valueY * 0.08 + '%';
    
    bannerImage.style.WebkitTransform = 'rotate('+ value2Y * 0.069 +'deg) translateY( '+ value2Y  +'px )';
   
})