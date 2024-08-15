gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

ligtmodeTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".line-one", 
        // markers: true,
        scrub: true, 
        // start: "top ",
        // end: "bottom",
        pin: true
    }
})

ligtmodeTl.from(".line-one span", {y: "100vh", stagger: .2})
          .to(".line-one", {backgroundColor: "yellow"})
          .from(".sun", {right: "-15vw"})
          .to(".line-one span", {x: "100vw"}, "+=3")
          .to(".sun", {x:"-100vw"})
          .to(".line-one", {backgroundColor: "white"})

let orTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".line-two", 
        // markers: true,
        scrub: true, 
        // start: "top ",
        // end: "bottom",
        pin: true
    }
})

const oSpan = document.querySelector(".line-two span:first-child")
const rSpan= document.querySelector(".line-two span:last-child")

orTl.from(".line-two span", {scale: 10, opacity: 0})
    .to(oSpan, {y: -10})
    .to(oSpan, {y: 0})
    .to(rSpan, {y: -10})
    .to(rSpan, {y: 0})

let darkmodeTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".line-three", 
        // markers: true,
        scrub: true, 
        // start: "top ",
        // end: "bottom",
        pin: true
    }
})
 
darkmodeTl.from(".line-three span", {y: "100vh", stagger: .2})
          .to(".line-three", {backgroundPositionX: "0"})
          .to(".line-three span", {color: "white"}, "<")
          .from(".moon",  {right:"-15vw"})