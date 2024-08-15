function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to(".nav-bottom", {
      height: "27vh",
    });
    tl.to(".navpart2 .nav-elem h5", {
      display: "block",
    });
    tl.to(".navpart2 .nav-elem h5 span", {
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.2,
      },
    });
  });

  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();

    tl.to(".navpart2 .nav-elem h5 span", {
      y: 25,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".nav-bottom", {
      height: "0",
      duration: 0.01,
    });
    tl.to(".navpart2 .nav-elem h5", {
      display: "none",
      duration: 0.02,
    });
  });
}
navAnimation()