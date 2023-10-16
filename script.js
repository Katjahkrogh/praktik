gsap
  .matchMedia()
  .add("(min-width:800px) and (prefers-reduced-motion: no-preference)", () => {
    // FORSIDE BILLEDE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-img",
        start: "top 45%",
        end: "+=1050px",
        scrub: true,
        duration: 3,
      },
    });

    tl.to(".header-img", {
      y: 0,
    }).to(".header-img", {
      y: 750,
    });

    const h1 = gsap.timeline({
      scrollTrigger: {
        trigger: "h1",
        start: "top 50%",
        end: "+=200px",
        markers: true,
      },
    });

    h1.from("h1", {
      x: 600,
      scale: 0.2,
      duration: 2,
    });

    gsap.from("#text-front p", {
      x: 500,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#text-front p",
        start: "top center",
        end: "bottom 50%",
        markers: true,
      },
    });

    gsap.from(".grid", {
      x: 1500,
      stagger: 0.1,
      ease: "ease.in",
      duration: 3,
      scrollTrigger: {
        trigger: ".grid",
        start: "top center",
        end: "+=250px",
        scrub: true,
        markers: true,
      },
    });
  });

// STOR SKÆRM >1700px
gsap
  .matchMedia()
  .add("(min-width:1700px) and (prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-img",
        start: "top 50%",
        end: "+=1100px",
        scrub: true,
      },
    });

    tl.to(".header-img", {
      y: 0,
    }).to(".header-img", {
      y: 1050,
    });
  });
