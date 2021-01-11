// NAVBAR ANIMATION
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 2,
  delay: 1.2,
  y: 30,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".nav__item, .nav__btn", {
  opacity: 0,
  duration: 2,
  delay: 1.4,
  y: 30,
  ease: "expo.out",
  stagger: 0.2,
});

// HERO ANIMATION
gsap.from(".hero__img", { opacity: 0, duration: 2, delay: 0.5, x: 40 });
gsap.from(".hero__data", { opacity: 0, duration: 2, delay: 0.8, y: 40 });
gsap.from(".hero__title, .hero__description, .hero__btn", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 40,
  ease: "expo.out",
  stagger: 0.2,
});
