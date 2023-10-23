//ALLE SKÆRME
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  //FRITID TEKST
  gsap.from("#textbox", {
    y: 50,
    ease: "linear",
    opacity: 0,
    // duration: 2,
    scrollTrigger: {
      trigger: "#textbox",
      start: "top 50%",
      end: "+=100px",
      scrub: 0.2,
    },
  });

  // OM MIG TEKST
  gsap.from("#om p", {
    y: 50,
    ease: "linear",
    opacity: 0,
    // duration: 2,
    scrollTrigger: {
      trigger: "#om p",
      start: "top center",
      end: "+=100px",
      scrub: 0.2,
    },
  });

  // KOMPETENCER
  const content = document.querySelector("#kompetencer");
  const h2 = document.querySelector("#kompetencer h2");
  const text = document.querySelectorAll(".komp");
  const h3 = document.querySelectorAll(".komp h3");

  gsap.to(h3, {
    scrollTrigger: {
      trigger: content,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
    color: "#f26849",
  });

  gsap.to(text, {
    scrollTrigger: {
      trigger: content,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
    color: "white",
  });

  gsap.to(h2, {
    scrollTrigger: {
      trigger: content,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
    color: "white",
  });

  gsap.to(content, {
    scrollTrigger: {
      trigger: content,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
    backgroundColor: "black",
  });

  gsap.from(".grid", {
    scale: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.1,
    overflow: "hidden",
    ease: "linear",
    duration: 3,
    scrollTrigger: {
      trigger: ".grid",
      start: "top 70%",
      end: "+=100px",
      scrub: 0.5,
    },
  });
});

// SKÆRME OVER 800px
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
      },
    });

    h1.from("h1", {
      x: 200,
      scale: 0.2,
      duration: 2,
    });

    // FORSIDE TEKST
    gsap.from("#text-front p", {
      x: 200,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#text-front p",
        start: "top center",
        end: "bottom 50%",
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
        end: "+=1200px",
        scrub: true,
      },
    });

    tl.to(".header-img", {
      y: 0,
    }).to(".header-img", {
      y: 1050,
    });
  });
