//ALLE SKÆRME
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  //FRITID TEKST
  gsap.from("#textbox", {
    ease: "linear.in",
    opacity: 0,
    y: 25,
    scrollTrigger: {
      trigger: "#textbox",
      start: "top 50%",
      end: "+=100px",
      scrub: 0.5,
    },
  });

  // OM MIG TEKST
  gsap.from("#om p", {
    ease: "linear.in",
    opacity: 0,
    y: 25,
    scrollTrigger: {
      trigger: "#om p",
      start: "top 50%",
      end: "+=100px",
      scrub: 0.5,
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
      start: "top 80%",
      end: "+=300px",
      scrub: 0.2,
    },
    color: "#f26849",
  });

  gsap.to(text, {
    scrollTrigger: {
      trigger: content,
      start: "top 80%",
      end: "+=300px",
      scrub: 0.2,
    },
    color: "white",
  });

  gsap.to(h2, {
    scrollTrigger: {
      trigger: content,
      start: "top 80%",
      end: "+=300px",
      scrub: 0.2,
    },
    color: "white",
  });

  gsap.to(content, {
    scrollTrigger: {
      trigger: content,
      start: "top 80%",
      end: "+=300px",
      scrub: 0.2,
    },
    backgroundColor: "black",
  });

  gsap.from(".grid", {
    scale: 0.5,
    opacity: 0,
    y: 40,
    overflow: "hidden",
    ease: "linear",
    scrollTrigger: {
      trigger: ".grid",
      start: "top 80%",
      end: "+=300px",
      scrub: 0.3,
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

    // FORSIDE TEKST
    gsap.from("#text-front p", {
      x: 200,
      opacity: 0,
      duration: 0.5,
      ease: "ease.out",
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
