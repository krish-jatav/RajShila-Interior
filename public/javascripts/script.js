function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ?
                locoScroll.scrollTo(value, 0, 0) :
                locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ?
            "transform" : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init();
var imgShow = document.querySelector(".img-show");
var box = document.querySelector(".card");
var box1 = document.querySelector(".img1");

// var flag = 0;
// document.querySelector("#menu").addEventListener("click", function() {
//     if (flag == 0) {
//         document.querySelector("#menu").style.height = "24px";
//         document.querySelector("#line1").style.rotate = "47deg";
//         document.querySelector("#line2").style.rotate = "-48deg";
//         document.querySelector(".navpage").style.opacity = 1;
//         flag = 1;
//     } else {
//         document.querySelector("#menu").style.height = "12px";
//         document.querySelector("#line1").style.rotate = "0deg";
//         document.querySelector("#line2").style.rotate = "0deg";
//         document.querySelector("#line1").style.color = "#ffffff";
//         document.querySelector("#line2").style.color = "#ffffff";
//         document.querySelector(".navpage").style.opacity = 0;
//         flag = 0;
//     }
// });
var flag = 0;
document.querySelector("#menu").addEventListener("click", function() {
    if (flag == 0) {
        document.querySelector("#menu").style.height = "24px";
        document.querySelector("#line1").style.transform = "rotate(47deg)";
        document.querySelector("#line2").style.transform = "rotate(-48deg)";
        document.querySelector(".navpage").style.opacity = 1;
        flag = 1;
    } else {
        document.querySelector("#menu").style.height = "12px";
        document.querySelector("#line1").style.transform = "rotate(0deg)";
        document.querySelector("#line2").style.transform = "rotate(0deg)";

        document.querySelector(".navpage").style.opacity = 0;
        flag = 0;
    }
});


var tl = gsap.timeline();
gsap.from(".cards", {
    opacity: 0,
    // rotate: 10,
    y: 300,
    duration: "2",
    delay: ".2",
});
gsap.from(".elem h2", {
    opacity: 0,
    // rotate: 10,
    y: 300,
    duration: "2",
    delay: ".4",
});
tl.from("#page-2 .card", {
    opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: ".5",
    // scale: "0",
    //   x: "600",
    stagger: "1",
    scrollTrigger: {
        trigger: "#page-2 h1",
        scroller: "#main",
        start: "top 60%",
        // markers: "true",
        end: "100%",
        scrub: 6,
        opacity: 1,
    },
});
tl.from("#kitchen .card", {
    opacity: 0,
    // rotate: 10,
    duration: "2",
    delay: ".5",
    // scale: "0",
    //   x: "600",
    stagger: "1",
    scrollTrigger: {
        trigger: "#kitchen .card",
        scroller: "#main",
        start: "top 90%",
        // markers: "true",
        end: "100%",
        scrub: 10,
        opacity: 1,
    },
});