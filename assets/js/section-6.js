

    
gsap.set('.pd-text-w', {scaleX:'0%', transformOrigin:'left center'})

gsap.timeline({
    scrollTrigger:{
      trigger: '.pd-text-w',
      scrub:0.3,
      start:"top 70%",
      end:"top 20%",
     // markers:true
    }
 })
  .to('.pd-text-w', {
    scaleX:'100%', 
  duration:1, ease:'none',
  stagger:1
})