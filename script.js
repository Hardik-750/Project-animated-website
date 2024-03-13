var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
    blur.style.left =dets.x -250 +"px"
    blur.style.top =dets.y -250 +"px"
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y: 50,
    opacity: 0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})