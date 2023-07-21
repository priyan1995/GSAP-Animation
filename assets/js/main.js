
const gradiant = document.querySelector(".bgGradiant");
const bannerImage = document.querySelector(".bannerImg");
const bannerTitle = document.querySelector(".bannerTitle");

const anim1 = new TimelineMax();

anim1.fromTo( bannerImage, 1, { height:"0" }, {height:"80vh", ease: Power2.easeInOut} )
.fromTo(bannerImage, 1.2, { width:"100%" }, { width:"80%", ease: Power2.easeInOut })

.fromTo( gradiant, 1.2, { x: "-100%" }, { x:"0%", ease: Power2.easeInOut } )
.fromTo ( bannerTitle, 1.5 , { x:"50%", opacity: 0 }, { x:"0%", opacity: 1, ease: Power2.easeInOut } )


// toggle class
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    markers:true,
    start: "top 70%",
    end: "top 0%",
    trigger: '.st-toggle-sec-2',
    toggleClass: { targets: ".st-toggle-sec-2", className: "pd-sec-light"},
    ease: Power2.easeInOut
})