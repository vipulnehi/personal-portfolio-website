function loadinganimation(){
    var tl = gsap.timeline()
    tl.from(".animation", {
        opacity: 0,
        duration: 0.1,
        delay: 0.2
    })
    tl.from(".animation", {
        transform: "scaleX(.2) scaleY(.2) translateY(80%)",
        borderRadius: "250px",
        duration: 2.4,
        ease: "expo.out"
    })
    
    // tl.from(".self-paragraph", {
    //     opacity: 0,
    //     delay: -0.2
    // })
    // tl.from(".main-background", {
    //     transform: "scaleX(.2) scaleY(.2) translateY(80%)",
    //     borderRadius: "250px",
    //     duration: 1,
    //     ease: "expo.out",
       

    // })
    // tl.from("#page4", {
    //     opacity: 0,
    //     duration: 0.6,
    //     stagger: 0.4
    // })
}
loadinganimation()